import styled from "styled-components";

export const FormStyled = styled.form`

    display: flex;
    flex-direction: column;
    width: 363px;
    height: 351px;
    gap: 15px;
    border: solid 2px #E9ECEF;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 39px;
    margin-left: 10%;

    label{
        font-weight: 600;
        color: #212529;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 22px;
    }

    button{
        width: 322px;
        height: 48px;
        margin-top: 10px;
        background-color: #FD377E;
        color: #fff;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }

    input:focus{
        outline-style: solid;
        outline-color: #FD377E;
    }
    
    .description{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #212529;

        input{
            width: 315px;
            height: 52.8px;
            font-size: 16px;
            background-color: #F8F9FA;
            border: none;
            border-radius: 8px;
            box-sizing: border-box;
            padding-left: 1%;
            
            ::placeholder{
            padding-left: 2%;            
            }
        }

        span{
            color: #868E96;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            padding-left: 2%;
        }
    }

    .form-data{
        display: flex;
        gap: 36px;

        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        input{
            width: 128px;
            height: 48px;
            border: none;
            border-radius: 8px;
            background-color: #F8F9FA;
            box-sizing: border-box;
            padding-left: 5%;

            ::placeholder{
                padding-left: 5%;
            }
        }

        select{
            width: 150px;
            height: 48px;
            border: none;
            border-radius: 8px;
            background-color: #F8F9FA;
            padding-left: 5%;

            :focus{
                outline-style: solid;
                outline-color: #FD377E;
            }
        }



    }


`

