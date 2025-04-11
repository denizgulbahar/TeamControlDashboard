import React from "react";
import { Paper, ListItem, ListItemText, Button } from "@mui/material";
import { TeamItemProps, User } from "../../types/team";
import UserCard from "./userCard";

// UserList Component
const UserList: React.FC<{ users: User[] }> = ({ users = [] }) => {
  if (users.length === 0) return <ListItemText primary="No users" />;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

// TeamItem Component
const TeamItem: React.FC<TeamItemProps> = ({ team, handleOpenUserModal }) => {
  const filteredEntries = Object.entries(team).filter(([key]) => key !== "id" && key !== "users");
  
  return (
    <Paper style={styles.paper}>
      <ListItem style={styles.listItem}>
        <div style={styles.infoContainer}>
          {filteredEntries.map(([key, value]) => (
            <ListItemText key={key} primary={`${key}: ${String(value)}`} />
          ))}
          <UserList users={team.users} />
        </div>
        <Button variant="contained" color="primary" onClick={() => handleOpenUserModal(team.id)}>
          Add User
        </Button>
      </ListItem> 
    </Paper>
  );
};

// Styles
const styles = {
  paper: { marginBottom: 20, padding: 8 },
  listItem: { display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" },
  infoContainer: { display: "flex", flexDirection: "column", gap: 8, marginRight: 20 }
};

export default TeamItem;
