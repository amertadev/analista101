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
    Analisis Survei ? -{" "}
    <Countdown date="2024-08-18T00:00:00+07:00" />
  </span>
)

export default BannerContent
