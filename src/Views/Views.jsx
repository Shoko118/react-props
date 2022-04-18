import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "../Pages/Home";

const Views = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Views;
