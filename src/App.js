
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Provider from "./provider/Provider"
import MainRouter from "./components/MainRouter"
import FetchProvider from './provider/FetchProvider';
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
      <ToastContainer />
      <FetchProvider>
        <Provider>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </Provider>
      </FetchProvider>
    </>
  );


}

export default App;
