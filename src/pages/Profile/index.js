import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';
import  AvatarInput from './AvatarInput';
import { signOut } from '~/store/modules/auth/actions';
export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  function handleSubmit(data){
    dispatch(updateProfileRequest(data));
  }
  function handleSignout(){
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={ profile } onSubmit={ handleSubmit }>
      <AvatarInput name="avatar_id"/>
      <Input name="name" placeholder="Nome Completo" />
      <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
      <hr />
      <Input type="password" name="oldPassword" placeholder="Sua senha"/>
      <Input type="password" name="password" placeholder="Nova senha"/>
      <Input type="password" name="confirmPassword" placeholder="Confirme sua senha" />

      <button type="submit"> Atualizar Perfil </button>

      </Form>

    <button type="button" onClick={handleSignout}>LOGOUT</button>

  </Container>
  )
}

