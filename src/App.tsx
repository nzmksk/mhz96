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
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import myAvatar from "./assets/circle_avatar.png";
import codingIllustration from "./assets/coding_illustration.png";
import myTheme from "./theme";

const drawerWidth = 240;
const pages = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigationClick = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRecruitButtonClick = () => {
    const email = "mhafiz9676@gmail.com";
    const link = `mailto:${email}`;

    window.location.href = link;
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              onClick={() => {
                handleNavigationClick(page);
              }}
            >
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

  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: "flex", sm: "none" }, flexGrow: 1 }}>
                <IconButton
                  color="inherit"
                  onClick={handleDrawerToggle}
                  size="large"
                  aria-label="open sidebar navigation"
                >
                  {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      handleNavigationClick(page);
                    }}
                    sx={{ color: "white", display: "block", my: 2 }}
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
            display: { xs: "block", sm: "none" },
            flexShrink: { sm: 0 },
            width: { sm: drawerWidth },
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
        <Box
          component="main"
          sx={{
            width: "100vw",
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar id="Home" />
          <Container
            component="section"
            sx={{
              backgroundColor: "#C62828",
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: {
                xs: "center",
                sm: "space-around",
                lg: "space-evenly",
              },
              alignItems: "center",
              alignContent: "space-evenly",
              minWidth: "100%",
              minHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <Box>
              <Typography variant="h3">The world need more heroes.</Typography>
              <Typography variant="h1">My name is Hafiz</Typography>
              <Typography variant="h3">
                and I'm Spider-Man.{" "}
                <span style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
                  (read: Web Developer)
                </span>
              </Typography>
              <Button
                variant="contained"
                onClick={handleRecruitButtonClick}
                sx={{ marginTop: "1.6rem", width: "100%" }}
              >
                Recruit Me
              </Button>
            </Box>
            <img src={myAvatar} alt="Avatar" width={300} />
          </Container>
          <Container
            component="section"
            id="About"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#C62828",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "100%",
              minHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <Box>
              <Typography variant="h4">About Me</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: { xs: "wrap", sm: "nowrap" },
                justifyContent: "space-around",
                alignItems: "center",
                minWidth: "100%",
              }}
            >
              <img
                src={codingIllustration}
                alt="Just a pic of me coding"
                width={300}
              />
              <Typography variant="h5" textAlign="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
