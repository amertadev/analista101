import dynamic from "next/dynamic"

const PieChart = dynamic(
  () => import("@mui/x-charts").then((module) => module.PieChart),
  {
    ssr: false,
  }
)

export default PieChart