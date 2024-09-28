import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const [jumpPage, setJumpPage] = useState(currentPage); // State for the jump input

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleJumpChange = (e) => {
        const value = e.target.value;
        if (value === "" || /^\d+$/.test(value)) { // Allow empty or numeric input
            setJumpPage(value);
        }
    };

    const handleJumpSubmit = (e) => {
        e.preventDefault();
        const pageNum = Number(jumpPage);
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
        } else {
            alert(`Please enter a valid page number between 1 and ${totalPages}.`);
        }
    };

    return (
        <div className="flex items-center justify-center mt-4">
            <button 
                onClick={handlePrevious} 
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Previous
            </button>
            <span className="mx-4 text-lg font-semibold">
                Page {currentPage} of {totalPages}
            </span>
            <button 
                onClick={handleNext} 
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Next
            </button>
            <form onSubmit={handleJumpSubmit} className="flex items-center ml-4">
                <input
                    type="number"
                    value={jumpPage}
                    onChange={handleJumpChange}
                    className="border border-gray-300 rounded-md p-2 w-10 text-center focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    min="1"
                    max={totalPages}
                    placeholder="Jump to"
                />
                <button 
                    type="submit" 
                    className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                >
                    Go
                </button>
            </form>
        </div>
    );
};

export default Pagination;
