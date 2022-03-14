import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
// import { UserProvider } from "./components/context/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { nameChanger } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.userNameReducer);
  return (
    <main>
      <h1>Name:{value}</h1>{" "}
      <button
        onClick={() => dispatch(nameChanger())}
        className="w-100 btn btn-lg btn-primary"
        type="submit"
      >
        Update
      </button>
      <Header />
      <Content />
      <Footer />
    </main>
  );
}

export default App;
