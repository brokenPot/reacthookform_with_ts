import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form1 from "./forms/Form1.tsx";
import Form2 from "./forms/Form2.tsx";
import Form3 from "./forms/Form3.tsx";
import Layout from "./comps/Layout.tsx";

export default function  Router  () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout>
                    <Form1 />
                </Layout>} />
                <Route path="/form2" element={
                    <Layout>
                        <Form2 />
                    </Layout>
                    } />
                <Route path="/form3" element={
                    <Layout>
                        <Form3 />
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
    );
}