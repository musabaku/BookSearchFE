import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './NavBar.css'; // You can style your NavBar here

const NavBar = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const isLogged = localStorage.getItem('authToken'); // Check if the user is logged in

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/books">Search All Books</Link></li>

        {/* Conditional rendering */}
        {!isLogged ? (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/favourite">My Favourite</Link></li>
            <li>
              {/* Use a button for logout functionality */}
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
