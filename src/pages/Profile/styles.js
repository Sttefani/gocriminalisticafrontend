import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`

max-width:600px;
margin:50px auto;

form {
    display: flex;
    flex-direction:column;
    margin-top:30px;
  }
  input{
    background: rgba(0, 0, 0, 0.1);
    border:0;
    border-radius:4px;
    height:44px;
    padding: 0 15px;
    color:#FFF;
    margin:0 0 10px;

  &::placeholder{
    color: rgba(255, 255, 255, 0.9);
  }
}
span {
  color: #DC143C;
  align-self: flex-start;
  margin: 0 0 10px;
  font-weight:bold;
}
hr{
  border:0;
  height:1px;
  background: rgba(0, 0, 0, 0.2);
  margin:10px 0 20px;

}
button {
  margin:5px 0 0;
  height: 44px;
  background: #3b9eff;
  font-weight:bold;
  border-radius:4px;
  border: 0;
  font-size:16px;
  color:#fff;

  &:hover{
    background: ${darken(0.3, '#3b9eff')};
  }
}
a {
  color: #FFF;
  margin-top:15px;
  font-size:16px;
  opacity: 0.8;

  &:hover{
    opacity:1;

    }
  }
  }
  > button {
  width:100%;
  margin:15px 0 0;
  height: 44px;
  background: #DC143C;
  font-weight:bold;
  border-radius:4px;
  border: 0;
  font-size:16px;
  color:#fff;

  &:hover{
    background: ${darken(0.3, '#3b9eff')};
  }
}
a {
  color: #FFF;
  margin-top:15px;
  font-size:16px;
  opacity: 0.8;

  &:hover{
    opacity:1;

    }
  }
`;

