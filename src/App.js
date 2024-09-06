import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FileUploadWithStars from './components/Upload';
import AnimatedBackground from './components/Frontpage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>

          <Route path="/fileupload" element={<FileUploadWithStars/>} />
          <Route path="/" element={<AnimatedBackground/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
