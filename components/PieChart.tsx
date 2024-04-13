import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme, darkTheme } from "./theme"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { IconButton } from "@mui/material"
import PieChart from "./PieChartWrapper"

export default function PieActiveArc({ data }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }
  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <IconButton
        onClick={toggleTheme}
        sx={{ fontSize: 32, color: "grey" }}
        aria-label={isDarkMode ? "Light mode" : "Dark mode"}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        height={200}
      />
    </ThemeProvider>
  )
}
