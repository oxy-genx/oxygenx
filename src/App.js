import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/team";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

      <Navbar />
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Home />
      <About />
      <Team />
      <h1 className=' mt-4 text-center text-4xl sm:text-5xl font-bold font-mono team'>Contact Us</h1>
      
        <div className='bg-green flex flex-col justify-center h-full '>
          <Form />
        </div>

        <Footer />
      
    

      
  
    </div>
  );
}

export default App;
