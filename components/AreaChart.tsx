import React from "react"
import LineChart from "./LineChartWrapper"
import { ThemeProvider, styled } from "@mui/material/styles"
import { lightTheme, darkTheme } from "./theme"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { Box, Paper, Grid, IconButton, MenuItem, Select } from "@mui/material"

const allData = {
  "Februari 2024": {
    dataSession: [12, 15, 10, 9, 24, 21, 8, 10],
    dataPageview: [28, 69, 18, 10, 47, 30, 11, 19],
    dataAvgSessionDuration: 30,
    dataTotalUsers: 330,
    xLabels: [
      "22 Feb",
      "23 Feb",
      "24 Feb",
      "25 Feb",
      "26 Feb",
      "27 Feb",
      "28 Feb",
      "29 Feb",
    ],
  },
  "Maret 2024": {
    dataSession: [
      8, 34, 11, 21, 39, 20, 14, 22, 19, 15, 18, 28, 19, 11, 21, 16, 9, 6, 2,
      11, 8, 18, 10, 24, 21, 10
    ],
    dataPageview: [
      9, 53, 16, 24, 68, 24, 20, 36, 31, 24, 21, 52, 19, 18, 28, 32, 16, 8, 3,
      18, 26, 34, 19, 35, 61, 15
    ],
    dataAvgSessionDuration: 20,
    dataTotalUsers: 419,
    xLabels: [
      "1 Mar",
      "2 Mar",
      "3 Mar",
      "4 Mar",
      "5 Mar",
      "6 Mar",
      "7 Mar",
      "8 Mar",
      "9 Mar",
      "10 Mar",
      "11 Mar",
      "12 Mar",
      "13 Mar",
      "14 Mar",
      "15 Mar",
      "16 Mar",
      "17 Mar",
      "18 Mar",
      "19 Mar",
      "20 Mar",
      "21 Mar",
      "22 Mar",
      "23 Mar",
      "24 Mar",
      "25 Mar",
      "26 Mar",
    ],
  },
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

export default function AreaChart() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [selectedPeriod, setSelectedPeriod] = React.useState("Maret 2024")
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }
  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value)
  }
  const getAllData = () => {
    const allSessionData = Object.values(allData).flatMap(
      (data) => data.dataSession
    )
    const allPageviewData = Object.values(allData).flatMap(
      (data) => data.dataPageview
    )
    const allXLabels = Object.values(allData).flatMap((data) => data.xLabels)
    const allSessionDurationData = Object.values(allData).map(data => data.dataAvgSessionDuration);
    const avgSessionDuration = allSessionDurationData.reduce((acc, curr) => acc + curr, 0) / allSessionDurationData.length;
    const lastPeriodData = Object.values(allData)[Object.values(allData).length - 1]
    return {
      dataSession: allSessionData,
      dataPageview: allPageviewData,
      xLabels: allXLabels,
      dataAvgSessionDuration: avgSessionDuration,
      dataTotalUsers: lastPeriodData.dataTotalUsers,
    }
  }
  const {
    dataSession,
    dataPageview,
    xLabels,
    dataAvgSessionDuration,
    dataTotalUsers,
  } = selectedPeriod === "All" ? getAllData() : allData[selectedPeriod]
  const totalSession = dataSession.reduce((acc, curr) => acc + curr, 0)
  const totalPageview = dataPageview.reduce((acc, curr) => acc + curr, 0)
  return (
    <div style={{ marginTop: "20px", marginBottom: "150px", width: "100%", height: "400px" }}>
      <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
        <IconButton
          onClick={toggleTheme}
          sx={{ fontSize: 32, color: "grey" }}
          aria-label={isDarkMode ? "Light mode" : "Dark mode"}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Select
          value={selectedPeriod}
          onChange={handlePeriodChange}
          sx={{ width: 200, height: 40, margin: "0 10px" }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Februari 2024">Februari 2024</MenuItem>
          <MenuItem value="Maret 2024">Maret 2024</MenuItem>
        </Select>
        <LineChart
          series={[
            {
              data: dataSession,
              label: "Session",
              area: true,
              showMark: false,
            },
            {
              data: dataPageview,
              label: "Pageview",
              area: true,
              showMark: false,
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{ ".MuilineElement-root": { display: "none" } }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item>
              <Item>Total Session: {totalSession}</Item>
            </Grid>
            <Grid item>
              <Item>Total Pageview: {totalPageview}</Item>
            </Grid>
            <Grid item>
              <Item>Avg Session Duration: {dataAvgSessionDuration}s</Item>
            </Grid>
            <Grid item>
              <Item>Total Users: {dataTotalUsers}</Item>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  )
}