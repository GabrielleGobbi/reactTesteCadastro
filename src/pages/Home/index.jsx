import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link para navegação

const Home = () => {
    return (
        <div className="content">
            <h1>Bem Vindo !!!</h1>
            <p>Você está em Home</p>
            {/* Botão para navegação */}
            <Link to="/Login">
                <button type="button">Ir para Login</button>
            </Link>
        </div>
    );
};

export default Home;
