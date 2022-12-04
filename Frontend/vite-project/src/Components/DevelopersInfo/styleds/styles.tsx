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


const Image = styled.img <ImageProps>`
  border-radius: 50%;
  width: 50%;
  background-image: ${(props:any) => `url("${props.img}");`};
`;

const Styles = {
  Container,
  Image,
};

export default Styles;
