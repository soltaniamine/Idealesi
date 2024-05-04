import React, { useState } from 'react';
import './testtab.css';


const Testtab = () => {

    // const sections = [
    //     { id: 1, title: 'Identification', content: 'Points Forts, Lacunes, Les aspects a développer' },
    //     { id: 2, title: 'Développement', content: 'Fonctionnalités à ajouter, Exemples concrets' },
    //     { id: 3, title: 'Variantes', content: 'Rotondité à éliminer' },
    //     { id: 4, title: 'Idées finalisées', content: '' },
    // ];

    // const GridSection = ({ section }) => (
    //     <div className="col span-1 bg-gray-100 rounded-md p-4 shadow-md">
    //         <h3 className="text-lg font-medium mb-2">{section.title}</h3>
    //         <p className="text-gray-700">{section.content}</p>
    //     </div>
    // );

    return (
        <div>

            <div className=" absolute m-20 grid grid-cols-9 grid-rows-3 gap-2">

                <div className='processus  -ml-3 -mr-3 col-start-1 col-end-10 bg-[#7D89F4] text-center rounded-md' style={{ fontSize: '21.39px', fontFamily: 'Product Sans' }}>Processus de Raffinement et Expansion des idées</div>
                <div className='idees -ml-3 row-start-2 row-span-2 bg-[#FEDC77] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Idées</div>
                <div className='identification ml-1 col-start-2 col-span-3 bg-[#F96161] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Identification</div>
                <div className='devloppement ml-1 col-start-5 col-span-4 bg-[#DC95FF] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Devloppement</div>
                <div className='idees row-span-2 -mr-3  bg-[#FEDC77] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Idées finalisées</div>

                <div className='smalltitle ml-1 col-start-2 bg-[#6BC8FC] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }}>Points Forts</div>
                <div className='smalltitle -ml-1 bg-[#FFC480] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >lacunes</div>
                <div className='smalltitle -ml-1 bg-[#6BC8FC] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >les aspects à développer</div>

                <div className='smalltitle ml-1 bg-[#FF5EDC] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >Fonctionalitées à ajouter</div>
                <div className='smalltitle -ml-1 bg-[#82EFC8] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >exemples concrets </div>
                <div className='smalltitle -ml-1 bg-[#AEA299] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >Variantes</div>
                <div className='smalltitle -ml-1 bg-[#82EFC8] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >Rodondances a éliminer</div>


            </div>



        </div >


    );

}


export default Testtab;