import Background from "./components/Background/Background";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Background />
      <div id="appContent">
        <Header />
        <Outlet />
      </div>
      <Footer />
      <MobileNavbar />
    </>
  );
}

export default App;
