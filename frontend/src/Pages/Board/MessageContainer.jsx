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
        {content: {value: value, message: message}}
      ]
    ))
  }
}, [message])

return (
  <div className='flex sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden bg-gradient-to-bl from-[#191970] to-[#6F8FAF] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
  <div className='md:max-w-[400px] flex flex-col'>
  <div className='px-4 flex-1 overflow-auto'>

    {previousChats.map((previousChat, index) => 
    <>
      <div className={`chat chat-start`}>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img alt='Tailwind CSS chat bubble component' src={prfdf} />
          </div>
        </div>
        <div key={index} className={`chat-bubble bg-white bg-opacity-20 backdrop-blur-sm text-white shake pb-2 break-words`}>{previousChat.content.value}</div>
      </div>
      <div className={`chat chat-start`}>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img alt='Tailwind CSS chat bubble component' src={chatbot} />
          </div>
        </div>
        <div key={index} className={`chat-bubble bg-white bg-opacity-20 backdrop-blur-sm text-white shake pb-2 break-words`}>{previousChat.content.message}</div>
      </div>
      </>
    )}
    </div>
    <div className='px-4 my-3'>
    <div className='w-full relative'>
      <input
        type='text'
        className='border text-sm rounded-lg block w-full p-2.5  bg-white bg-opacity-20 backdrop-blur-sm border-gray-600 text-white'
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