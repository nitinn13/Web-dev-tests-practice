import React, { useEffect, useRef, useState  } from 'react'

const App = () => {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState();
  const inputref = useRef();


  const sendMessage = () => {
    if(!socket){
      return;
    }
    const message = inputref.current.value;
    inputref.current.value = "";
    socket.send(message);
    //@ts-ignore
    // socket.send("ping")
  }
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onopen = () => {
      console.log("connected");
    }
    ws.onmessage = (event) => {
      alert(event.data);
      setData(event.data);
    }
    ws.onclose = () => {
      console.log("disconnected");
    }
  }, [])
  
  return (
    <div>
      <input ref= {inputref} type="text" placeholder="enter message" />
      <button onClick={sendMessage }>send </button>
      {/* {data && <div>{data}</div>} */}
    </div>
  )
}

export default App