import React from "react";
import axios from "axios";

const BookItem = ({ book }) => {
    const addFavourite = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem("authToken");
            if (!token) throw new Error("Authentication token is missing");

            await axios.post(
                `https://localhost:7192/api/Favourite/favourites/${book.id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("Book added to favourites!");
        } catch (error) {
            console.error("Error adding favourite book: ", error);
        }
    };

    return (
        <div className="book-item">
            <div className="book-image">
                <img
                    src={
                        book.volumeInfo.imageLinks?.thumbnail ||
                        "https://via.placeholder.com/128x194.png?text=No+Image"
                    }
                    alt={book.volumeInfo.title}
                />
            </div>
            <div className="book-details">
                <h3>{book.volumeInfo.title}</h3>
                <p>Author: {book.volumeInfo.authors}</p>
                <p>Published: {book.volumeInfo.publishedDate || "Unknown"}</p>
                <button onClick={addFavourite} className="favourite-button">
                    Add to Favourites
                </button>
            </div>
        </div>
    );
};

export default BookItem;
