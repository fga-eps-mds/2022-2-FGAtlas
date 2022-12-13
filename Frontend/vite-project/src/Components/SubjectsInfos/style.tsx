import styled from "styled-components";

const Infos = styled.div`
    width: 100%;
    height: auto;
    background-color: #464646;
    display: flex;
    flex-direction: row;
    border: 2px ;

    .general_information {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 10px 10px;

        p {
            width: 33%;
            font-size: 16px;
        }

        .end {
            text-align: end;
        }
    }
`
const Card = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    padding-top: 10px;
`
const Style = {
    Infos,
    Card
}

export default Style;