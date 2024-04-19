import Main from "../../components/Main/Main";
import Popular from "../../components/Popular/Popular";
import Extra from "../../components/Extra/Extra";
import ReviewList from "../../components/ReviewList/ReviewList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./styles.module.css";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";

const Index = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {/* <Header /> */}
        <Main />
        <Popular />
        <Extra />
        <ReviewList />
      </div>
      <Footer />
      <MobileNavbar />
    </div>
  );
};

export default Index;
