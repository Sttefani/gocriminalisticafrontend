import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {signUpRequest} from '~/store/modules/auth/actions';
import logo from '~/assets/pc.png';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório!'),
  password: Yup.string()
    .min(6, 'SENHA: Mínimo de seis caracteres!')
    .required('A senha é obrigatória!'),
})

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }){
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} style={{width: 180, height: 300}} alt="gocriminalistica" />
      <Form schema={ schema } onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Criar uma conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}

