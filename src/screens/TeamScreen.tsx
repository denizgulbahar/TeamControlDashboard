import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import TeamList from "../components/teamList/TeamList";
import FormModal from "../components/modal/FormModal";
import { useTeamContext } from "../context/TeamContext";
import { NewTeam } from "../types/team";

const TeamScreen: React.FC = () => {
  const { teams, addTeam } = useTeamContext();

  // States
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [teamData, setTeamData] = useState<NewTeam>({
    name: "",
    description: "",
    leader: "",
  });

  // Functions
  const handleChange = (key: keyof NewTeam, value: string) => {
    setTeamData((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddTeam = () => {
    if (!teamData.name) return;
    addTeam({ ...teamData });
    setTeamData({ name: "", description: "", leader: "" });
    setIsTeamModalOpen(false);
  };
  // Data
  const AddTeamInputs = [
    { name: "name", label: "Team Name", value: teamData.name || "" },
    { name: "description", label: "Description", value: teamData.description || "" },
    { name: "leader", label: "Leader Name", value: teamData.leader || "" },
  ] as const;
  console.log("teams:",teams )
  return (
    <Container maxWidth="sm">
      <h1>Teams</h1>

      {/* Team List Component (Handles User Modals) */}
      <TeamList />

      {/* Add Team Button */}
      <Button 
        fullWidth 
        variant="contained" 
        color="success" 
        onClick={() => setIsTeamModalOpen(true)}
        sx={{ mt: 2 }}
      >
        Add Team
      </Button>

      {/* Add Team Modal */}
      <FormModal
        open={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        title="Add Team"
        inputs={AddTeamInputs}
        onChange={handleChange}
        onSubmit={handleAddTeam}
      />
    </Container>
  );
};

export default TeamScreen;
