import React from "react";
import Logo from '../../asset/logo.png';
import Gmail from '../../asset/gmail.png';
import Facebook from '../../asset/facebook.png';

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto">
      <nav className="flex justify-between py-3">
          <div className="nav-l flex">
              <img className="w-20 h-20" src={Logo} alt="" />
              <ul className="flex items-center space-x-6 ml-5">
                  <li><a href="#">Vector</a></li>
                  <li><a href="#">Photos</a></li>
                  <li><a href="#">PSD</a></li>
                  <li><a href="#">Video</a></li>
                  <li><a href="#">More <i class="fa fa-caret-down" aria-hidden="true"></i></a></li>
              </ul>
          </div>
          <div className="nav-r flex  items-center space-x-5">
              <button className="border-solid border-[1px] border-[#979797] py-2 px-6 rounded-md text-[#979797]">+ Submit</button>
              <img className="w-10 h-10 shadow-xl rounded-full object-cover cursor-pointer" src={Gmail} alt="" />
              <img className="w-10 h-10 shadow-xl rounded-full object-cover cursor-pointer" src={Facebook} alt="" />
          </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
