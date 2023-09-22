import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function DashboardLayout({ children }) {
  const drawerWidth = 240;
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <SideBar
        drawerWidth={drawerWidth}
        openDrawer={openDrawer}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
