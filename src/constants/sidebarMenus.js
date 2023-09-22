import {
  Group as GroupIcon,
  Groups as GroupsIcon,
  History as HistoryIcon,
  Person as PersonIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

export default function (userRole = {}) {
  const menus = [
    {
      id: Math.random(),
      label: "Dashboard",
      // icon: <GroupsIcon />,
      children: [
        {
          id: Math.random(),
          to: "/employee",
          label: "Employee",
          permission: true,
          // icon: <PersonIcon />,
        },
      ],
    },
    {
      id: Math.random(),
      label: "Reports",
      permission: true,
      // icon: <BarChartIcon />,
    },
    {
      id: Math.random(),
      label: "Setting",
      // icon: <SettingsIcon />,
      permission: true,
      children: [
        {
          id: Math.random(),
          to: "/user-role",
          label: "User Role",
          permission: true,
          // icon: <GroupIcon />,
          selected: ["/add-user-role"],
        },
        {
          id: Math.random(),
          to: "/logs",
          label: "Log",
          permission: true,
          // icon: <HistoryIcon />,
        },
      ],
    },
  ];

  return menus.map((obj) =>
    obj.children ? handleMultipleMenu(obj) : handleSingleMenu(obj)
  );
}

const handleSingleMenu = (obj) => {
  return obj.selected
    ? { ...obj, selected: [...obj.selected, obj.to] }
    : { ...obj, selected: [obj.to] };
};

const handleMultipleMenu = (obj) => {
  var menu = { ...obj };

  menu.permission = menu.children.reduce(
    (prev, current) => prev || current.permission,
    false
  );
  menu.hasChildren = true;
  menu.children = menu.children.map((child) => handleSingleMenu(child));

  return menu;
};
