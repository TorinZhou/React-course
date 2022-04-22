import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";
import Spinner from "../UI/Spinner";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState({ hasError: false, message: "" });

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-test-d6cb2-default-rtdb.firebaseio.com/meals.json"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const meals = Object.keys(data).map((key) => {
        return {
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        };
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setMeals(meals);
    };

    fetchMeals().catch((err) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setHttpError((prevErrState) => {
        return {
          ...prevErrState,
          hasError: true,
          message: err.message,
        };
      });
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <Spinner />}
        {!isLoading && httpError.hasError && <p>Something went wrong</p>}
        {!isLoading && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
