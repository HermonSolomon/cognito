# Cognito Education

This project is a simple React application for a basic supermarket website. It fetches a list of products from an API endpoint and displays them on the website. The application includes components for the header, product list, product details, and a basket. State management is implemented to allow users to add products to the basket and maintain the state between page refreshes.

## Table of Contents

1. [Installation](#installation)
2. [Folder Structure](#folder-structure)
3. [Component Architecture](#component-architecture)
4. [State Management](#state-management)
5. [Styling](#styling)
6. [Testing](#testing)

## Installation

To set up the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/HermonSolomon/cognito-education.git

# Navigate to the project directory
cd cognito-education

# Install dependencies
npm install
```

## Folder Structure

This app uses modular approach in organising the folder structure. The UI is split from the business logic for better readability and maintenance

```bash
src/
|-- components/
   |-- Cart/
       |--Cart.tsx
   |-- Header/
       |--Header.tsx
   |-- Home/
       |--Home.tsx
   |-- ProductCard/
       |--ProductCard.tsx
       |--ProductCard.spec.tsx
   |-- ProductDetail/
       |--ProductDetail.tsx
   |-- RootLayout/
       |--RootLayout.tsx
|-- mocks/
    |-- mockGroceriesData.js
|-- store/
    |-- store.ts
    |-- cartSlice
        |-- cartSlice.spec.tsx
        |-- cartSlice.tsx
    |-- ProductSlice
        |-- productSlice.spec.tsx
        |-- productSlice.tsx
|-- test-util.js

```

## Component Architecture

The supermarket website is built with the following components:

- **Header**: Displays the logo and navigation links.
- **Product List**: Displays a list of products retrieved from the API.
- **Product Detail**: Displays details of a selected product.
- **Cart**: Displays items added to the basket including the amount.

## State Management

State management is implemented using Redux Toolkit. Users can add products to the basket, and the application maintains the state between page refreshes. It's worth noting that, while the size and complexity of the application might have allowed for the use of React's built-in Context for this particular task, the deliberate selection of Redux serves to demonstrate a broader understanding of state management, particularly in the context of larger and more intricate applications.

## Styling

The components are styled using the Tailwind CSS framework for simplicity and ease of use. The styling is responsive, adhering to design principles for both desktop and mobile screens.

## Testing

Unit tests are written for one of the components using Jest and React Testing Library. The tests cover both the rendering and behavior of the component.

Within the `test-util.js` file, a documentation wrapper from the Redux Docs has been leveraged to enhance the React Testing Library (RTL) render method. This wrapper facilitates the provision of a reusable store for testing. Modifications have been made to the original implementation, exporting the store directly from our wrapper file and overriding the RTL render method to ensure seamless integration with a reusable store for testing.

It's crucial to emphasise that this approach is particularly beneficial when testing components reliant on the Redux store, such as `ProductCard.tsx` and `Cart.tsx`. The wrapper plays a pivotal role in overriding the default reducer method, enabling the comprehensive testing of our components while maintaining a streamlined and effective testing environment.

```bash
# Run unit tests
npm run test
```
