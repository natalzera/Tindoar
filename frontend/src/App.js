import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
    // roda cada página de acordo com a rota atual
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/login" exact element={<Login />}/>
                <Route path="/register" exact element={<Register />}/>
            </Routes>
        </Router>
    );
};

export default App;