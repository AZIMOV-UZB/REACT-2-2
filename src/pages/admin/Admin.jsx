import React ,{memo} from 'react'
import "./Admin.scss"
import { NavLink,Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="Admin">
    <div className="flex pt-10 mt-32 ">
      <div className="w-80 min-h-screen bg-[#E2E8F0] mt-[-130px] px-[30px] m-auto flex flex-col items-center rounded-lg	 gap-5 dark:bg-black border dark:text-white ">
        <p className="text-[20px] font-[800] mt-[20px] font-serif	">Admin</p>
        <NavLink className={""} to={"profil"}>
          Profil
        </NavLink>
        <NavLink className={""} to={"user"}>
          User
        </NavLink>
      </div>
      <div className="flex-1 p-5 mt-[-130px]">
        {" "}
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default memo(Admin)