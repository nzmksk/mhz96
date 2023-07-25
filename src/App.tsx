import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";

const drawerWidth = 240;
const pages = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

const drawer = (
  <div>
    <Toolbar />
    <List>
      {pages.map((page) => (
        <ListItem key={page} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {page === "Home" ? <HomeIcon /> : null}
              {page === "About" ? <InfoIcon /> : null}
              {page === "Experience" ? <WorkIcon /> : null}
              {page === "Skills" ? <CodeIcon /> : null}
              {page === "Projects" ? <FolderIcon /> : null}
              {page === "Contact" ? <ContactMailIcon /> : null}
            </ListItemIcon>
            <ListItemText primary={page} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
);

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="open sidebar navigation"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: { xs: "block", sm: "none" },
        }}
        aria-label="sidebar navigation"
      >
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
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
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
}

export default App;
