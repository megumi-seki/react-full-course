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
}

export default App
