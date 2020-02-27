import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';
import * as Yup from 'yup';
import logo from '~/assets/pc.png';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';


const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório!'),
  password: Yup.string()
  .required('A senha é obrigatória!'),
});


export default function SignIn() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }){
    dispatch(signInRequest(email, password));
  }

  return (
    <>
    <img src={logo} style={{width: 280, height: 300}} alt="gocriminalistica"/>
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="Digite seu e-mail" />
      <Input name="password" type="password" placeholder="Digite sua senha" />
      <button type="submit">{ loading ? 'Carregando...' : 'Acessar'}</button>
      <Link to="/register">Cadastre-se gratuitamente</Link>
    </Form>
    </>
  );
}

