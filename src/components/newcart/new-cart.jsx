import React from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";


const NewCart = ({ data }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(data);
  let items = data?.map((product) => {
    return (
      
      <Card key={product.id} className="relative">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <img
              className="w-60 h-[200px] object-contain duration-300 hover:scale-105"
              src={product.images[0]}
              alt="foto"
            />
          </div>
          
          
          <div className="flex flex-col gap-1">
            <p className="text-[40px] font-[700] text-[#000000] text-start">
              {product.title}
            </p>
            <p className="text-start text-[12px] text-[#000000]">
              {product.category}
            </p>
            <p className="text-start text-[14px]  text-[#000000]">
              {product.description}
            </p>
            <p className="text-[red] text-xl">{product.returnPolicy}</p>
            <div className="flex flex-wrap gap-2">
              <p className="text-xl p-2 border rounded-lg hover:bg-black hover:text-white">Width : {product.dimensions.width}</p>
              <p className="text-xl p-2 border rounded-lg hover:bg-black hover:text-white">Heigth : {product.dimensions.height}</p>
            </div>
            <img className="w-20 h-20" src={product.meta.qrCode} alt="foto" />
            <p className="text-[18px] text-[#3BB77E] font-[700]">
              ${product.price}
            </p>
            <p>{product.reviews.data}</p>
            <div className="flex gap-1 items-center mt-4">
              <button
                disabled={product.quantity <= 1}
                onClick={() => dispatch({ type: "DEC_CART", payload: product })}
                className="w-[40px] h-[30px] border rounded-[5px] text-[20px] flex items-center justify-center hover:bg-black hover:text-white"
              >- </button>
              <button className="h-[30px] w-[60px]">{product.quantity}</button>
              <button
                onClick={() => dispatch({ type: "INC_CART", payload: product })}
                className="w-[40px] h-[30px] border rounded-[5px] text-[20px] flex items-center justify-center hover:bg-black hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <button
            onClick={() => dispatch({ type: "REMOVE_CART", payload: product })}
            className="rounded-[0_7px] px-[10px] text-[16px] text-[#fff] bg-[red] py-[5px] hover:bg-black "
          >
            <MdDelete  className="text-3xl"/>

          </button>
        </div>
      </Card>
    );
  });
  return (
    <div className="container mx-auto mt-7 mb-6">
      <div className="grid grid-cols-1 gap-4">{items}</div>
    </div>
  );
};

export default NewCart;
