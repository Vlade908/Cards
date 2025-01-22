import React, { useState } from 'react';
import Card from '../card/card.jsx'
import data from '../../data/JSON/cardData.json'

import './CardBanner.css'

const CardBanner = () => {
    const [projetoSelecionado, setProjetoSelecionado] = useState('');

    // Função para filtrar os cards pelo projeto
    const cardsFiltrados = projetoSelecionado
        ? data.filter(item => item.projetos.includes(projetoSelecionado))
        : data;

    const handleProjetoChange = (e) => {
        setProjetoSelecionado(e.target.value);
    };

    return (
        <div>
            {/* Dropdown para selecionar o projeto */}
            <div className="filter">
                <label htmlFor="projeto">Filtrar por projeto:</label>
                <select
                    id="projeto"
                    value={projetoSelecionado}
                    onChange={handleProjetoChange}
                >
                    <option value="">Todos</option>
                    {[
                        ...new Set(data.flatMap(item => item.projetos))
                    ].map((projeto, index) => (
                        <option key={index} value={projeto}>
                            {projeto}
                        </option>
                    ))}
                </select>
            </div>

            {/* Renderização dos cards */}
            <div className="card-list">
                {cardsFiltrados.map((item, index) => (
                    <Card
                        key={index}
                        nome={item.nome}
                        descricao={item.descricao}
                        imgSrc={item.imgSrc}
                        numFollowers={item.numFollowers}
                        numFollowing={item.numFollowing}
                        projetos={item.projetos}
                    />
                ))}
            </div>
        </div>
    );

};

export default CardBanner;