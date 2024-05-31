import Watch from "./components/watch";
import Navbar from "./components/Navbar";
import Icons from "./components/Icons";
import Skyline from "./components/Skyline";

function App() {
  return (
    <>
      <div className="z-50 bg-gradient-to-b from-transparent to-white w-full h-screen">
        {" "}
        <Navbar></Navbar>
        <Watch></Watch> <Icons></Icons>
        <Skyline></Skyline>
      </div>
    </>
  );
}

export default App;
