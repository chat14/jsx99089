import React from 'react'
import {ChatEngine} from 'react-chat-engine';

//Using arrow function component
const App = () => {
  return (
    <ChatEngine
      userName=''//Put your userName instead
      projectID = ''// Your project id goes here
      userSecret=''// Replace with your secret key
    />
  )
}
export default App
