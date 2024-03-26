import styled from "styled-components";
export const CustomForm = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 700px;
    height: 700px;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

export const InputsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center ;
    width: 250px;
    height: 250px;
`

export const CustomInput = styled.input`
    width: 200px;
    height: 20px;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

export const BtnsBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 250px;
    height:500px;
`

export const CustomBtn = styled.button`
    width: 100px;
    height: 100px;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`