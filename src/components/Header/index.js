import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';
import logo from '~/assets/pc.png'
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
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
                    <strong>{profile.name}</strong>
                    <Link to="/profile">Meu Perfil</Link>
                </div>
            <img src={profile.avatar.url || 'https://api.adorable.io/avatars/60/abott@adorable.png'}
            alt="gogo" />

            </Profile>

          </aside>

        </Content>

    </Container>
  );
}

