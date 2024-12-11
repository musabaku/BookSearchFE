import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import './NavBar.css'; // You can style your NavBar here

const NavBar = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook
  const isLogged = localStorage.getItem('authToken');  // Check if the user is logged in

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('authToken');  // Remove the token from localStorage
    navigate('/login');  // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/books">Search All Books</a></li>
        
        {/* Conditional rendering */}
        {!isLogged ? (
          <>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </>
        ) : (
          <>
            <li><a href="/favourite">My Favourite</a></li>
            <li>
              <a href="#!" onClick={handleLogout}>Logout</a>  
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
