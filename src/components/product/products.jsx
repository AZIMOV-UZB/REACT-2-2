import React from "react";
import { Button, Card } from "antd";
import { FaHeart } from "react-icons/fa";
import Skeletons from "../skelotons/skeletons";
import { useDispatch } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";



const Products = ({ data, loading }) => {
  console.log(data);

  if (loading) {
    return <Skeletons limit={10} />;
  }
  const dispatch = useDispatch();
  let items = data?.map((product) => {
    return (
      <Card key={product.id} className="relative">
        
        <div>
          <img
            className="w-60 h-[200px] object-contain duration-300 hover:scale-105"
            src={product.images[0]}
            alt="foto"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-[700] text-[#253D4E] text-start">
            {product.title.slice(0, 20)}...
          </p>
          <p className="text-start text-[15px] font-[500] text-[#5f5f5f]">
            {product.category}
          </p>
          <div className="flex items-center">
          <TiStarFullOutline className="text-yellow-400 text-[25px]" />
          <p>{product.rating}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[18px] text-lime-700 font-[700]">
              ${product.price}
            </p>
            <Button className="text-[18px] font-[500]"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
            Add  <IoCartOutline className="text-[18px] font-[500]"/>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <button
            onClick={() =>
              dispatch({ type: "TOGGLE_WISHLIST", payload: product })
            }
            className="rounded-[0_7px] px-[15px] text-[20px] text-[#2a54fe] py-[15px] bg-[#fff]"
          >
            <FaHeart />
          </button>
        </div>
      </Card>
    );
  });
  return (
    <div className="container mx-auto mt-7 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {items}
      </div>
    </div>
  );
};

export default Products;
