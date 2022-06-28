import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from "./Dashboard/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import Login from "./Login/Login";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/app/login'} element={<Login />} />
                <Route exact path='/app/dashboard' element={<ProtectedRoute />}>
                    <Route exact path={'/app/dashboard'} element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

const rootElement = document.getElementById('app');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
