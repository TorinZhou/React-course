import DUMMY_MEALS from "../../assets/dummy-meals";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const AvailableMeals = (props) => {
  const dummyMealsListItemsArray = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{dummyMealsListItemsArray}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
