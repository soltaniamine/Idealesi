import React from 'react';

export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2>Confirmation de la suppression</h2>
                <p>Êtes-vous sûr de vouloir supprimer ceci ?</p>
                <div className="flex justify-end space-x-4 mt-4">
                    <button onClick={onConfirm} className="px-4 py-2 rounded bg-red-500 text-white">Supprimer</button>
                    <button onClick={onClose} className="px-4 py-2 rounded bg-black text-white">Annuler</button>
                </div>
            </div>
        </div>
    );
}
