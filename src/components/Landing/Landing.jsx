import PicnicLogo from "../../assets/Photos/picnic.png"
import styles from './Landing.module.css'

const Landing = () => {
    return (
      <main className={styles.main}>
        <img src={PicnicLogo} className="PicnicLogo"></img>
        <h4>Sign up for your own Picnic account to give and receive baskets in your local area.</h4>
        <br></br>
        <br></br>
        <footer>Made with love in the USA</footer>
        <br></br>
        <footer>© 2025 picnic</footer>
      </main>
    );
  };
  
  export default Landing;