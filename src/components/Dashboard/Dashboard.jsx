import { useEffect, useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as UserService from "../../services/userService"

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [fetchedUsers, setFetchedUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedData = await UserService.index()
                console.log(fetchedData);
                setFetchedUsers(fetchedData)
            } catch (err) {
                console.log(err);

            }
        }
        if (user) fetchUsers()
    }, [user])

    return (
        <main>
            <h1>Make or take a basket, {user.username}!</h1>
            <p>
                Here are all available baskets in your area.
            </p>
              <div>
              {fetchedUsers.map((user, idx) => (
                    <div key={idx}>{user.username}</div>
                ))}
              </div>
        </main>
    )
}

export default Dashboard