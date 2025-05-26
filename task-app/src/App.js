import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const techStack = [
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' }
];


function TechStackList() {
  return (
    <ul>
      {techStack.map((tech, index) => (
        <li key={index}>
          <img src={tech.logo} alt={tech.name} width="30" /> {tech.name}
        </li>
      ))}
    </ul>
  );
}


function UpdateMessage() {
  const [msg, setMsg] = useState("I am learning React");

  return (
    <div>
      <p>{msg}</p>
      <button onClick={() => setMsg("I am learning React and Hooks as well")}>Update Me</button>
    </div>
  );
}


function Home() {
  return <p>This is Home page</p>;
}
function Blog() {
  return <p>This is Blog page</p>;
}
function Contact() {
  return <p>This is Contact Us page</p>;
}


function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/blog">Blog</Link> |{" "}
          <Link to="/contact">Contact Us</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <h3>Stack</h3>
        <TechStackList />

        <UpdateMessage />
      </div>
    </Router>
  );
}

export default App;
