import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CategorySelect from './components/CategorySelect';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const initialCategory = queryParams.get('category') || '';
    const initialSearch = queryParams.get('search') || '';
    const initialPage = queryParams.get('page') || 1;

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [search, setSearch] = useState(initialSearch);
    const [currentPage, setCurrentPage] = useState(Number(initialPage));
    const [totalPages, setTotalPages] = useState(0); // Total pages for pagination

    // Update query params when category, search, or page changes
    useEffect(() => {
        const params = new URLSearchParams();
        if (selectedCategory) params.set('category', selectedCategory);
        if (search) params.set('search', search);
        params.set('page', currentPage);

        navigate({ search: params.toString() });
    }, [selectedCategory, search, currentPage, navigate]);

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-5">Product List</h1>
            {/* Filter and Search Bar Row */}
            <div className="flex justify-between items-center mb-5">
                <CategorySelect 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                    setCurrentPage={setCurrentPage} // Pass the setCurrentPage function here
                />
                <SearchBar search={search} setSearch={setSearch} />
            </div>

            {/* Product List Centered */}
            <div className="flex justify-center">
                <ProductList 
                    selectedCategory={selectedCategory} 
                    search={search} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} 
                    setTotalPages={setTotalPages} 
                />
            </div>

            {/* Pagination Component */}
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                setCurrentPage={setCurrentPage} 
            />
        </div>
    );
};

export default App;
