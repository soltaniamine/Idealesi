import React from 'react';

const Modal = ({ isOpen, close, children }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 100,
            left: 60,
            right: 400,
            bottom: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            zIndex:"10000"
        }}>
            <div style={{
                padding: '20px',
                background: '#fff',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                {children}
                <button onClick={close} style={{ marginTop: '20px' }}>Fermer</button>
            </div>
        </div>
    );
};

export default Modal;
