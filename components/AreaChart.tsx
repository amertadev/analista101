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
      11, 8, 18, 10, 24, 21, 24, 28, 14, 26, 18, 23,
    ],
    dataPageview: [
      9, 53, 16, 24, 68, 24, 20, 36, 31, 24, 21, 52, 19, 18, 28, 32, 16, 8, 3,
      18, 26, 34, 19, 35, 61, 15, 29, 18, 41, 22, 27,
    ],
    dataAvgSessionDuration: 20,
    dataTotalUsers: 450,
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
      "27 Mar",
      "28 Mar",
      "29 Mar",
      "30 Mar",
      "31 Mar",
    ],
  },
  "April 2024": {
    dataSession: [
      20, 28, 10, 12, 12, 8, 7, 27, 22, 10,
      28, 19, 13, 6, 4, 14, 51, 59, 55, 53, 
      16, 23, 13, 12, 9, 12, 22, 14, 4, 8
    ],
    dataPageview: [
      9, 53, 16, 24, 68, 24, 20, 36, 31, 24,
      21, 105, 32, 14, 9, 20, 64, 122, 132, 106,
      19, 29, 30, 38, 15, 17, 22, 28, 5, 35
    ],
    dataAvgSessionDuration: 31,
    dataTotalUsers: 425,
    xLabels: [
      "1 Apr",
      "2 Apr",
      "3 Apr",
      "4 Apr",
      "5 Apr",
      "6 Apr",
      "7 Apr",
      "8 Apr",
      "9 Apr",
      "10 Apr",
      "11 Apr",
      "12 Apr",
      "13 Apr",
      "14 Apr",
      "15 Apr",
      "16 Apr",
      "17 Apr",
      "18 Apr",
      "19 Apr",
      "20 Apr",
      "21 Apr",
      "22 Apr",
      "23 Apr",
      "24 Apr",
      "25 Apr",
      "26 Apr",
      "27 Apr",
      "28 Apr",
      "29 Apr",
      "30 Apr",
    ],
  },
  "Mei 2024": {
    dataSession: [
      9, 15, 19, 16, 6, 15, 8, 11, 9, 11,
      5, 17, 13, 18, 9, 23, 23, 15, 27, 12,
      13, 15, 5, 11
      // tambahin
    ],
    dataPageview: [
      17, 28, 73, 20, 9, 35, 20, 14, 10, 17,
      6, 20, 15, 26, 15, 26, 36, 23, 48, 20,
      25, 34, 6, 12
      // tambahin
    ],
    dataAvgSessionDuration: 20,
    dataTotalUsers: 323,
    xLabels: [
      "1 Apr",
      "2 Apr",
      "3 Apr",
      "4 Apr",
      "5 Apr",
      "6 Apr",
      "7 Apr",
      "8 Apr",
      "9 Apr",
      "10 Apr",
      "11 Apr",
      "12 Apr",
      "13 Apr",
      "14 Apr",
      "15 Apr",
      "16 Apr",
      "17 Apr",
      "18 Apr",
      "19 Apr",
      "20 Apr",
      "21 Apr",
      "22 Apr",
      "23 Apr",
      "24 Apr",
      // tambahin
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
  const [selectedPeriod, setSelectedPeriod] = React.useState("Mei 2024")
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
    const allSessionDurationData = Object.values(allData).map(
      (data) => data.dataAvgSessionDuration
    )
    const avgSessionDuration =
      allSessionDurationData.reduce((acc, curr) => acc + curr, 0) /
      allSessionDurationData.length
    const allTotalUsers = Object.values(allData).reduce((acc, curr) => acc + curr.dataTotalUsers, 0)
    return {
      dataSession: allSessionData,
      dataPageview: allPageviewData,
      xLabels: allXLabels,
      dataAvgSessionDuration: avgSessionDuration,
      dataTotalUsers: allTotalUsers,
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
    <div
      style={{
        marginTop: "20px",
        marginBottom: "150px",
        width: "100%",
        height: "400px",
      }}
    >
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
          <MenuItem value="April 2024">April 2024</MenuItem>
          <MenuItem value="Mei 2024">Mei 2024</MenuItem>
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
