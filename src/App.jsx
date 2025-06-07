<<<<<<< HEAD
import MyComponent from "./MyComponent";

function App() {
  return(<MyComponent/>);
=======
// conditional rendering = allows you to control what gets rendered
//                         in your applications based on certain condition
//                         (show, hide, or change components)

import UserGreeting from "./UserGreeting"

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Megumi"/>
    </>
  )
>>>>>>> b6717d8a013d63b4c43387a44eb894d3ea175192
}

export default App
