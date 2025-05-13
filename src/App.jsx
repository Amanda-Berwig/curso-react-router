import { BrowserRouter, Route, Routes } from "react-router";

import Nav from "./assets/components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/sobremesas" element={<h1>Sobremesas</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
