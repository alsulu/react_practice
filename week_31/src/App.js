import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";
import SelectedCard from "./components/SelectedCard";
import Error from "./components/Error";
import styles from "./App.module.scss";
import "normalize.css";

const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <main>
          <Routes>
            <Route exact path="/game" element={<SelectedCard />} />
            <Route exact path="/" element={<Table />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
