import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function SingleSideBarMenu({ menu }) {
  const navigate = useNavigate();

  if (!menu.permission) return <></>;

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => navigate(menu?.to)}>
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.label} />
      </ListItemButton>
    </ListItem>
  );
}
