import styled from "styled-components";


import Form1 from "./forms/Form1.tsx";
// import Form2 from "./forms/Form2.tsx";
// import Form3 from "./forms/Form3.tsx";
// import Form4 from "./forms/Form4.tsx";
// import Form5 from "./forms/Form5.tsx";

function App() {
  return (
    <>
        <Form1/>
        <Space/>
        {/*<Form2/>*/}
        {/*<Space/>*/}
        {/*<Form3/>*/}
        {/*<Space/>*/}
        {/*<Form4/>*/}
        {/*<Space/>*/}
        {/*<Form5/>*/}
    </>
  )
}

const Space = styled.div`
    margin-bottom: 20px;
`

export default App
