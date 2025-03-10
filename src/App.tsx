import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import TeamScreen from "./screens/TeamScreen";
import DiagramScreen from "./screens/DiagramScreen";
import ChartScreen from "./screens/ChartScreen";


const App = () => {
  const menuItems = [
    { text: "Teams", path: "/" },
    { text: "Diagram", path: "/diagram" },
    { text: "Charts", path: "/charts" },
  ];

  return (
      <Router>
        <Box sx={{ flex: 1, display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: 250, padding: 2 }}>
            {menuItems.map(({ text, path }) => (
              <Button key={text} component={Link} to={path} variant="contained" sx={{ width: "100%" }}>
                {text}
              </Button>
            ))}
          </Box>
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