import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceActions } from "../store/cartSlice";

// * Helper Functions:

const Products = (props) => {
  const productList = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    // TODO first I have to check if this item is already in the cart. So I have to useSelector to check.
    // TODO But I fell it would be easier if I did this in the slice. So I don't have to useSelector here.
    // TODO But I can't. cause I don't know how to access the cart state in the cartSlice.js it own.
    const formattedProduct = {
      ...product,
      quantity: 1,
      total: product.price,
    };
    console.log(formattedProduct);
    dispatch(cartSliceActions.addItemToCart(formattedProduct));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              onAddToCart={addToCartHandler.bind(null, product)}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
