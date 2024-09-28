import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategorySelect = ({ selectedCategory, setSelectedCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://product-hub-u28q.onrender.com/api/categories');
                setCategories(response.data); // Assuming the API returns an array of categories
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white border border-gray-300 rounded-md p-2 mb-4 ml-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
            <option value="">Select a category</option>
            {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default CategorySelect;
