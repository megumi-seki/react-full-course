// props = readonly porperties that are shared between components.
//         A parent component can send data to a child components.
//         <Component key=value />

import Student from "./Student"

function App() {
  return(
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" ag={27} isStudent={true}/>
      <Student name="Larry"/>
    </>
  )
}

export default App
