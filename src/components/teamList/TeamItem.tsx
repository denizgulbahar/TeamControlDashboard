import React from "react";
import { Paper, ListItem, ListItemText, Button } from "@mui/material";
import { TeamItemProps, User } from "../../types/team";

// FormatUser Function
const formatUser = (user: User): string =>
  `{ ${Object.entries(user).map(([k, v]) => `${k}: ${v}`).join(", ")} }`;

// UserList Component
const UserList: React.FC<{ users: User[] }> = ({ users = [] }) => (
  <ListItemText primary={`Users: ${users.length > 0 ? users.map(formatUser).join(" - ") : "No users"}`} />
);

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
  listItem: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  infoContainer: { display: "flex", flexDirection: "column", gap: 8, margin: 20 }
};

export default TeamItem;
