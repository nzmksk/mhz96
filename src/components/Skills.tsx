import { Box, Container, Grid, Paper, Typography } from "@mui/material";

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
      <Typography variant="h2" sx={{ color: "#FFFFFFF" }}>Skills</Typography>
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
              <img
                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                alt="HTML5"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                alt="CSS3"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                alt="Javascript"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
                alt="Typescript"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="React"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
                alt="Material UI"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"
                alt="Bootstrap 5"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/sass-1.svg"
                alt="SASS"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/semantic-ui.svg"
                alt="Semantic UI"
                height={50}
              />
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
              <img
                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                alt="NodeJS"
                height={50}
              />
              <img
                src="https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark-thumbnail.png"
                alt="ExpressJS"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
                alt="Python"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/django.svg"
                alt="Django"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
                alt="PostgreSQL"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/sqlite.svg"
                alt="SQLite"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/redis.svg"
                alt="Redis"
                height={50}
              />
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
              <img
                src="https://cdn.worldvectorlogo.com/logos/dart.svg"
                alt="Dart"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg"
                alt="Flutter"
                height={50}
              />
              <img
                src="https://seeklogo.com/images/A/android-studio-logo-1EE788C6EC-seeklogo.com.png"
                alt="Android Studio"
                height={50}
              />
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
              <img
                src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png"
                alt="Jest"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/robot-framework.svg"
                alt="Robot Framework"
                height={50}
              />
              <img
                src="https://seeklogo.com/images/S/selenium-logo-A1B53CEFB0-seeklogo.com.png"
                alt="Selenium"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
                alt="Git"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                alt="GitHub"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/bash-2.svg"
                alt="Bash"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/docker-4.svg"
                alt="Docker"
                height={50}
              />
              <img
                src="https://seeklogo.com/images/V/vercel-logo-F748E39008-seeklogo.com.png"
                alt="Vercel"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
                alt="Firebase"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
                alt="VS Code"
                height={50}
              />
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
              <img
                src="https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png"
                alt="Figma"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-icon.svg"
                alt="Adobe Illustrator"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/canva-1.svg"
                alt="Canva"
                height={50}
              />
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
              <img
                src="https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg"
                alt="Windows"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/linux-tux.svg"
                alt="Linux"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg"
                alt="Ubuntu"
                height={50}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/android.svg"
                alt="Android"
                height={50}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
