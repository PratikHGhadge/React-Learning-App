import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieReview from "./MovieReview";
import Datafeatching from "./Datafeatching";
import RecordKepping from "./RecordKepping";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MovieReview />}/>
          <Route path="/Datafeatching" element={<Datafeatching/>}/>
          <Route path="/RecordKepping" element={<RecordKepping/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
