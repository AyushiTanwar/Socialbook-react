import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Mains, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const dialogOpen = (val) => {
    setOpen(val);
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div>
      {/* <SignUp/>
     <SignIn/> */}
      <Mains>
        <Routes>
          <Route exact path="/" element={<SignUp />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route
            exact
            path="/header"
            element={
              <Header
                dialogOpen={(val) => {
                  dialogOpen(val);
                }}
              />
            }
          ></Route>
          <Route exact path="/main" element={<Main open={false} />}></Route>
        </Routes>
      </Mains>
    </div>
  );
}

export default App;
