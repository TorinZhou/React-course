import { useParams } from "react-router-dom";

export const ProductItem = (props) => {
  const param = useParams();
  return (
    <>
      <section>
        <h1>item url is : {param.id}</h1>
      </section>
    </>
  );
};
