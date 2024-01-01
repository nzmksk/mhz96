import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import myTheme from "./theme";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

const drawerWidth: number = 240;
const pages: string[] = ["Home", "About", "Skills", "Projects"];

interface iRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  language: string;
  topics: string[];
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<iRepository[]>([]);

  const handleDrawerToggle: () => void = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigationClick: (section: string) => void = (
    section: string
  ) => {
    const element: HTMLElement | null = document.getElementById(section);
    const isMobile: boolean = window.innerWidth <= 600;

    if (isMobile) {
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      element?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response: Response = await fetch(
          `https://api.github.com/users/nzmksk/repos`
        );
        const repositories: any = await response.json();

        // Filter repositories without description or languages.
        const filteredRepositories: iRepository[] = repositories.filter(
          (repo: iRepository) => {
            return repo.description && repo.language;
          }
        );
        filteredRepositories.sort(function (a: iRepository, b: iRepository) {
          let updated_at_a: number = new Date(a.updated_at).getTime();
          let updated_at_b: number = new Date(b.updated_at).getTime();
          return updated_at_b - updated_at_a;
        });

        // Show only the latest 6 repositories.
        const topSixRepositories: iRepository[] = filteredRepositories.slice(
          0,
          6
        );
        topSixRepositories.map((repo: iRepository) => {
          repo.created_at = new Date(repo.created_at).toUTCString();
          repo.updated_at = new Date(repo.updated_at).toUTCString();

          return repo;
        });
        setRepositories(topSixRepositories);
      } catch (error: unknown) {
        console.error(error);
      }
    }

    fetchRepositories();
  }, []);

  const drawer: JSX.Element = (
    <div>
      <Toolbar />
      <List>
        {pages.map((page: string) => (
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
                {pages.map((page: string) => (
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
          id="Sidebar"
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
          <Toolbar id="Home" sx={{ visibility: "hidden" }} />
          <Home />
          <About />
          <Skills />
          <Container
            component="section"
            id="Projects"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#C62828",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "100%",
              minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 68px)" },
              overflow: "hidden",
              padding: "1.6rem",
            }}
          >
            <Typography
              sx={{ display: "block", width: "100%", textAlign: "center" }}
            >
              Projects
            </Typography>
            {repositories.map((repository) => {
              return (
                <Card
                  sx={{
                    maxWidth: "300px",
                    margin: "1.6rem",
                    backgroundColor: "#C62828",
                    color: "#FFFFFF",
                    borderRadius: 4,
                  }}
                >
                  <CardContent>
                    <Typography>{repository.name}</Typography>
                    <Typography>{repository.description}</Typography>
                    <Typography>Created at: {repository.created_at}</Typography>
                    <Typography>Updated at: {repository.updated_at}</Typography>
                    <Typography>{repository.language}</Typography>
                    <Typography>{repository.topics}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={repository.html_url} target="_blank">
                      Source Code
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
