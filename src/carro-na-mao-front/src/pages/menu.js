import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '../estilos/Menu.css'
import { useNavigate } from 'react-router-dom';
//imports da funcionalidade notificcacao
import Apps from './Apps';

export function Menu (){

  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    navigate(`/${value}`); // Navegar para a página correspondente
  };

     return (

      <>
        <div id="menu">
<<<<<<< HEAD
        <Link to="/Home2">Home</Link>
=======
        <Link to="/Home2">Home</Link>        
>>>>>>> 6d0c8f6688b9f45b53dcc76ac37fdcff07a94448
        <Link to="/Infracoes">Infrações</Link>
        <Link to="/Historico">Histórico</Link>
        <Link to="/Avaliacoes">Avaliações</Link>        
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Locacao">Locacao</Link>
<<<<<<< HEAD
        <Link to="/Vistoria">Vistoria</Link>
        <Link to="/Estoque">Estoque</Link>
        <Link to="/Categoria">Categoria</Link>
        <Link to="/Localização">Localização</Link>
        <Link to="/Manutencao">Manutenção</Link>
=======
        <Link to="/Vistoria">Cadastrar Vistoria</Link>
        <Link to="/Vistoria2">Consultar Vistorias</Link>
        <Link to="/Estoque">Estoque</Link>
        <Link to="/Categoria">Categoria</Link>     
        <Link to="/Localizacao">Localização</Link>   
        <Link to="/Manutencao">Manutencao</Link>
>>>>>>> 6d0c8f6688b9f45b53dcc76ac37fdcff07a94448
        <Link to="/Notificacoes">Notificações</Link>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option>Adm</option>
          <option value="Estoque">Estoque</option>
          <option value="Categoria">Categoria</option>
        </select>
        <Apps />
        <Link to="/">Sair</Link>
        </div>
       </>

     );
}