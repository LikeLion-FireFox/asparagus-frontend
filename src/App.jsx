import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
