import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Form from "./pages/Form";
import Preview from "./pages/Preview";
import Result from "./pages/Result";
import Applicant from "./pages/Applicant";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Applicant />} />
      <Route path="/form/:programId" element={<Form />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/form/applicant/:programId" element={<Applicant />} />
      <Route path="/preview/result" element={<Result />} />
    </Routes>
  </BrowserRouter>
);

export default App;
