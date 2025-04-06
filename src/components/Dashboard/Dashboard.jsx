import { useEffect, useContext } from "react"
import { useState } from "react";
import { UserContext } from "../../contexts/UserContext"
import DashboardLogo from "../../assets/Photos/DashboardLogo.png"


const Dashboard = () => {
  const { user } = useContext(UserContext);


  return (
    <main>
      <h1>Make or take a basket, {user.username}!</h1>
      <div className="LogoContainer">
        <img src={DashboardLogo} className="DashboardLogo"></img>
      </div>
    </main>
  )
}

export default Dashboard