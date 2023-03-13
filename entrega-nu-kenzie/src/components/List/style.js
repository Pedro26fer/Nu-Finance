import styled from 'styled-components'


export const ConteinerList = styled.div`

    margin-left: 90px;

`

export const MenuList = styled.article`

    display: flex;
    flex-direction: row;
    justify-content: center;

    h2{
        font-size: 16px;
        font-weight: 700;
        color: #212529;
        margin-top: 34px;
    }

    ul{
        display: flex;
        list-style: none;
        margin-left: 5%;

        li{
            box-sizing: border-box;
            margin: 8px 14px;
            font-size: 14px;
            color: #5B6166;
            font-weight: 600;
            background-color: #E9ECEF;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            :hover{
                background-color:#FD377E ;
                color: #fff;
            }
        }
    }
`

export const TransactionsList = styled.article`

    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

    ul{
        width: 98%;
        margin-right: 53px;        
        list-style: none;
    }

`

