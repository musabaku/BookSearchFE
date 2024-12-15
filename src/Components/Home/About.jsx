import React from 'react';
import './About.css'; // Import the CSS file
import NavBar from './NavBar';

function About() {
    return (
        <div>
            <NavBar />

        <div className="about-page">
            <header className="about-header">
                <h1>About This App</h1>
                <p>Your gateway to exploring and managing your favorite books.</p>
            </header>

            <section className="about-section">
                <h2>App Functionality</h2>
                <p>
                    This Book Search App is designed to make it easy for users to discover, explore, and organize their favorite books. 
                    Here's how it works:
                </p>
                <ul>
                    <li>
                        <strong>Public Book Search:</strong> 
                        Everyone can search for books using the <em>Google Books API</em>. No login is required for this functionality, making it accessible for all users.
                    </li>
                    <li>
                        <strong>User Authentication:</strong> 
                        Users can register and log in to the app securely. Authentication ensures a personalized experience.
                    </li>
                    <li>
                        <strong>Favorites Feature:</strong> 
                        Registered and logged-in users can add books to their favorites list. This allows users to create a curated collection of their preferred books.
                    </li>
                    <li>
                        <strong>Backend:</strong> 
                        The app's backend is powered by <em>MS SQL</em> and implemented in <em>C#</em>. It ensures robust data storage and management.
                    </li>
                    <li>
                        <strong>Frontend:</strong> 
                        The user interface is built with <em>React</em>, providing a dynamic and responsive experience.
                    </li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Future Improvements</h2>
                <p>
                    Future updates will focus on enhancing user experience with features like:
                </p>
                <ul>
                    <li>Enhanced filtering and sorting options for book searches.</li>
                    <li>Social features to share favorite books with friends.</li>
                    <li>Integration with additional book databases.</li>
                </ul>
            </section>
        </div>
        </div>

    );
}

export default About;
