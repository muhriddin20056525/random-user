import { useEffect, useState } from "react";
import UserItem from "./components/UserItem";
import axios from "axios";
import Loader from "./components/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // get all data
  const getUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://reqres.in/api/users?page=1&per_page=12`
      );
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // clear data
  const clearUser = () => {
    setIsLoading(true);
  };

  // random user
  const randomUser = () => {
    if (isLoading) setIsLoading(false);
    let shuffledUsers = [...users].sort(() => 0.5 - Math.random());
    let selectedUsers = shuffledUsers.slice(0, 4);
    setUsers(selectedUsers);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="user-conainer">
      <h1>User List</h1>
      {!isLoading ? (
        <div className="user-list">
          {users.slice(0, 4).map((user) => (
            <UserItem key={user.id} {...user} />
          ))}
        </div>
      ) : (
        <div className="user-loader">
          <Loader />
        </div>
      )}
      <div className="buttons">
        <button className="clear-btn" onClick={clearUser}>
          Clear
        </button>
        <button className="random-btn" onClick={randomUser}>
          Random
        </button>
      </div>
    </div>
  );
}
