import React from 'react';
import logo from '~/assets/pc.png';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="gocriminalistica" />
      <form>
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="passwordl" placeholder="Digite sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}

