import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';
import axios from 'axios';

const ProductList = ({ selectedCategory, search, currentPage, setCurrentPage, setTotalPages }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://product-hub-u28q.onrender.com/api/products', {
                params: { category: selectedCategory, search, page: currentPage }
            });
            console.log(response.data);
            dispatch(setProducts(response.data.products));
            setTotalPages(response.data.totalPages); // Update total pages from the response
        };

        fetchProducts();
    }, [selectedCategory, search, currentPage, dispatch, setTotalPages]);

    useEffect(() => {
        // Reset to the first page if the search term changes
        setCurrentPage(1);
    }, [search, setCurrentPage]);

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
                            <div className="flex justify-center">
                                <img src={product.thumbnail} alt={product.title} className="w-50 h-50 object-cover rounded-md mb-4" />
                            </div>
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-sm text-gray-500">Category: {product.category}</p>
                            <p className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</p>
                            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
