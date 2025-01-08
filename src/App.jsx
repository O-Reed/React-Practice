import UserProfile from "./components/UserProfile"
function App() {

  const callMe = () => {
    console.log("hello");
  }
  return (
    <div>
      <h1>React Component</h1>
      <UserProfile username="Anthony" age={36} isLoggined={false} favoriteFoods={[
        {
          name: "Sushi",
          id: "sushi",
        },
        {
          name: "Pizza",
          id: "pizza",
        },
      ]} callMe={callMe} />
    </div>  
  )
}

export default App
