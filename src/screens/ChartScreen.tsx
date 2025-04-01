import React from "react";
import { Container } from "@mui/material";
import BarChartComponent from "../components/charts/BarChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";

const ChartScreen: React.FC = () => {
  return (
    <Container style={styles.screenWrapper}>
      <PieChartComponent />
      <BarChartComponent />
    </Container>
  )
}
const styles: { screenWrapper: React.CSSProperties } = {
  screenWrapper: {
    width: 'calc(100vw - 300px)', 
    height: 'calc(100vh)', 
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

export default ChartScreen;