
# E-Commerce Shopping Cart

This project is a fully functional e-commerce shopping cart application built with React, Redux, and the Context API. It allows users to browse products, add them to a shopping cart, and manage inventory. The application is designed to be responsive and works seamlessly across various screen sizes.

## Features

- **Product Listing**: Fetches products from a public API and displays them in a responsive grid layout.
- **Add to Cart**: Users can add products to their shopping cart.
- **Inventory Management**: Product details like price, title, and image are fetched and displayed.
- **Responsive Design**: The app is fully responsive, ensuring that it looks great on devices of all screen sizes.
- **Redux for State Management**: Redux is used to manage the shopping cart's state, ensuring a smooth user experience.
- **Context API**: Used for managing inventory data across components.
- **Hover Effects & Smooth Transitions**: The UI is enhanced with hover effects on product cards and smooth transitions for buttons.

## Installation and Setup

### Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Steps to Set Up

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Miss-nonso/UI-task.git
   cd ecommerce-cart
   ```

2. **Install dependencies**:
   Navigate to the project directory and install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Start the development server**:
   After installing dependencies, start the React development server:
   ```bash
   npm start
   ```

   This will launch the app in your default web browser at `http://localhost:3000`.

4. **Open in your browser**:
   Your e-commerce cart should now be up and running. You can add products to the cart and navigate between pages.

### Running in Production Mode

To create a production build of the app, run:
```bash
npm run build
```

This will create a `build` folder containing optimized and minified files that you can deploy to any hosting provider.

[Click here to view this app](https://ecommerce-mod.vercel.app/)


## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library to handle global state for the cart.
- **Context API**: For managing inventory data across components.
- **CSS**: Styling using external CSS with flexbox and grid layout.
- **Media Queries**: For responsive design across screen sizes.
