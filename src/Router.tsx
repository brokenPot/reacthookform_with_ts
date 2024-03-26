import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form1 from "./forms/Form1.tsx";
import FormContext1 from "./forms/FormContext1.tsx";

export default function  Router  () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form1 />} />
                <Route path="/formcontext" element={<FormContext1 />} />
            </Routes>
        </BrowserRouter>
    );
}