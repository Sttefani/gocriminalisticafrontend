import React from 'react';
import logo from '~/assets/pc.png';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
    <img src={logo} alt="gocriminalistica"/>
    <form>
      <input placeholder="Nome completo" />
      <input type="email" placeholder="Digite seu e-mail" />
      <input type="passwordl" placeholder="Digite sua senha" />
      <button type="submit">Criar conta</button>
      <Link to="/">Já tenho login</Link>
    </form>
    </>
  );
}

