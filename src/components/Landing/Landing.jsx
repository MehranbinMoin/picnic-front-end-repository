import PicnicLogo from "../../assets/Photos/picnic.png"
import Footer from "../Footer/Footer";
import styles from './Landing.module.css'

const Landing = () => {
    return (
      <div className="content-container">
      <main className={styles.main}>
        <img src={PicnicLogo} className="PicnicLogo"></img>
        <h4>The app that helps you take care of leftovers!</h4>
        <h4>Sign up for your own Picnic account to give and receive baskets in your local area.</h4>
      </main>
      </div>
    );
  };
  
  export default Landing;