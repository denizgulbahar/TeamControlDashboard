import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Groups, AccountTree, BarChart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { MenuItem } from "../../types/drawer";

const NavigationDrawer = (): JSX.Element => {
  // Define menuItems with proper types
  const menuItems: MenuItem[] = [
    { text: "Teams", icon: <Groups />, path: "/" },
    { text: "Diagram", icon: <AccountTree />, path: "/diagram" },
    { text: "Charts", icon: <BarChart />, path: "/charts" },
  ];

  return (
    <Drawer variant="permanent" sx={styles.drawer}>
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={path}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const styles = {
  drawer: {
    width: 300,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 250, // Drawer Paper Width
    },
  }
}

export default NavigationDrawer;