import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';
import logo from '~/assets/pc.png'
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
        <Content>
          <nav>
          <img src={logo} style={{width: 110, height: 89}} alt="gocriminalistica" />
          <Link to="/dashboard">DASHBOARD</Link>
          </nav>

          <aside>
          <Notifications />
            <Profile>
                <div>
                <strong>
                  Sttefani P. Ribeiro
                  <Link to="/profile">Meu Perfil</Link>
                </strong>
                </div>
                <img src= "https://api.adorable.io/avatars/60/abott@adorable.png" alt="Sttefani" />
            </Profile>

          </aside>

        </Content>

    </Container>
  );
}

