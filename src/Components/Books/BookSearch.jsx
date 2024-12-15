import React, { useState } from "react";
import axios from "axios";
import "./booksearch.css";
import BookItem from "./BookItem";
import NavBar from "../Home/NavBar";

const BookSearch = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!query) return;

        setLoading(true);
        try {
            const response = await axios.get(
                `https://booksearch-p2fm.onrender.com/api/booksearch/search?query=${query}`
                // `https://localhost:7192/api/booksearch/search?query=${query}`
            );
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="main-book-box">
                <h1>Book Search</h1>
                <form onSubmit={handleSearch} className="book-form">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter book or author's name"
                        className="query-input"
                    />
                    <button className="search-button" type="submit">
                        Search
                    </button>
                </form>
                {loading && <p>Loading...</p>}
                <div className="book-list">
                    {books.length > 0 ? (
                        books.map((book) => <BookItem book={book} key={book.id} />)
                    ) : (
                        <p>No books found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookSearch;
