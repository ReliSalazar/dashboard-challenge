import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";

function App() {
  return (
    <Router>
      {/*
        If you want to put components that renders on all the views
        put theme inside Router component, not in Routes component.
      */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="*"
          element={
            <main className="container py-5 mx-auto">
              <p className="text-xl">There's nothing here!</p>
            </main>
          }
        />
      </Routes>

    </Router>
  );
}

export default App;
