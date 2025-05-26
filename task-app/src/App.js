import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const techStack = [
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' }
];

const TechStackList = () => (
  <ul>
    {techStack.map((tech, i) => (
      <li key={i}>
        <img src={tech.logo} alt={tech.name} width="30" style={{ marginRight: '10px' }} />
        {tech.name}
      </li>
    ))}
  </ul>
);

const UpdateMessage = () => {
  const [msg, setMsg] = useState("I am learning React");

  return (
    <div>
      <p>{msg}</p>
      <button onClick={() => setMsg("I am learning React and Hooks as well")}>Update Me</button>
    </div>
  );
};

const Home = () => <p>This is Home page</p>;
const Blog = () => <p>This is Blog page</p>;
const Contact = () => <p>This is Contact Us page</p>;

const App = () => (
  <Router>
    <div style={{ padding: '20px' }}>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/blog" style={{ marginRight: '10px' }}>Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <h3>Tech Stack</h3>
      <TechStackList />

      <UpdateMessage />
    </div>
  </Router>
);

export default App;

