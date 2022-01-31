import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Table from "./components/table";
import SelectedCard from "./components/selectedCard";
import Error from "./components/error";
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
