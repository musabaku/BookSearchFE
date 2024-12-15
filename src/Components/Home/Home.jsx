import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './Home.css'; // Import the CSS file

function Home() {
    return (
        <div>
            {/* Navigation Bar */}
            <NavBar />

            {/* Hero Section */}
            <div className="hero-section">
                <h1>Welcome to the Book Store!</h1>
            </div>

            {/* Button Section */}
            <div className="button-container">
            <p>Your one-stop shop for all your favorite books.</p>

                <Link to="/books">
                    <button className="cta-button">View All Books</button>
                </Link>
                <Link to="/favourite">
                    <button className="cta-button">My Favourite Books</button>
                </Link>
            </div>

            {/* Featured Section */}
            <div className="featured-section">
                <img
                    src="https://img.freepik.com/premium-photo/library-book-display-artificial-intelligence-created-with-generative-ai-technology_964851-2378.jpg"
                    alt="Featured Library"
                    className="featured-image"
                />
            </div>
        </div>
    );
}

export default Home;
