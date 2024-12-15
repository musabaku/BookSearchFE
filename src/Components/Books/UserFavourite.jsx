import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookFavourite from './BookFavourite';
import './UserFavourite.css'; // Add a CSS file for styles
import NavBar from '../Home/NavBar';

const UserFavourite = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllFavourites = async () => {
      try {
        const token = localStorage.getItem('authToken');
        console.log(token);
        const response = await axios.get(
          // 'https://localhost:7192/api/Favourite/favourites/allfavourite',
          'https://booksearch-p2fm.onrender.com/api/Favourite/favourites/allfavourite',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching favourites:', error.response || error.message);
        setLoading(false);
      }
    };
    fetchAllFavourites();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="userFavourite">
        <h1 className="pageTitle">Your Favourite Books</h1>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="bookList">
            {books.length > 0 ? (
              books.map((book) => <BookFavourite book={book} key={`${book.id}-${book.title}`} />)
            ) : (
              <div className="noBooks">
                No books found
                <h3>
                  Visit Search All Books & Add Favourite
                </h3>
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserFavourite;
