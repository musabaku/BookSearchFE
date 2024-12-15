import React from 'react';
import axios from 'axios';
import './BookFavourite.css'; // Add a CSS file for styles

const BookFavourite = ({ book }) => {
  const deleteFavourite = async (event) => {
    const token = localStorage.getItem('authToken');
    event.preventDefault();
    try {
      console.log(book.googleBookId);
      const response = await axios.delete(
        `https://booksearch-p2fm.onrender.com/api/Favourite/favourites/deletefavourite/${book.googleBookId}`,
        // `https://localhost:7192/api/Favourite/favourites/deletefavourite/${book.googleBookId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error('Error deleting favourite:', error);
    }
    alert("Favourite deleted!");
      window.location.reload(); 
  };

  return (
    <div className="bookCard" key={book.id}>
      <img src={book.imageLinks} alt="book cover" className="bookImage" />
      <div className="bookDetails">
        <h3 className="bookTitle">{book.title}</h3>
        <p className="bookAuthor">{book.authors}</p>
        <p className="bookDate">{book.publishedDate}</p>
        <button onClick={deleteFavourite} className="deleteFavButton">
          Delete Favourite
        </button>
      </div>
    </div>
  );
};

export default BookFavourite;
