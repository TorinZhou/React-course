import DUMMY_MEALS from "../../assets/dummy-meals";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  const dummyMealsListItemsArray = DUMMY_MEALS.map((meal) => (
    <li>{meal.id}</li>
  ));
  return (
    <section className={classes.meals}>
      <ul>{dummyMealsListItemsArray}</ul>
    </section>
  );
};

export default AvailableMeals;
