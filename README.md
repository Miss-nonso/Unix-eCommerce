# E-commerce Shopping Cart

This is a simple e-commerce shopping cart application built using React, Redux, and Context API. It allows users to add products to a cart, manage their quantities, and switch between light and dark themes.

## Features

- Add products to the cart
- Remove products from the cart
- Increase or decrease product quantities
- Light and Dark theme toggling
- Responsive design

## Tools Used

- **React**: For building the user interface.
- **Redux**: For state management, particularly for the shopping cart.
- **Context API**: For managing the theme state.
- **React Router**: For navigation.

## How Redux and Context API Were Used

- **Redux**: Utilized for managing the cart state. The `cartSlice` handles actions such as adding, removing, and updating quantities of products in the cart.
  
- **Context API**: Used to manage the theme state. The `ThemeContext` allows for toggling between light and dark themes across the application.

## Running the Application

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Miss-nonso/Unix-eCommerce.git
   cd ecommerce-cart
