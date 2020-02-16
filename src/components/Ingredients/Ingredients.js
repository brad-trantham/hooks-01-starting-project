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

  const removeItemHandler = ingredientId => {
    setUserIngredients(prevIngredients => {
        const list = [...prevIngredients];
        console.log('before splice: '+list);
        list.splice(ingredientId, 1);
        console.log('after splice: '+list);
        [...prevIngredients].splice(ingredientId,1)});
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={id=>{removeItemHandler(id)}}/>
      </section>
    </div>
  );
}

export default Ingredients;
