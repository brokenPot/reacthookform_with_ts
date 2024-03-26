import styled from "styled-components";
export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 700px;
    height: 700px;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

export const LightBulbsWrapper = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-evenly;
`

export const LightBulbAndSubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const CustomAlertText = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.8vw;
    color: #f12323;
    font-weight: bolder;
`

interface LightBulbProps {
    $ok:string
}

export const LightBulb = styled.div<LightBulbProps>`
    border-radius: 100%;
    width: 10px;
    height: 10px;
    background-color: ${(props) => (props.$ok === 'true' ? 'green' : 'gray')};
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 1vw;
    font-weight: bold;
`

export const FormLower = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    width: 250px;
    height:500px;
    
`

export const CustomBtn = styled.button`
    border: 1px solid transparent;
    &:hover {
        background-color: #5067a4;
        color: white;
        transition: 0.7s;
    }

    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`