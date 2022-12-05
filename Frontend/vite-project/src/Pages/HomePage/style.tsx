import styled from 'styled-components'

const FirstPart = styled.div`
    width: 100%;
    height: 100vh;
`
const ToolBar = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 1;

    img {
        width: 50px;
        padding: 10px;
    }

    .links {
        width: 30%;
        padding: 0px 50px 0px 0px;
        display: flex;
        justify-content: space-between;
        
        p {
            padding: 10px;
            border-radius: 5px;
            font-weight: 500;
            font-size: 18px;
            color: white;
        }

        p:hover {
            background-color: #424242;

        }
    }
`
const Left = styled.div`
    width: 30%;
    height: 100vh;
    background: #171717;
    position: absolute;
    top: 0;

    .image {
        width: auto;
        height: 650px;
        border-radius: 10px;
        box-shadow: 20px 30px 50px 10px black;
        background-color: orange;
        position: relative;
        left: 50%;
        top: 18%;
        z-index: 2;
        background-position: center;
        background-image: url('../../Images/fga.jpg');

    }
`
const Right = styled.div`
    width: 70%;
    height: 100vh;
    background-color: #2D2D2D;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
        width: 50%;
        background-color: red;
    }

    p {
        padding: 20px;
        font-size: 18px;
        font-weight: 300;
        color: white;
        text-align: center;
        line-height: 25px;
    }

    
`
const Button = styled.div`

`

const Container = styled.div `
    max-width: 100vw;
    box-shadow: 10px;
`;
const ContainerAbout = styled.div `
      width: 100%;
    height: 800px;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    box-shadow: 0px 10px 30px 20px black;
`

const DevelopersContainer = styled.div `
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 40px 0;
`;

const Footer = styled.div `
    background-color: #2D2D2D;
    width: 100%;
    height: 200px;
    position: relative;
    z-index: -1;
    top: 800px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    div {
        display: flex;
        flex-direction: column;
        padding-left: 20px;

        h1 {
            color: white;
            font-size: 20px;
            line-height: 35px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            span {
                padding: 8px;
            }
        }
    }
`;

const Style = {
    Container,
    FirstPart,
    ToolBar,
    Left,
    Right,
    Button,
    ContainerAbout,
    DevelopersContainer,
    Footer
}

export default Style;