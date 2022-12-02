import styled from 'styled-components';

const Container = styled.div `
  max-width: 100vw;
`;
const ContainerAbout = styled.div `
  min-height: 100vh;
  background: #171717;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DevelopersContainer = styled.div `
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0;
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
  ContainerAbout,
  DevelopersContainer,
  Footer,
}

export default Style;