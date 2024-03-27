import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form1 from "./forms/Form1.tsx";
import FormContext1 from "./forms/FormContext1.tsx";
import Layout from "./comps/Layout.tsx";
import Form6 from "./forms/Form6.tsx";

export default function  Router  () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout>
                    <Form1 />
                </Layout>} />
                <Route path="/form2" element={
                    <Layout>
                        <FormContext1 />
                    </Layout>
                    } />
                <Route path="/form3" element={
                    <Layout>
                        <Form6 />
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
    );
}