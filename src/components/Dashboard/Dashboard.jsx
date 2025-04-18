import { useEffect, useContext } from "react"
import { useState } from "react";
import { UserContext } from "../../contexts/UserContext"
import styles from './Dashboard.module.css'



const Dashboard = () => {
  const { user } = useContext(UserContext);

  const youtubeVideo = 'hIIzBwenOAs'
  return (
    <div className="content-container">
      <main className={styles.Main}>
        <h1>A word from the founder!</h1>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoIframe}
            src={`https://www.youtube.com/embed/${'hIIzBwenOAs'}`}
            title="Founder Message"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  )
}

export default Dashboard