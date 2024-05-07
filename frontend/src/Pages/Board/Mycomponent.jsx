import React, { useState } from 'react';

function MyComponent() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        console.log(message);  // Traitez le message ici
        setOpen(false);
    };

    return (
        <div>
            <button onClick={() => setOpen(true)}>Open Dialog</button>
            {open && (
                <div className="dialog">
                    <div className="dialog-content">
                        <h2>Enter Your Message</h2>
                        <input
                            type="text"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <button onClick={() => setOpen(false)}>Cancel</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            )}
            <style>
                {`.dialog {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .dialog-content {
                    background: white;
                    padding: 20px;
                    border-radius: 5px;
                }`}
            </style>
        </div>
    );
}

export default MyComponent;