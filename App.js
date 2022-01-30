import React from 'react'
import {ChatEngine} from 'react-chat-engine';

//Using arrow function component
const App = () => {
  return (
    <ChatEngine
      userName='jok99'//Put your userName instead
      projectID = 'cf39e29a-0e02-4ee4-b334-c5dbcab4314f'// Your project id goes here
      userSecret='164e3177-3f11-404d-bd08-a5b8ef02881e'// Replace with your secret key
    />
  )
}
export default App
