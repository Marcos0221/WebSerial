import "./App.css";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import GitHubIcon from "@mui/icons-material/GitHub";
import SerialLeft from "./serial/SerialLeft";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

function App() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WebSerial
          </Typography>
          <IconButton onClick={handleClick} size="large" aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>
              <GitHubIcon sx={{ pr: 0.8 }} />
              GitHub
            </MenuItem>
            <MenuItem>
              <InfoIcon sx={{ pr: 0.8 }} />
              关于
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: "300px", p: 2 }}>
        <SerialLeft></SerialLeft>
      </Box>
    </Box>
  );
}

export default App;
