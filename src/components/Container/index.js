import styled from 'styled-components';

const Container = styled.div`
background: #fff;

border-radius: 4px;
box-shadow: 0 0 20px rgba(0,0,0,0.1)

max-width: 600px;
margin: 64px 32px;
padding: 24px;

h1 {
  display: flex;
  align-items: center;

  font-size: 20px;

  svg {
    margin-right: 16px;
  }
}
`;

export default Container;
