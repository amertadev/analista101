import React from "react"
import { DocsThemeConfig, useConfig, useTheme } from "nextra-theme-docs"
import logoLight from "./public/assets/logo-light.png"
import logoDark from "./public/assets/logo-dark.png"
import BlurImage from "./components/BlurImage"
import BannerContent from "./components/BannerContent"
import { useRouter } from "next/router"

const Logo = () => {
  const { theme } = useTheme()
  const logo = theme === "light" ? logoLight : logoDark
  return <BlurImage src={logo} alt="Logo" width={135} height={50} />
}

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: "https://github.com/amertadev/analista101",
  },
  chat: {
    link: "https://discordapp.com/users/589304761921306638",
  },
  docsRepositoryBase: "https://github.com/amertadev/analista101",
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - Analista101",
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === "/"
        ? "https://nextra.site/og.jpeg"
        : `https://nextra.site/api/og?title=${title}`
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Analista101 adalah platform untuk belajar dan berbagi pengetahuan tentang analisis data, ilmu data, dan machine learning."
        />
        <meta
          name="og:description"
          content="Analista101 adalah platform untuk belajar dan berbagi pengetahuan tentang analisis data, ilmu data, dan machine learning."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@amertadev" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="og:title" content="Analista101" />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Analista101" />
        <link rel="apple-touch-icon" href="/assets/logo-light.png" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </>
    )
  },
  editLink: {
    text: "Edit halaman ini di GitHub →",
  },
  feedback: {
    content:
      "Temukan kesalahan atau ingin memberikan masukan? Silakan buka issue di GitHub →",
    labels: "Beri Masukan",
  },
  banner: {
    text: <BannerContent />,
    dismissible: false,
  },
}

export default config
