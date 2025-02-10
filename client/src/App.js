import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import components
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';

//import pages
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import Help from './pages/Help';
import CreateRecipe from './pages/createRecipe';
import SavedRecipes from './pages/SavedRecipes';
import UpdateRecipe from './pages/UpdateRecipe';
import Logout from './pages/Logout';
import GetAllRecipes from './pages/AllRecipes';

//context
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
    <div className="App">

    <Router>
           
        <TopNavBar />

            <Routes>
                <Route path="/"               element={<Home />}           />
                <Route path="/login"          element={<Login />}           />
                <Route path="/logout"          element={<Logout />}           />
                <Route path="/register"       element={<Register />}           />
                <Route path="/createRecipe"   element={<CreateRecipe />}  />
                <Route path="/savedRecipes"   element={<SavedRecipes />}   />
                <Route path="/updateRecipe"   element={<UpdateRecipe />}   />
                <Route path="/help"           element={<Help />}           />
                <Route path="/all"            element={<GetAllRecipes />}           />
            </Routes>
      
      <Footer />

    </Router>

    </div>
    </AuthProvider>
  );
}
 
export default App;
