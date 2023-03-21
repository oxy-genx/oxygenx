import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/team";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Footer from "./components/Footer";
// import TreeScene from "./components/TreeScene";
// import Milestone from "./components/Milestone";



  


function App() {

  return (
    <div>

      <Navbar />
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Home />
      {/* <div className="App">
      <TreeScene />
      </div> */}
      <About />
      {/* <div name="home" className='h-screen w-full bg-gradient-to-b from-white to-green-200'>
      <div className='max-w-screen-lg mx-auto flex flex-col -intem-center justify-center h-full px-4 md:flex-row'> */}
    
      <h1 className=' mt-4 text-center text-4xl sm:text-5xl font-bold font-mono team'>Contact Us</h1>
      
        <div className='bg-green flex flex-col justify-center h-full '>
          <Form />
        </div>
      
    
      <Team />

      <Footer />
    

      
  
    </div>
  );
}

export default App;
