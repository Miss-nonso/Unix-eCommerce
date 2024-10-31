E-commerce Shopping Cart

This is a simple e-commerce shopping cart application built using React, Redux, and Context API. It allows users to add products to a cart, manage their quantities, and switch between light and dark themes.

Features

Add products to the cart

Remove products from the cart

Increase or decrease product quantities

Light and Dark theme toggling

Responsive design


Tools Used

React: For building the user interface.

Redux: For state management, particularly for the shopping cart.

Context API: For managing the theme state.

React Router: For navigation.

Fetch API: For fetching product data from a public API.


How Redux and Context API Were Used

Redux: Utilized for managing the cart state. The cartSlice handles actions such as adding, removing, and updating quantities of products in the cart.

Context API: Used to manage the theme state. The ThemeContext allows for toggling between light and dark themes across the application.


Running the Application

To run this project locally, follow these steps:

1. Clone the repository:

git clone https://github.com/Miss-nonso/Unix-eCommerce.git
cd ecommerce-cart


2. Install dependencies:

npm install


3. Start the development server:

npm start


4. Open your browser and navigate to http://localhost:3000 to view the application.



Usage

Browse through the product listings.

Click on "Add to Cart" to add items to your shopping cart.

Use the cart interface to remove items or change their quantities.

Toggle between light and dark themes using the theme switcher.


Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.


2. Create a new branch for your feature or bug fix:

git checkout -b feature-name


3. Commit your changes:

git commit -m 'Add some feature'


4. Push to the branch:

git push origin feature-name


5. Open a pull request.



License

This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgments

Fake Store API for providing the product data used in this application.
