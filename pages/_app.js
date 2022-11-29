import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import {Jost} from "@next/font/google";
/* import { Main } from "next/document"; */

const jost = Jost({
  subsets: ["latin"],
  weight: "300",
});

function MyApp({Component, pageProps}) {
  return (
    <>
      <main className={jost.className}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Navigation />
      </main>
    </>
  );
}

export default MyApp;
