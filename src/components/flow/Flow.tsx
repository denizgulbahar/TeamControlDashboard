import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Node,
  Edge,
} from 'reactflow';

import 'reactflow/dist/style.css'; // Import styles
import { useTeamContext } from '../../context/TeamContext'; // Context
import { User, Team } from '../../types/team'; // Types

const Flow: React.FC = () => {
  const { teams, removeUser } = useTeamContext();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];
    let nodeIdCounter = 1;

    teams.forEach((team: Team) => {
      // Create team node
      const teamNode: Node = {
        id: `team-${team.id}`,
        position: { x: 200, y: 100 * nodeIdCounter },
        data: { label: `Team: ${team.name}`, teamId: team.id },
        type: 'default',
      };
      newNodes.push(teamNode);

      // Check visibility setting for users
      if (visibleUsers[team.id] ?? true) {
        team.users.forEach((user: User) => {
          // Create user node
          const userNode: Node = {
            id: `user-${user.id}`,
            position: { x: 400, y: 100 * nodeIdCounter },
            data: { label: `${user.name} (${user.role})`, teamId: team.id, userId: user.id },
            type: 'default',
          };
          newNodes.push(userNode);
          
          // Create edge between team and user
          newEdges.push({
            id: `e${team.id}-${user.id}`,
            source: teamNode.id,
            target: userNode.id,
          });
          
          nodeIdCounter++;
        });
      }
      nodeIdCounter++;
    });

    setNodes(newNodes);
    setEdges(newEdges);
  }, [teams, visibleUsers]);

  // Handles right-click on nodes for context menu actions
  const onNodeContextMenu = useCallback((event: React.MouseEvent, node: Node) => {
    event.preventDefault();

    if (node.id.startsWith('team-')) {
      // Toggle visibility of users for the clicked team
      const teamId = node.data.teamId;
      setVisibleUsers((prev) => ({
        ...prev,
        [teamId]: !prev[teamId],
      }));
    } else if (node.id.startsWith('user-')) {
      // Remove user from the team with confirmation
      const { userId, teamId } = node.data;
      if (window.confirm('Are you sure you want to remove the user from the team?')) {
        removeUser(teamId, userId);
      }
    }
  }, [removeUser]);

  // Handles edge connections between nodes
  const onConnect = useCallback((params: Connection) => {
    setEdges((edges) => addEdge(params, edges));
  }, [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeContextMenu={(event, node) => onNodeContextMenu(event, node)}
      onContextMenu={(event) => event.stopPropagation()} // Prevent context menu from interfering with UI
      style={{ width: '100%', height: '100%' }}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default Flow;