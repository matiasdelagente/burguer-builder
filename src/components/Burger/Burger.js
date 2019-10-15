import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(ingredient => {
    return [...Array(props.ingredients[ingredient])].map((_, index) => {
      return <BurgerIngredient key={ingredient+index} type={ingredient} />
    })
  }).reduce((array, el) => {
    return array.concat(array, el);
  },[])
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
};

export default Burger;