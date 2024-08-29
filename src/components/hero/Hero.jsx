import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="text-3xl">hero</h2>
      <Button
        onClick={() => dispatch({ type: "INC" })}
        className="border w-[200px]"
      >
        {" "}
        incrment
      </Button>
      <Button
        onClick={() => dispatch({ type: "DEC" })}
        className="border w-[200px]"
      >
        {" "}
        incrment
      </Button>
    </div>
  );
};

export default Hero;
