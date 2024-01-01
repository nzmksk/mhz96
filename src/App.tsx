import { useEffect, useState } from "react";
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
import Projects from "./components/Projects";
import { tRepository } from "repositoryType";

const drawerWidth: number = 240;
const pages: string[] = ["Home", "About", "Skills", "Projects"];

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<tRepository[]>([]);

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
        const filteredRepositories: tRepository[] = repositories.filter(
          (repo: tRepository) => {
            return repo.description && repo.language;
          }
        );
        filteredRepositories.sort(function (a: tRepository, b: tRepository) {
          let updated_at_a: number = new Date(a.pushed_at).getTime();
          let updated_at_b: number = new Date(b.pushed_at).getTime();
          return updated_at_b - updated_at_a;
        });

        // Show only the latest 6 repositories.
        const topSixRepositories: tRepository[] = filteredRepositories.slice(
          0,
          6
        );
        topSixRepositories.map((repo: tRepository) => {
          repo.created_at = new Date(repo.created_at).toUTCString();
          repo.pushed_at = new Date(repo.pushed_at).toUTCString();

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
          <Projects repositories={repositories} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
