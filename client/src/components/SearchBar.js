import React from 'react';

const SearchBar = ({ search, setSearch }) => {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="border border-gray-300 rounded-md p-2 mb-4 w-50 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
    );
};

export default SearchBar;
