const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/products', async (req, res) => {
    const { category, page = 1, search = '' } = req.query;
    const limit = 10; // Number of products per page
    const skip = (page - 1) * limit; // Calculate skip value

    try {
        // Fetch products from the DummyJSON API
        const response = await axios.get('https://dummyjson.com/products', {
            params: {
                limit: 194, // Fetch a larger dataset to allow proper filtering
                skip: 0,
            }
        });

        // Save the original products list before filtering
        const allProducts = response.data.products;

        // Filter products based on category and search
        const filteredProducts = allProducts.filter(product => {
            const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();
            const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Calculate pagination details
        const totalFilteredProducts = filteredProducts.length;

        // Get paginated products
        const paginatedProducts = filteredProducts.slice(skip, skip + limit);

        res.json({
            products: paginatedProducts,
            total: totalFilteredProducts,
            totalPages: Math.ceil(totalFilteredProducts / limit) // Calculate total pages based on filtered products
        });

    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        // Fetch categories from the DummyJSON API
        const response = await axios.get('https://dummyjson.com/products/categories');
        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Error fetching categories' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
