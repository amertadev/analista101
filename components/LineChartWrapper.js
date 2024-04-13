import dynamic from "next/dynamic"

const LineChart = dynamic(
  () => import("@mui/x-charts").then((module) => module.LineChart),
  {
    ssr: false,
  }
)

export default LineChart