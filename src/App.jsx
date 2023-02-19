import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bestiary2d from "./pages/Bestiary2d";
import Bestiary3d from "./pages/Bestiary3d";
import Data from "./pages/Data";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="bestiary2d"
          element={
            <ProtectedRoute>
              <Bestiary2d />
            </ProtectedRoute>
          }
        />
        <Route
          path="bestiary3d"
          element={
            <ProtectedRoute>
              <Bestiary3d />
            </ProtectedRoute>
          }
        />
        <Route
          path="data"
          element={
            <ProtectedRoute>
              <Data />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
