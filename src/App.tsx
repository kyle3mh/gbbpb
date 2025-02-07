import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";

const App = () => (
  <Router basename="/gbbpb-test">
    <Routes>
      <Route index element={<Home />} />
      {/* 
         This dynamic route matches URLs like /gbbpb-test/sir-jim-radcliffe
         It must come after the index route.
      */}
      <Route path=":slug" element={<SinglePage />} />
    </Routes>
  </Router>
);

export default App;