import UserDetails from "./components/UserDetails";
// import UserProfile from "./components/UserProfile";
function App() {
  // const callMe = () => {
  //   console.log("hello");
  // }

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

  const isAuthenticated = false;

  if (isAuthenticated) {
    return (
      <div>
        <h1>Welcome, Users!</h1>
      </div>
    );
  }
  return (
    <div>
      <span>You ae not logged in</span>
    </div>
  );

  // return (
  //   <div>
  //     {mockUsers.map((mockUser) => {
  //       return <UserDetails mockUser={mockUser} key={mockUser.id} />;
  //     })}
  //   </div>
  // <div>
  //   <h1>React Component</h1>
  //   <UserProfile username="Anthony" age={36} isLoggined={false} favoriteFoods={[
  //     {
  //       name: "Sushi",
  //       id: "sushi",
  //     },
  //     {
  //       name: "Pizza",
  //       id: "pizza",
  //     },
  //   ]} callMe={callMe} />
  // </div>
  // );
}

export default App;
