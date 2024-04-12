import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Popular from "./components/Popular/Popular";
import Extra from "./components/Extra/Extra";
import ReviewList from "./components/ReviewList/ReviewList";
import Footer from "./components/Footer/Footer";
import "./App.css";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Popular />
      <Extra />
      <ReviewList />
      <Footer />
      <MobileNavbar />
    </>
  );
}

export default App;
