import styled from 'styled-components'

const FirstPart = styled.div`
    width: 100vw;
    height: 100vh;
    

    .left {
        width: 30%;
        height: 100vh;
        background: #171717;
        position: absolute;
        top: 0;
    }

`
const ToolBar = styled.div`
    width: 100vw;
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

    p {
        width: 40%;
        padding: 20px;
        font-size: 18px;
        font-weight: 300;
        color: white;
        text-align: center;
        line-height: 25px;
    }

    
`
const Button = styled.div`
    width: 30%;
    height: 60px;
    margin: 20px;
    background: #E9932E;
    border-radius: 10px;
    color: white;
`

const Style = {
    FirstPart,
    ToolBar,
    Right,
    Button
}

export default Style;