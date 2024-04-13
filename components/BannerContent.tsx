import React from "react"
import Live from "./Live"
import Countdown from "./Countdown"
import styles from "./BannerContent.module.css"

const BannerContent: React.FC = () => (
  <div className={styles.bannerContent}>
    <LiveIcon />
    <SurveyAnalysis />
  </div>
)

const LiveIcon = () => (
  <div className={styles.live}>
    <Live width={24} height={24} />
  </div>
)

const SurveyAnalysis = () => (
  <span>
    Analisis Survei Awal Periode 2024 -{" "}
    <Countdown date="2024-03-31T24:00:00+07:00" />
  </span>
)

export default BannerContent
