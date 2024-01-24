import React from 'react';
import Header from './components/Layout/Header/Header';
import Summary from './components/Layout/Summary/Summary';
import MealList from './components/Meals/MealList';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Summary/>
      <MealList/>
    </React.Fragment>
  );
}

export default App;
