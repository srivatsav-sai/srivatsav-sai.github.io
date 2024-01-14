import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Header from './components/header.js';
import About from './components/about.js';
import Resume from './components/resume.js';
// import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
// import Passion from './components/passion.js';
// import './App.css';

function App() {
  return (
      // <Header/>,
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        {/* <Route path="/portfolio" component={Portfolio} /> */}
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/passion" element={<Passion/>} /> */}
        <Route path="/header" element={<Header/>} />
      </Routes>
  );
}

// class App extends Component {
//   render() {
//     return(
//       <div className="App">
//         <About/>
//         <Header/>
//         <Resume/>
//         <Contact/>
//         <Passion/>
//       </div>
//     );
//   }
// }

export default App;
