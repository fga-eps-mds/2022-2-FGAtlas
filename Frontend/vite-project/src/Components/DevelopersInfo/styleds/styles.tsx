import styled from 'styled-components';

const Container = styled.div `
  width: 400px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Image = styled.img `
  border-radius: 50%;
  width: 250px;
`;

const Styles = {
  Container,
  Image,
};

export default Styles;
