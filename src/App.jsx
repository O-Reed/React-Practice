import UserProfile from "./components/UserProfile"
function App() {

  const callMe = () => {
    console.log("hello");
  }
  return (
    <div>
      <h1>React Component</h1>
      <UserProfile age={36} isLoggined={false} favoriteFoods={[
        {
          name: "sushi",

        },
      ]} callMe={callMe} />
    </div>  
  )
}

export default App
