import React from 'react';
import Header from './components/Layout/Header/Header';
import Summary from './components/Layout/Summary/Summary';
import MealList from './components/Meals/MealList';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header/>
      <Summary/>
      <MealList/>
    </CartProvider>
  );
}

export default App;
