import React from "react";

import "/styles/global.scss"; // Correct place to import global styles
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}