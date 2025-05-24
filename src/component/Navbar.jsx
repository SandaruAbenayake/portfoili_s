import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { Link } from "react-scroll";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  
  const navItems = ["about", "portfolio", "contact"];

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ backdropFilter: "blur(10px)" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Developer
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={() => setOpen(true)}>
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
              <List>
                {navItems.map((item) => (
                  <ListItem button key={item}>
                    <Link
                      to={item}
                      smooth
                      duration={500}
                      onClick={() => setOpen(false)}
                    >
                      <ListItemText
                        primary={item.charAt(0).toUpperCase() + item.slice(1)}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              style={{ margin: "0 16px", cursor: "pointer" }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
