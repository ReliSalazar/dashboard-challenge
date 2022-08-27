import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>

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

/*
  for users or the list whatever, use something like
  <Route path="users">
    <Route index element={List} />
    <Route path=":userId" element={Single} />
    <Route path="new" element={New} />
  </Route>

  so you can go to routes like
  /users to get all users
  /users/123 to get user 123
  /users/new to create a new one
*/

export default App;
