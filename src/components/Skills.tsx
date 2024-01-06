import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import { tImage } from "imageType";

const frontEndSkills: tImage[] = [
  {
    name: "HTML5",
    source: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    name: "CSS3",
    source: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    name: "JavaScript",
    source: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  {
    name: "TypeScript",
    source: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "React",
    source: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Material UI",
    source: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
  },
  {
    name: "Bootstrap 5",
    source: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
  },
  {
    name: "SASS",
    source: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
  },
  {
    name: "Semantic UI",
    source: "https://cdn.worldvectorlogo.com/logos/semantic-ui.svg",
  },
];

const backEndSkills: tImage[] = [
  {
    name: "NodeJS",
    source: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "ExpressJS",
    source:
      "https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark-thumbnail.png",
  },
  {
    name: "Python",
    source: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  {
    name: "Django",
    source: "https://www.svgrepo.com/show/353657/django-icon.svg",
  },
  {
    name: "PostgreSQL",
    source: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  },
  {
    name: "SQLite",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/256px-Sqlite-square-icon.svg.png?20130711220928",
  },
  {
    name: "Redis",
    source: "https://cdn.worldvectorlogo.com/logos/redis.svg",
  },
];

const mobileSkills = [
  {
    name: "Dart",
    source: "https://cdn.worldvectorlogo.com/logos/dart.svg",
  },
  {
    name: "Flutter",
    source: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg",
  },
  {
    name: "Android Studio",
    source:
      "https://seeklogo.com/images/A/android-studio-logo-1EE788C6EC-seeklogo.com.png",
  },
];

const devOpsSkills = [
  {
    name: "Jest",
    source:
      "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
  },
  {
    name: "Robot Framework",
    source: "https://cdn.worldvectorlogo.com/logos/robot-framework.svg",
  },
  {
    name: "Selenium",
    source:
      "https://seeklogo.com/images/S/selenium-logo-A1B53CEFB0-seeklogo.com.png",
  },
  {
    name: "Git",
    source: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
  },
  {
    name: "GitHub",
    source: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    name: "Bash",
    source: "https://cdn.worldvectorlogo.com/logos/bash-2.svg",
  },
  {
    name: "Docker",
    source: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
  },
  {
    name: "Vercel",
    source:
      "https://seeklogo.com/images/V/vercel-logo-F748E39008-seeklogo.com.png",
  },
  {
    name: "Firebase",
    source: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
  },
  {
    name: "VS Code",
    source: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
  },
];

const uiuxSkills = [
  {
    name: "Figma",
    source:
      "https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png",
  },
  {
    name: "Adobe Illustrator",
    source:
      "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-icon.svg",
  },
  {
    name: "Canva",
    source: "https://cdn.worldvectorlogo.com/logos/canva-1.svg",
  },
];

const osSkills = [
  {
    name: "Windows",
    source: "https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg",
  },
  {
    name: "Linux",
    source: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg",
  },
  {
    name: "Ubuntu",
    source: "https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg",
  },
  {
    name: "Android",
    source: "https://seeklogo.com/images/A/android-new-2019-logo-3CD3BC571C-seeklogo.com.png",
  },
];

const Skills = () => {
  return (
    <Container
      component="section"
      id="Skills"
      sx={{
        backgroundColor: "#C62828",
        color: "#FFFFFF",
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
      <Typography variant="h2" sx={{ color: "#FFFFFFF" }}>
        Skills
      </Typography>
      <Grid container spacing={2} sx={{ rowGap: "1.6rem" }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#C62828",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              height: "100%",
              padding: "0.8rem",
            }}
          >
            <Typography variant="h4" textAlign="center">
              Front-End Development
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                gap: 1,
              }}
            >
              {frontEndSkills.map((skill: tImage) => {
                return (
                  <Avatar
                    src={skill.source}
                    alt={skill.source}
                    sx={{
                      height: { xs: 30, sm: 40, md: 50 },
                      width: { xs: 30, sm: 40, md: 50 },
                    }}
                  />
                );
              })}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#C62828",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              height: "100%",
              padding: "0.8rem",
            }}
          >
            <Typography variant="h4" textAlign="center">
              Back-End Development
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                gap: 1,
              }}
            >
              {backEndSkills.map((skill: tImage) => {
                return (
                  <Avatar
                    src={skill.source}
                    alt={skill.source}
                    sx={{
                      height: { xs: 30, sm: 40, md: 50 },
                      width: { xs: 30, sm: 40, md: 50 },
                    }}
                  />
                );
              })}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#C62828",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              height: "100%",
              padding: "0.8rem",
            }}
          >
            <Typography variant="h4" textAlign="center">
              Mobile App Development
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                gap: 1,
              }}
            >
              {mobileSkills.map((skill: tImage) => {
                return (
                  <Avatar
                    src={skill.source}
                    alt={skill.source}
                    sx={{
                      height: { xs: 30, sm: 40, md: 50 },
                      width: { xs: 30, sm: 40, md: 50 },
                    }}
                  />
                );
              })}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#C62828",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              height: "100%",
              padding: "0.8rem",
            }}
          >
            <Typography variant="h4" textAlign="center">
              DevOps Tools
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                gap: 1,
              }}
            >
              {devOpsSkills.map((skill: tImage) => {
                return (
                  <Avatar
                    src={skill.source}
                    alt={skill.source}
                    sx={{
                      height: { xs: 30, sm: 40, md: 50 },
                      width: { xs: 30, sm: 40, md: 50 },
                    }}
                  />
                );
              })}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#C62828",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              height: "100%",
              padding: "0.8rem",
            }}
          >
            <Typography variant="h4" textAlign="center">
              UI/UX Design
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                gap: 1,
              }}
            >
              {uiuxSkills.map((skill: tImage) => {
                return (
                  <Avatar
                    src={skill.source}
                    alt={skill.source}
                    sx={{
                      height: { xs: 30, sm: 40, md: 50 },
                      width: { xs: 30, sm: 40, md: 50 },
                    }}
                  />
                );
              })}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#C62828",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              height: "100%",
              padding: "0.8rem",
            }}
          >
            <Typography variant="h4" textAlign="center">
              Operating Systems
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                gap: 1,
              }}
            >
              {osSkills.map((skill: tImage) => {
                return (
                  <Avatar
                    src={skill.source}
                    alt={skill.source}
                    sx={{
                      height: { xs: 30, sm: 40, md: 50 },
                      width: { xs: 30, sm: 40, md: 50 },
                    }}
                  />
                );
              })}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
