import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from "./Dashboard/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import Login from "./Login/Login";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path={'/app/login'}>
                        <Login />
                    </Route>
                    <ProtectedRoute
                        exact path={'/app/dashboard'}
                        element={<Dashboard />}
                    />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
