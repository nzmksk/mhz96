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
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
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
          <Toolbar sx={{ visibility: "hidden" }} />
          <Container
            component="section"
            id="Home"
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
              <Typography variant="h3">
                My name is{" "}
                <Typography
                  variant="h1"
                  sx={{ display: "inline", fontWeight: 900 }}
                >
                  Hafiz
                </Typography>
              </Typography>
              <Typography variant="h3">
                and I'm{" "}
                <Typography
                  variant="h2"
                  sx={{ display: "inline", fontWeight: 700 }}
                >
                  Spider-Man.{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ display: "inline", fontStyle: "italic" }}
                >
                  (read: Web Developer)
                </Typography>
              </Typography>
              <Button
                variant="contained"
                onClick={handleRecruitButtonClick}
                sx={{ marginTop: "1.6rem", width: "100%" }}
              >
                Recruit Me
              </Button>
            </Box>
            <img src={myAvatar} alt="Avatar" width={240} />
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
            <Typography variant="h2" sx={{ paddingTop: "3.2rem" }}>
              About Me
            </Typography>
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
                width={240}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  margin: "0.8rem",
                }}
              >
                <Typography
                  variant="body1"
                  textAlign="justify"
                  marginTop="2rem"
                  marginBottom="0.8rem"
                >
                  Coming from a health science background, I thought I would
                  serve the community back by providing healthcare services and
                  making a positive impact on people's lives. But God has a
                  different plan for me. In June 2022, I took an exciting turn
                  in my life and soon found myself embarking on a
                  challenging-but-fun journey in programming.
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="justify"
                  marginBottom="0.8rem"
                >
                  Along the journey, I discovered an immense passion in web
                  development{" "}
                  <Typography
                    variant="subtitle2"
                    sx={{ display: "inline", fontStyle: "italic" }}
                  >
                    (and that's how I turned into Spider-Man!),{" "}
                  </Typography>
                  with a focus in the backend domain. With my new profound
                  interest in programming, I am dedicated to creating innovative
                  solutions that address real-world problems and simplify
                  complex processes. Adhering to the best practices of software
                  engineering is my top priority in order to build efficient,
                  scalable, and maintainable applications.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: { xs: "space-between", sm: "flex-start" },
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                    }}
                  >
                    <IconButton
                      color="inherit"
                      href="https://www.linkedin.com/in/mhz96/"
                      target="_blank"
                      sx={{
                        paddingLeft: 0,
                        paddingRight: { xs: "0.4rem", sm: "0.8rem" },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      href="https://twitter.com/mssngnnja"
                      target="_blank"
                      sx={{ paddingX: { xs: "0.4rem", sm: "0.8rem" } }}
                    >
                      <TwitterIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      href="https://github.com/nzmksk"
                      target="_blank"
                      sx={{ paddingX: { xs: "0.4rem", sm: "0.8rem" } }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Box>

                  <Button variant="contained" sx={{ marginLeft: "0.8rem" }}>
                    Download CV
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
