import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import TeamScreen from "./screens/TeamScreen";
import DiagramScreen from "./screens/DiagramScreen";
import ChartScreen from "./screens/ChartScreen";
import NavigationDrawer from "./components/drawer/NavigationDrawer";

const App = () => {

  return (
    <Router>
    <Box sx={{ flex: 1, display: "flex" }}>
      <NavigationDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ padding: 0 }}>
        <Routes>
          <Route path="/" element={<TeamScreen />} />
          <Route path="/diagram" element={<DiagramScreen />} />
          <Route path="/charts" element={<ChartScreen />} />
        </Routes>
      </Box>
    </Box>
  </Router>
  );
}
export default App;