import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import myAvatar from "../assets/circle_avatar.png";

const handleRecruitButtonClick: () => void = () => {
    const email: string = "mhafiz9676@gmail.com";
    const link: string = `mailto:${email}`;

    window.location.href = link;
  };

const Home = () => {
  return (
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
        minHeight: { xs: "calc(100% - 56px)", sm: "calc(100% - 68px)" },
        overflow: "hidden",
      }}
    >
      <Box>
        <Typography variant="h3">The world need more heroes.</Typography>
        <Typography variant="h3">
          My name is{" "}
          <Typography variant="h1" sx={{ display: "inline", fontWeight: 900 }}>
            Hafiz
          </Typography>
        </Typography>
        <Typography variant="h3">
          and I'm{" "}
          <Typography variant="h2" sx={{ display: "inline", fontWeight: 700 }}>
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
  );
};

export default Home;
