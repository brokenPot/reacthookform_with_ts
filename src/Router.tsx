import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form1 from "./forms/Form1.tsx";
import FormContext1 from "./forms/FormContext1.tsx";
import Layout from "./comps/Layout.tsx";

export default function  Router  () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout>
                    <Form1 />
                </Layout>} />
                <Route path="/formcontext" element={
                    <Layout>
                        <FormContext1 />
                    </Layout>
                    } />
            </Routes>
        </BrowserRouter>
    );
}