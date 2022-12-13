import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2D2D2D;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`
const Center = styled.div`
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    background-color: #2D2D2D;
    box-shadow: 0px 30px 40px 0px black;
    padding: 40px;

    p {
        width: auto;
        color: white;
        font-size: 18px;
    }

    .load_component {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const SubjectsList = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 10px;
    background-color: #545454;
    border-radius: 5px;
    color: white;
`
const GoMap = styled.div`
    width: 10%;
    height: 97vh;
    position: fixed;
    top: 0px;
    right: 0;
    display: flex;
    align-items: flex-end;
`
const Style = {
    Container,
    Center,
    SubjectsList,
    GoMap
}

export default Style;