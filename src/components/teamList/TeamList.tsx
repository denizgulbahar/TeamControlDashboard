import React, { useState } from "react";
import { List } from "@mui/material";
import FormModal from "../modal/FormModal";
import { useTeamContext } from "../../context/TeamContext";
import { NewUser, User } from "../../types/team";
import TeamItem from "./TeamItem";

const TeamList: React.FC = () => {
  const { teams, addUser } = useTeamContext();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState<string>("");
  const [userData, setUserData] = useState<NewUser>({ name: "", role: "" });

  const handleOpenUserModal = (teamId: string) => {
    setSelectedTeamId(teamId);
    setIsUserModalOpen(true);
  };

  const handleCloseUserModal = () => {
    setSelectedTeamId("");
    setIsUserModalOpen(false);
    setUserData({ name: "", role: "" });
  };

  const handleChange = (key: keyof User, value: string) =>
    setUserData((prev) => ({ ...prev, [key]: value }));

  const handleAddUser = () => {
    if (!userData.name || selectedTeamId === null) return;
    addUser(selectedTeamId, userData);
    handleCloseUserModal();
  };

  const AddUserInputs = [
    { name: "name", label: "Name", value: userData.name || ""  },
    { name: "role", label: "Role", value: userData.role || "" },
  ] as const;

  return (
    <List>
      {teams.map((team) => (
        <TeamItem key={team.id} team={team} handleOpenUserModal={handleOpenUserModal} />
      ))}
      <FormModal
        open={isUserModalOpen}
        onClose={handleCloseUserModal}
        title="Add User"
        inputs={AddUserInputs}
        onChange={handleChange}
        onSubmit={handleAddUser}
      />
    </List>
  );
};

export default TeamList;
