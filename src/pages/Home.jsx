import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    //define async function
    const unlockedPromise = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const { data } = unlockedPromise; //I wanna get this property from the unlocked Object
    setUsers(data);
    // axios.get alr gets ur Promise,
    //to unlock a Promise, use "await" in an async function
  }

  useEffect(() => {
    fetchUsers(); //performs fetchUsers() when page loads
  }, []);

  function renderUsers() {
    return users.map((user) => (
      <Link to={`/users/${user.id}`} key={user.id}>
        <User
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      </Link>
    ))
  }

  return (
    <div>
      {users.length? renderUsers(): <h1>Loading...</h1>}
    </div>
  );
}

export default Home;

// /* because the fetchUsers take time, if u load the user[0] immediately, ur loading from an empty array. Threfore, the user[0] will show as undefined,
// need to wait for fetchUsers to finish first. */
// /* <h1>Welcome {users.length>0? users[0].name : null}</h1>  OR */
// /* <h1>Welcome {users.length>0 && users[0].name}</h1>   OR */
// <h1>Welcome {users[0]?.name}</h1>
// /* if ur value might be undefined u can do it the way above */
// : <h1>Loading...</h1>
