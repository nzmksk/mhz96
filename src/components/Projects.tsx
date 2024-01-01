import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { iRepositoryProps, tRepository } from "repositoryType";

const Projects = (props: iRepositoryProps) => {
  return (
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
      <Typography sx={{ display: "block", width: "100%", textAlign: "center" }}>
        Projects
      </Typography>
      {props.repositories.map((repository: tRepository) => {
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
  );
};

export default Projects;
