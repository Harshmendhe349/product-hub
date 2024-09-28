# Product Hub

This project is a full-stack product catalog application that features a React frontend (client) and a backend server. The client interacts with an API to fetch products and categories from the DummyJSON API, using Redux for state management. The server serves as the backend for managing API requests or providing additional functionality.

## Features

> Category Filtering: Users can filter products by selecting a category. When no category is selected, all products are displayed.
> Search Functionality: Users can search for products by name.
> Batch Loading of Products: Products are fetched in batches of 10 to optimize loading time and minimize API requests.
> Redux for State Management: Redux is used to store and manage category and product data.
> Query Parameters: The selected category and search input are stored as query parameters in the URL for easy navigation and sharing.
> Backend Server: The server handles additional API requests and provides backend functionalities if needed.

## Installation
### Prerequisites
Ensure you have the following installed on your machine:

> Node.js
> npm (Node Package Manager) or Yarn

## Steps to Install
1. Clone the repository:

        git clone https://github.com/Harshmendhe349/product-hub.git
        cd product-hub

2. Install dependencies for the server:

        cd server
        npm install

3. Install dependencies for the client:

        cd ../client
        npm install

4. Run the server:

        cd server
        node index.js
    
5. Run the client: Open a new terminal, and from the project root, run:

        cd client
        npm start
        
    
    The client will run on http://localhost:3000 and the server will run on http://localhost:5000.

## Usage
1. Category Selection: The dropdown menu selects a category and filters products.
2. Search Bar: Type into the search bar to find products by name.
3. Pagination: Products are fetched in batches of 10 and displayed on the page as more data is retrieved.
4. URL Parameters: The selected category and search input will appear in the URL, making the current state shareable.
