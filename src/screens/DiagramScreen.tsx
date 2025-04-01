import React from 'react';
import { Container } from "@mui/material";
import Flow from '../components/flow/Flow';

const DiagramScreen: React.FC = () => {
  return (
    // Subtract 300px Drawer Width 
    <Container style={{ width: 'calc(100vw - 300px)', height: 'calc(100vh)' }}>
      <Flow />
    </Container>
  );
}

export default DiagramScreen;