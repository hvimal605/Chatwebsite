import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import { Link} from "react-router-dom";


function UpdatePassword() {

  
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { password, confirmPassword  } = formData;
  

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    console.log("token hai ye",token)
    console.log(formData)


    axios.post("https://chatwebapp-8sjg.onrender.com/api/user/reset-password",{password, confirmPassword, token})
        
        
        .then((response) => {
            console.log(response.data,"ye hai response h ")
            if(response.data.success){
            
           toast.success(response.data.message)
           
            }

            if(!response.data.success){
                toast.error("Error:"+response.data.message)
              }
           


        })
        .catch((error) => {
            console.log("RESET PASSWORD  Error", error);
            toast.error("Unable to reset password");
            
           
        })


   
  };

  return (
    <div className="grid h-screen place-items-center ">
     
        <div className="max-w-[500px] p-4 lg:p-8 bg-white rounded-md">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem]">
            Choose new Password
          </h1>
          <p className="my-4 text-[1.125rem] leading-[1.625rem]">
            Almost done. Enter your new password and you&apos;re all set.
          </p>
          <form onSubmit={handleOnSubmit}>
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
                New Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                className=" w-full !pr-10 p-2 rounded border-2 border-black text-black"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <label className="relative mt-3 block">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
                Confirm New Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                className="form-style w-full !pr-10 p-2 border-2 border-black rounded  text-black"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>

            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-yellow-400 py-[12px] px-[12px] font-semibold text-richblack-900"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-richblack-5">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      
    </div>
  );
}

export default UpdatePassword;