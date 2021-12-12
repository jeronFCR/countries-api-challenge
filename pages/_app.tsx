import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/global";
import theme from "../styles/theme";
import { SummaryCountryProvider } from "../context/country";
import { Navbar } from "../styles/components/UI/navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <SummaryCountryProvider>
      <ThemeProvider theme={darkMode? theme.palette.darkMode : theme.palette.lightMode}>
        <GlobalStyle />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </SummaryCountryProvider>
  );
}

export default MyApp;
