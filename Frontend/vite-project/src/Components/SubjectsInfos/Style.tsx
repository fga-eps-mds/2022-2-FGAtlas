import styled from "styled-components";

const Infos = styled.div`
    width: 100%;
    height: auto;
    background-color: #464646;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .general_information {
        width: 95%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-size: 16px;

        }
    }

    .week_days {
        width: 100%;
        height: auto;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        background-color: #2d2d2d;
        border: 2px solid #464646;
    }
`

const Style = {
    Infos
}

export default Style;