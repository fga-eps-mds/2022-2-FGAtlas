import styled from 'styled-components';

interface ImageProps {
  img: any,
};

const Container = styled.div `
  width: 25%;
  margin: 20px 50px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Image = styled.div <ImageProps>`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background: ${(props:any) => `url(${props.img})  no-repeat`} ;
  background-size: cover;
  background-position: center;
`;

const Styles = {
  Container,
  Image,
};

export default Styles;
