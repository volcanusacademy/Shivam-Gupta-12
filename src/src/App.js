import React from "react";
import { AuthProvider } from "./AuthContext";
import DeepNestedComponent from "./DeepNestedComponent";
import DataFetchingComponent from "./DataFetchingComponent";
import CounterComponent from "./CounterComponent";
import Person from "./Person";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogForm from './BlogForm';
import BlogPost from './BlogPost';
import Home from "./Home";




const App = () => {
  return (
    <AuthProvider>
      <Router>
      <div className="shivam">
        <h1>My App</h1>
        <DeepNestedComponent />
      </div>

      <div className="shivam">
        <DataFetchingComponent />
      </div>

      <div className="shivam">
        <CounterComponent />
      </div>
      <div>
        <Person/>
      </div>

    
        <Routes>
        
          <Route path="/create" element={<BlogForm />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/" element={<Home />} />
        </Routes>
      
    </Router>
   
    </AuthProvider>
    
  );
};

export default App;
