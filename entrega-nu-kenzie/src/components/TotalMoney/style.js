import styled from "styled-components";

export const TotalValue = styled.div`
    display: flex;
    flex-direction: column;
    width: 363px;
    height: 96px;
    border: solid 2px #E9ECEF;
    border-radius: 8px;
    margin-left: 10%;
    margin-top: 16px;


    .value{
        display: flex;
        justify-content: space-between;
        width: 79%;
        margin: 0 auto;

        h1{
            font-size: 16px;
            font-weight: 700;
            color: #212529;
            display: inline-block;
            margin-top: 20px;
        }

        p{
            display: inline-block;
            margin-top: 19px;
            font-size: 16px;
            font-weight: 700;
            color: #FD377E;
        }

    }


    .warning-value{
        width: 79%;
        margin: 5px auto;
        display: flex;
        align-items: flex-start;
        color: #5B6166;
        font-size: 12px;
        font-weight: 400;
    }
`