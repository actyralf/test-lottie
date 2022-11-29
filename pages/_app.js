import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}

export default MyApp;
