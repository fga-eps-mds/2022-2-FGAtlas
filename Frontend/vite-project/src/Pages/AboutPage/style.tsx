import styled from 'styled-components';

const Container = styled.div `
  height: 100vh;
  background: #171717;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DevelopersContainer = styled.div `
  width: 80%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

const Footer = styled.div `
  height: 200px;
  background: #2D2D2D;
  position: relative;

  div {
    display: inline;
    align-items: center;
    vertical-align: middle;
    position: absolute;
    bottom: 10px;
    left: 10px;

    h1 {
      font-size: 30px;
      color: #fff;
    }
  }
`;

const Style = {
  Container,
  DevelopersContainer,
  Footer,
}

export default Style;