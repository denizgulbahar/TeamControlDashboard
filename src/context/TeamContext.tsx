import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { nanoid } from "nanoid"; 
import { NewUser, Team, TeamContextType, User } from "../types/team";

// Initial Context
const defaultContext: TeamContextType = {
  teams: [],
  addTeam: () => {},
  addUser: () => {},
  removeUser: () => {},
};

const TeamContext = createContext<TeamContextType>(defaultContext);

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [teams, setTeams] = useState<Team[]>([]);

  // Update the specified team  
  const updateTeam = (teamId: string, updateFn: (team: Team) => Team) => {
    setTeams((prev) =>
      prev.map((team) => (team.id === teamId ? updateFn(team) : team))
    );
  };

  const addTeam = useCallback(
    (team: { name: string; description: string; leader: string; users?: User[] }) => {
      setTeams((prev) => [
        ...prev,
        { id: nanoid(), ...team, users: team.users ?? [] },
      ]);
    },
    []
  );

  const addUser = useCallback((teamId: string, user: NewUser) => {
    updateTeam(teamId, (team) => ({
      ...team,
      users: [...team.users, { id: nanoid(), ...user }],
    }));
  }, []);

  const removeUser = useCallback((teamId: string, userId: string) => {
    updateTeam(teamId, (team) => ({
      ...team,
      users: team.users.filter((user) => user.id !== userId),
    }));
  }, []);

  return (
    <TeamContext.Provider value={{ teams, addTeam, addUser, removeUser }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeamContext = () => useContext(TeamContext);
