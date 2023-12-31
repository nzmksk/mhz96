import { Box, Button, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import codingIllustration from "../assets/coding_illustration.png";

const About = () => {
  return (
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
        minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 68px)" },
        padding: "1.6rem",
        overflow: "hidden",
      }}
    >
      <Typography variant="h2">About Me</Typography>
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
          }}
        >
          <Typography
            variant="body1"
            textAlign="justify"
            marginTop="2rem"
            marginBottom="0.8rem"
          >
            Coming from a health science background, I thought I would serve the
            community back by providing healthcare services and making a
            positive impact on people's lives. But God has a different plan for
            me. In June 2022, I took an exciting turn in my life and soon found
            myself embarking on a challenging-but-fun journey in programming.
          </Typography>
          <Typography variant="body1" textAlign="justify" marginBottom="0.8rem">
            Along the journey, I discovered an immense passion in web
            development{" "}
            <Typography
              variant="subtitle2"
              sx={{ display: "inline", fontStyle: "italic" }}
            >
              (and that's how I turned into Spider-Man!),{" "}
            </Typography>
            with a focus in the backend domain. With my new profound interest in
            programming, I am dedicated to creating innovative solutions that
            address real-world problems and simplify complex processes. Adhering
            to the best practices of software engineering is my top priority in
            order to build efficient, scalable, and maintainable applications.
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
  );
};

export default About;
