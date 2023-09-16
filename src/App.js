import React from "react";
import './App.css';
import {NavBar} from './componets/NavBar'
import {Banner} from './componets/Banner'
import {Skills} from './componets/Skills'
import { Projects } from "./componets/Projects";
import { Contact } from "./componets/Contact";
import { Footer } from "./componets/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
