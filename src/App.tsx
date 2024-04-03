import "./App.css";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import GitHubIcon from "@mui/icons-material/GitHub";
import SerialLeft from "./serial/SerialLeft";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import SendView from "./serial/SendView";

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
            <MenuItem onClick={() => window.open("https://github.com/moieo/WebSerial")}>
              <GitHubIcon sx={{ pr: 0.8 }} />
              GitHub
            </MenuItem>
            <MenuItem onClick={() => window.open("https://moieo.cn")}>
              <InfoIcon sx={{ pr: 0.8 }} />
              关于
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid lg={2.8} md={3} width={"100%"}>
            <SerialLeft></SerialLeft>
          </Grid>
          <Grid lg={9.2} md={9} width={"100%"}>
            <SendView />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
