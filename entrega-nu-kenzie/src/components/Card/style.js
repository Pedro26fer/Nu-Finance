import styled  from "styled-components";

export const CardStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60%;
    background-color: #F8F9FA;
    margin-bottom: 15px;
    width: 100%;
    border: none;
    border-radius: 8px;;
    border-left: ${(props) => props.type === "Entrada"? "2px solid #03B898" : "2px solid #ff8310" } ;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;

        h1{
            font-size: 16px;
            font-weight: 700;
            color: #212529;
        }
        
        span{
            font-weight: 600;
        }

        .trash{
            :hover{
                cursor: pointer;
                color: #ff8319;
            }
        }
    }

`

