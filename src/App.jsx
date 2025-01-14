// import { useState } from "react";
// import LoginForm from "./components/LoginForm";
// import UserDetails from "./components/UserDetails";
// import UserProfile from "./components/UserProfile";

// import { useState } from "react";
// import LoginForm from "./components/LoginForm";
import PostContainer from "./components/PostContainer";
import UserContext from "./utils/contexts/UserContext";
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

  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: "Anthony",
  //     email: "Anthony@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     username: "Favoroso",
  //     email: "Favoroso@gmail.com",
  //   },
  // ]);

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [count, setCount] = useState(0);
  // const [sync, setSync] = useState(false);
  // console.log(users);

  // useEffect(() => {
  //   console.log("Rendering...");
  //   document.title = "React Tutorial ";
  // }, [sync]);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   async function fetchUsers() {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users",
  //         { signal: controller.signal }
  //       );
  //       const json = await response.json();
  //       console.log(json);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchUsers();

  //   return () => {
  //     controller.abort();
  //     console.log(controller.signal);
  //   };
  // });

  // const [blogPostData, setBlogPostData] = useState({
  //   title: "",
  //   body: "",
  // });
  // return (
  //   <div>
  //     <form
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         if (blogPostData.title && blogPostData.body) {
  //           fetch("https://jsonplaceholder.typicode.com/users", {
  //             method: "POST",
  //             body: JSON.stringify({
  //               userId: 1,
  //               title: blogPostData.title,
  //               body: blogPostData.body,
  //             }),
  //             headers: {
  //               "Content-type": "application/json; charset=UTF-8",
  //             },
  //           })
  //             .then((response) => response.json())
  //             .then((data) => {
  //               console.log("Success!");
  //               console.log(data);
  //             })
  //             .catch((err) => console.log(err));
  //         }
  //       }}
  //     >
  //       <div>
  //         <label htmlFor="title">Title</label>
  //         <input
  //           type="text"
  //           id="title"
  //           value={blogPostData.title}
  //           onChange={(e) => {
  //             setBlogPostData((currentBlogPostData) => ({
  //               ...currentBlogPostData,
  //               title: e.target.value,
  //             }));
  //           }}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="body">Body</label>
  //         <input
  //           type="text"
  //           id="body"
  //           value={blogPostData.body}
  //           onChange={(e) => {
  //             setBlogPostData((currentBlogPostData) => ({
  //               ...currentBlogPostData,
  //               body: e.target.value,
  //             }));
  //           }}
  //         />
  //       </div>
  //       <button>Create</button>
  //     </form>
  //   </div>
  //   // // <div>
  //   // //   <div>You clicked the button {count} times</div>
  //   // //   <button onClick={() => setCount((count) => count + 1)}>Click Me</button>
  //   // //   <button onClick={() => setSync((current) => !current)}>sync</button>
  //   //   {/* <UserProfile
  //   //     username="Anthony"
  //   //     age={36}
  //   //     isLoggined={false}
  //   //     favoriteFoods={[
  //   //       {
  //   //         name: "Sushi",
  //   //         id: "sushi",
  //   //       },
  //   //       {
  //   //         name: "Pizza",
  //   //         id: "pizza",
  //   //       },
  //   //     ]}
  //   //     callMe={callMe}
  //   //   /> */}
  //   //   {/* <LoginForm /> */}
  //   //   {/* <RegisterForm /> */}
  //   //   {/* <form
  //   //     onSubmit={(e) => {
  //   //       e.preventDefault();
  //   //       const newUser = { id: count, username, email };
  //   //       setCount((currentcount) => currentcount + 1);
  //   //       setUsers((currentUsersState) => [...currentUsersState, newUser]);
  //   //     }}
  //   //   >
  //   //     <div>
  //   //       <label htmlFor="username">username</label>
  //   //       <input
  //   //         name="username"
  //   //         id="username"
  //   //         value={username}
  //   //         onChange={(e) => setUsername(e.target.value)}
  //   //       />
  //   //     </div>
  //   //     <div>
  //   //       <label htmlFor="email">email</label>
  //   //       <input
  //   //         name="email"
  //   //         id="email"
  //   //         value={email}
  //   //         onChange={(e) => setEmail(e.target.value)}
  //   //       />
  //   //     </div>
  //   //     <button>Add User</button>
  //   //   </form>
  //   //   {users.map((user, index) => (
  //   //     <UserDetails key={index} user={user} setUsers={setUsers} />
  //   //   ))} */}
  //   // // </div>
  // );

  // const [toggle, setToggle] = useState(false);
  return (
    // <div>
    //   <button onClick={() => setToggle((currentState) => !currentState)}>
    //     Toggle
    //   </button>
    //   {toggle && <LoginForm />}
    // </div>
    <UserContext.Provider>
      <div>
        <PostContainer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
