import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const techStack = [
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  },
  {
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
  },
  {
    name: 'Express.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
  }
];


const TechStackList = () => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {techStack.map((tech, index) => (
      <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <img 
          src={tech.logo} 
          alt={tech.name} 
          style={{ width: '40px', height: '40px', marginRight: '15px' }} 
        />
        <span style={{ fontSize: '18px' }}>{tech.name}</span>
      </li>
    ))}
  </ul>
);


const UpdateMessage = () => {
  const [message, setMessage] = useState("I am learning React");

  const handleClick = () => {
    setMessage("I am learning React and Hooks as well");
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <p>{message}</p>
      <button onClick={handleClick}>Update Me</button>
    </div>
  );
};


const Home = () => <h2>This is Home page</h2>;
const Blog = () => <h2>This is Blog page</h2>;
const Contact = () => <h2>This is Contact Us page</h2>;

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/blog" style={{ marginRight: '15px' }}>Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <h1>Technology Stack</h1>
        <TechStackList />

        <UpdateMessage />
      </div>
    </Router>
  );
};

export default App;
