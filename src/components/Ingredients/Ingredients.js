import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients => 
      [...prevIngredients, {id: Math.random(), ...ingredient}]);
  }

  // this method doesn't work but removeIngrientHandler does
  const removeItemHandler = ingredientId => {
    setUserIngredients(prevIngredients => {
        [...prevIngredients].splice(ingredientId,1)});
  }

  const removeIngredientHandler = ingredientId => {
    //const filteredIngredients = userIngredients.filter(ingredient => ingredient.id !== ingredientId)
    setUserIngredients(prevIngredients =>
        prevIngredients.filter(ingredient =>
            ingredient.id !== ingredientId))
}

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={id=>{removeIngredientHandler(id)}}/>
      </section>
    </div>
  );
}

export default Ingredients;
