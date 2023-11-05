import './lux.css';
import Msg from './msg';
import { useState } from 'react'

function App() {

  const msg_list_init = [
    {
      id: 1,
      user_type: 'bot',
      content: 'this is the bots msg'
    },

    // {
    //   id: 2,
    //   user_type: 'user',
    //   content: 'lorum ipsum 2'
    // }
  ]

  const [msg_list, setMsg_list] = useState(msg_list_init)



const msgComponent = []
for (const m of msg_list) {
  msgComponent.push(<Msg key={m.id} content={m.content} author={m.user_type}/>)
}

function handleFormSubmit(e) {
  e.preventDefault()
  console.log('form submitted')
  const user_input = e.target.elements.chat_input.value
  const usr_msg = {id: 3, user_type: 'user', content: user_input}
  setMsg_list([...msg_list,usr_msg])
  const bot_msg = {id: 4, user_type: 'bot', content: user_input.toUpperCase()}
  setMsg_list([...msg_list,usr_msg,bot_msg])
  console.log(msg_list)
}

  return (
    <div className='container pt-3'>
      <div className= 'AppMain'><h1>Jack Cummings Demo Chat App</h1></div>
      <div className="card bg-secondary mb-3">
        <div className="card-header">Let's Talk!</div>
        <div id= "chat-window" class="card-body">
        {msgComponent}
        {/* <Msg content='some test string' author='a person'/>
        <Msg content='some test string2' author='a bot'/> */}
          <form id='chat-form' onSubmit={handleFormSubmit}> 
            <div className='input-group'>
              <input type="text" className="form-control" placeholder="What is the meaning of the universe?" id="chat_input"/>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}



export default App
