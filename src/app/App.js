import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DemoPage from "../features/demoFeature/DemoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/"> 1 </Link>
        <Link to="/2"> 2 </Link>
        <Link to="/3"> 3 </Link>

        <Routes>
          <Route path="/" element={<DemoPage number={1} />} />
          <Route path="/2" element={<DemoPage number={2} />} />
          <Route path="/3" element={<DemoPage number={3} />} />
          {/* DYNAMIC ROUTING */}
          <Route path="/4/:id" element={<DemoPage number={4} />} />{" "}
          {/* NESTED ROUTES WITH SHARED LAYOUTS*/}
          <Route path="/6" element={<DemoPage number={777} />}>
            <Route index element={<DemoPage number={6} />} />
            <Route path=":id" element={<DemoPage number={6} />} />
            <Route path="new" element={<DemoPage number={6} />} />
          </Route>
          {/* ANY OTHER ROUTES: 404 */}
          <Route path="*" element={<DemoPage number={5} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
