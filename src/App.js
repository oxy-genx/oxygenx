import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/team";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>

      <Navbar />
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Home />
      <About />
      <Team />
    

      
  
    </div>
  );
}

export default App;
