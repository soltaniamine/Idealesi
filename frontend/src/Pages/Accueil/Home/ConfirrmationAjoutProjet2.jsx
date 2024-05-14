import React from 'react';
import { Link } from 'react-router-dom';
export default function ConfirmationAjoutProject({ isOpen, onClose ,uid,tech, pid,cid}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2>Confirmation du choix</h2>
                <p>Un nouveau projet a été créé dans ce domaine</p>
                <div className="flex justify-end space-x-4 mt-4">
                    <Link className="flex items-center font-semibold hover:transform hover:-translate-y-1 hover:scale-80" 
                    to={`/Board?uid=${uid}&tech=${tech}&cid=${cid}&pid=${pid}`}>
                        <button onClick={onClose} className="px-4 py-2 rounded bg-black text-white">Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}