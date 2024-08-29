import Empty from "../../components/empty/empty";
import Products from "../../components/product/products";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const data = useSelector((state) => state.wishlist);
  console.log(data);
  return (
    <div>
      {data.length ? (
        <Products data={data} />
      ) : (
        <Empty
          url="https://www.lifestone.in/assets/front/images/icons/empty-wishlist.svg"
          title="Sevimlilar Bo'sh !"
        />
      )}
    </div>
  );
};

export default Wishlist;
