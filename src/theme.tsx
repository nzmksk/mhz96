import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const myTheme = responsiveFontSizes(
  createTheme({
    typography: {
      htmlFontSize: 10,
      h1: {
        fontSize: "6.4rem",
      },
      h2: {
        fontSize: "4.8rem",
      },
      h3: {
        fontSize: "3.2rem",
      },
      h4: {
        fontSize: "2.4rem",
      },
      h5: {
        fontSize: "1.6rem",
      },
      h6: {
        fontSize: "1.2rem",
      },
    },
  })
);

export default myTheme;
