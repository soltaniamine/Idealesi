import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      "id": "1",
      "author": {
        "name": "BOUALI Rima",
        "img": "https://lh3.googleusercontent.com/a/ACg8ocKbj0naRGAdfYQG8d0WrRckOfTVTweVB2nTzdPM2ZyZpPzyXQw=s360-c-no",
        "href": "#"
      },
      "text": "réagi à votre dernier commentaire",
      "link": {
        "text": "magnifique",
        "href": "#"
      },
      "time": "1m ago",
      "hasBeenRead": false
    },
    {
      "id": "2",
      "author": {
        "name": "SILI Lyna",
        "img": "https://lh3.googleusercontent.com/a-/ALV-UjW_Y00YoKAI02v2vNZd5vop9oS4-OtJ9X1oF3JPrakVdKVedpwE=s40-p",
        "href": "#"
      },
      "text": "Laisser un commentaire",
      "link": {
        "text": "magnifique",
        "href": "#"
      },
      "time": "1day ago",
      "hasBeenRead": true
    },
    {
      "id": "3",
      "author": {
        "name": "SOLTANI Amine",
        "img": "https://lh3.googleusercontent.com/a-/ALV-UjVnON0yCyRRkRG53M79EnWALT_qzdnwN9pqJxOHgYFUhzbcFOkK=s40-p",
        "href": "#"
      },
      "text": "a réagi à votre dernier commentaire",
      "link": {
        "text": "magnifique",
        "href": "#"
      },
      "time": "1s ago",
      "hasBeenRead": false
    },
    {
        "id": "4",
        "author": {
          "name": "BECHARAI KHALIL",
          "img": "https://mail.google.com/mail/u/0/?ui=2&ik=393fe0320f&attid=0.1&permmsgid=msg-f:1797230022520583100&th=18f10b2ef001b3bc&view=fimg&disp=thd&attbid=ANGjdJ8qZWxP_Gi0_4GXKujQRmTogy6a9wbEHxhPFChdJgDOUlqXfayHUzVrqTNGSoK7uu2S9dx3w1uSO2FN4MqJeSKzvaoHT-ILmmnzrnS9f0jr9-z2sUwVA1hNrMk&ats=2524608000000&sz=w1852-h915",
          "href": "#"
        },
        "text": "a réagi à votre dernier commentaire",
        "link": {
          "text": "magnifique",
          "href": "#"
        },
        "time": "1s ago",
        "hasBeenRead": false
      },
      {
        "id": "5",
        "author": {
          "name": "BOUDRAA Mehdi",
          "img": "https://zegour.esi.dz/Images/Photos-0079.jpg",
          "href": "#"
        },
        "text": "a réagi à votre dernier commentaire",
        "link": {
          "text": "magnifique",
          "href": "#"
        },
        "time": "1s ago",
        "hasBeenRead": false
      },
      {
        "id": "6",
        "author": {
          "name": "KEMER Ayoub",
          "img": "https://zegour.esi.dz/Images/Photos-0079.jpg",
          "href": "#"
        },
        "text": "a réagi à votre dernier commentaire",
        "link": {
          "text": "magnifique",
          "href": "#"
        },
        "time": "1s ago",
        "hasBeenRead": false
      }
  ]);

   const toutLus = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification, //les trois points beh ncréew copie de notification 
      hasBeenRead: true
    }));
    setNotifications(updatedNotifications);
  };
  const [showNotification, setShowNotification] = useState(true);

  const handleButtonClick = () => {
    setShowNotification(prevState => !prevState);
  };

  return (
    <>
  {showNotification && (
   <div className="border rounded-xl p-2 bg-gray-50 w-[100%] ">
      <div className='flex justify-between items-center'>
        <h2 className="font-bold mb-2 text-center text-xl ml-2" style={{ fontFamily: 'Product Sans' }}>Notifications</h2>
        
        <button className=" hover:text-[#646FD4] mb-2"   onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
                      
      </div>
      <div style={{ scrollbarWidth: 'thin', scrollbarColor: '#4A5568 #EDF2F7' }} className="border rounded-xl p-4 bg-gray-50  h-[500px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300  overflow-y-scroll">
            {/* Liste des notifications */}
            {notifications.map(notification => (
                <div key={notification.id} className={`flex items-center border-b py-2 mb-2  rounded-lg ${notification.hasBeenRead ? 'bg-[#EBEBEB]' : 'bg-[#D2D2D2]'}`}>
                <img src={notification.author.img} alt={notification.author.name} className="w-12 h-12 rounded-full mr-8 ml-4 " />
                <div>
                    <a href={notification.author.href} className="font-semibold " style={{ fontFamily: 'Product Sans' }}>{notification.author.name}</a>
                    <p className = "text-sm py-1" style={{ fontFamily: 'Product Sans' }}>{notification.text}</p>
                   
                    <div className="text-gray-500 text-xs" style={{ fontFamily: 'Product Sans' }}>{notification.time}</div>
                </div>
                </div>
            ))}
       </div>
       <button  style={{ fontFamily: 'Product Sans' }} onClick={toutLus} className="text-xs  text-gray-500  ml-[70%] mt-2 ">
       Marquer tout comme lu
       </button>
    </div>
  )}
    </>
  );
}

export default Notification;
