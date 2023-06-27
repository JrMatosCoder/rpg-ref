import React from "react";
import styles from "./navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const RotasPages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Campanha",
    path: "/campanha",
  },
  {
    name: "Deuses",
    path: "/deuses",
  },
];

const DrawerComponent = () => {
  return (
    <ul className={styles.navbar}>
      {RotasPages.map((item, index) => (
        <a href={item.path} key={index}>
          <li>{item.name}</li>
        </a>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);

  function OpenMenu(isOpen) {
    setMenu(!menu);
    console.log(menu);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.APPBAR}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => OpenMenu()}>
            <MenuIcon />
          </IconButton>
          <h2>Dugeons and Dragons</h2>
        </Toolbar>
      </AppBar>
      {menu && <DrawerComponent />}
    </Box>
  );
};

export default Navbar;
