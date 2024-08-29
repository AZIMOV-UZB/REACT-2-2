import React ,{memo}from "react";
import { useEffect } from "react";
import Rasm from "../../assets/user.webp";
const Profil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex flex-col overflow-hidden">
      <div className=" flex flex-col gap-5">
        <div className="w-[200px] h-[200px] rounded-md flex m-auto">
          <img
            className="Admin__img border-0 mt-5 w-[200px] h-[200px]  object-contain"
            src={Rasm}
            alt="foto"
          />
        </div>
        <div className="flex justify-between mt-52">
          <div className="">
            <p className="text-[20px] font-[700] p-2 "> Username</p>
            <div className="border p-2  ">
              {" "}
              <p className="font-[700]">emilys</p>
            </div>
          </div>
          <div>
            <p className="text-[20px] font-[700] p-2 ">Password</p>
            <input 
              value={12345678}
              className="py-[4px] bg-inherit border p-2 outline-none font-[700]  "
              type="password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Profil);
