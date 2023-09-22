import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

import sidebarMenus from "../../constants/sidebarMenus";
import MultipleSideBarMenu from "./fragments/MultipleSideBarMenu";

export default function SideBar({
  drawerWidth,
  openDrawer,
  handleDrawerToggle,
}) {
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />

      <MultipleSideBarMenu menus={sidebarMenus()} />
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* using the temporary variant to display a drawer for small screens and
      permanent for a drawer for wider screens. */}
      <Drawer
        variant="temporary"
        open={openDrawer}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
