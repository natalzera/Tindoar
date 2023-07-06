import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import User from './Pages/User';
import Item from './Pages/Item';

const App = () => {
    // roda cada página de acordo com a rota atual
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/login" exact element={<Login />}/>
                <Route path="/register" exact element={<Register />}/>
                <Route path="/user" exact element={<User />}/>
                <Route path="/item" exact element={<Item />}/>
            </Routes>
        </Router>
    );
};

export default App;