import React, { ChangeEvent, useEffect, useState } from "react";
import Footer from '../../components/statics/footer/Footer';
import Navbar from '../../components/statics/navbar/Navbar';
import Avatar from '@mui/material/Avatar';


import './Perfil.css';

function Perfil() {
    return (
        <>
            <Navbar />

            <div id="perfil-container">
                <div id="perfil-container-left">
                    <div id="perfil-container-left-top">
                        <Avatar id="perfil-avatar"
                            alt="Imagem Usuario"
                            src=""
                        />
                        <h1>Nome da ONG</h1>
                    </div>
                    <div id="perfil-container-left-bottom">

                    </div>
                </div>
                <div id="perfil-container-right">
                    <div id="perfil-container-right-top">
                        <h1>Informações</h1>
                        <h1>Dados ONG</h1>

                        
                    </div>
                    <div id="perfil-container-right-bottom">

                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default Perfil;
