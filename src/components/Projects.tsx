import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { iRepositoryProps, tRepository } from "repositoryType";
import usePagination from "../hooks/usePagination";

const Projects = (props: iRepositoryProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage: number = 3;
  const pageCount: number = Math.ceil(props.repositories.length / cardsPerPage);
  const displayedRepositories = usePagination(props.repositories, cardsPerPage);

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    displayedRepositories.jumpToPage(page);
  };

  return (
    <Container
      component="section"
      id="Projects"
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#C62828",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: "100%",
        minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 68px)" },
        padding: "1.6rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{ display: "block", width: "100%", textAlign: "center" }}
      >
        Projects
      </Typography>
      <Container
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "center",
          overflowX: "hidden",
          flexGrow: 1,
        }}
      >
        {displayedRepositories.currentData().map((repository: tRepository) => {
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
                <Typography variant="h6">{repository.description}</Typography>
                <Typography>Created at: {repository.created_at}</Typography>
                <Typography>Updated at: {repository.pushed_at}</Typography>
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
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </Stack>
    </Container>
  );
};

export default Projects;
