import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./components/Blog";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { selectSignedIn } from "./features/userSlice";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
