import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { User } from "../../types/team";


const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Card style={cardStyles.card}>
      <CardContent>
        <Typography style={cardStyles.info}>userName: {user.name}</Typography>
        <Typography style={cardStyles.info}>userID: {user.id}</Typography>
        <Typography style={cardStyles.info}>userRole: {user.role}</Typography>
      </CardContent>
    </Card>
  );
};

const cardStyles = {
    card: {
      minWidth: 200,
      marginBottom: 8,
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    info: {
      fontSize: 14,
      color: "#555",
    },
};

export default UserCard;
