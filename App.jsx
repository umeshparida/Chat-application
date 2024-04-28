import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ChatComponent from './components/ChatComponent'
import { signInWithPopup } from 'firebase/auth'
import { auth,provider} from './config/fire'

function App() {
  const [user, setUser] = useState(null)
  const handleSign=()=>{
  signInWithPopup(auth,provider).then(result=>setUser(result._tokenResponse)).catch(error=>console.log(error))
  }

  return (
    <div className="App">
      {user ?
      <ChatComponent user={user}/>:
      <div className='p-5 text-center'>
        <div>
        <button className='btn btn-primary' onClick={handleSign}>Login</button>
          </div>
        </div>
}
    </div>
  )
}

export default App
