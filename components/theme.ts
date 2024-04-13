import { createTheme } from "@mui/material/styles"

const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#334155",
    },
  },
  components: {
    // @ts-ignore
    MuiLineChart: {
      styleOverrides: {
        root: {
          "& .MuiLineChart-line": {
            stroke: "#334155",
          },
        },
      },
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#e2e8f0",
    },
  },
  components: {
    // @ts-ignore
    MuiLineChart: {
      styleOverrides: {
        root: {
          "& .MuiLineChart-line": {
            stroke: "#e2e8f0",
          },
        },
      },
    },
  },
})

export { lightTheme, darkTheme }
