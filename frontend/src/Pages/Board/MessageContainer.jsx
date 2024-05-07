import React, { useEffect, useState } from 'react'
import map from '../../assets/Acceuil/Home/boutonplus.svg'
import axios from 'axios';


const MessageContainer = () => {
  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])

  const getMesages = async (e) => {
    e.preventDefault(); 
    try {
        const response = await axios.post('http://127.0.0.1:5000/chatbot', {message: value});
        setMessage(response.data.reponse);
    } catch (error) {
        console.log(error.response);
    }
};

  useEffect(() => {
    if(value && message){
      setPreviousChats(prevChats => (
        [...prevChats,
          {content: value},
          {content: message}
        ]
      ))
    }
    console.log(previousChats)
  }, [message])

  return (
    <div className='flex sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <div className='md:min-w-[400px] flex flex-col'>
    <div className='px-4 flex-1 overflow-auto'>

      {previousChats.map((previousChat, index) => (
      	<div className={`chat`} key={index}>
          <div key={index} className={`chat-bubble text-black pb-2`}>{previousChat.content}</div>
          {/* <div key={index} className={`chat-bubble text-white pb-2`}>{previousChat}</div> */}
        </div>
      )
      )}
      </div>
      <div className='px-4 my-3'>
      <div className='w-full relative'>
        <input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a value'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' onClick={getMesages}>
					<img src={map} alt="map" />
				</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default MessageContainer