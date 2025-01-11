import { useState } from "react";
// import LoginForm from "./components/LoginForm";
import UserDetails from "./components/UserDetails";
// import UserProfile from "./components/UserProfile";
// import RegisterForm from "./components/RegisterForm";
function App() {
  // window.addEventListener("resize", (e) => {
  //   console.log(window.innerHeight, window.innerWidth);
  // });
  // const callMe = () => {
  //   console.log("hello");
  // };

  // const mockUsers = [
  //   {
  //     id: 1,
  //     username: "Anthony",
  //     email: "Anthony@dev.com",
  //   },
  //   {
  //     id: 2,
  //     username: "Favoroso",
  //     email: "Favoroso@dev.com",
  //   },
  // ];

  // const isAuthenticated = false;

  // if (isAuthenticated) {
  //   return (
  //     <div>
  //       <h1>Welcome, Users!</h1>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <span>You ae not logged in</span>
  //   </div>
  // );

  // return (
  //   <>
  //     <div>
  //       {mockUsers.map((mockUser) => {
  //         return <UserDetails mockUser={mockUser} key={mockUser.id} />;
  //       })}
  //     </div>
  //     <div>
  //       <h1>React Component</h1>
  //       <UserProfile
  //         username="Anthony"
  //         age={36}
  //         isLoggined={false}
  //         favoriteFoods={[
  //           {
  //             name: "Sushi",
  //             id: "sushi",
  //           },
  //           {
  //             name: "Pizza",
  //             id: "pizza",
  //           },
  //         ]}
  //         callMe={callMe}
  //       />
  //     </div>
  //   </>
  // );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Anthony",
      email: "Anthony@gmail.com",
    },
    {
      id: 2,
      username: "Favoroso",
      email: "Favoroso@gmail.com",
    },
  ]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(3);
  // console.log(users);
  return (
    <div>
      {/* <UserProfile
        username="Anthony"
        age={36}
        isLoggined={false}
        favoriteFoods={[
          {
            name: "Sushi",
            id: "sushi",
          },
          {
            name: "Pizza",
            id: "pizza",
          },
        ]}
        callMe={callMe}
      /> */}
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = { id: count, username, email };
          setCount((currentcount) => currentcount + 1);
          setUsers((currentUsersState) => [...currentUsersState, newUser]);
        }}
      >
        <div>
          <label htmlFor="username">username</label>
          <input
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add User</button>
      </form>
      {users.map((user, index) => (
        <UserDetails key={index} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}

export default App;
