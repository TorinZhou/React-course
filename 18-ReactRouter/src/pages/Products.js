import { Link } from "react-router-dom";
export const Porducts = (props) => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/products/1">First</Link>
        </li>
        <li>
          <Link to="/products/2">Second</Link>
        </li>
        <li>
          <Link to="/products/3">Third</Link>
        </li>
      </ul>
    </section>
  );
};
