import { useState } from "react";
import { LiaEyeSlash, LiaEyeSolid } from "react-icons/lia";
import { AdminLoginData, FormType } from "../../../Types/type";

export default function Login() {
  const [openPassword, setOpenPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<AdminLoginData>({
    email: "",
    password: "",
  });
  function showPassword() {
    setOpenPassword((prev) => !prev);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function formSubmit(e: FormType) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="w-[70%] md:w-[60%] min-[692px]:h-[32rem] h-[27rem] absolute bg-white bg-opacity-75  rounded-2xl flex flex-col md:flex-row ">
      <div className=" w-full md:w-[50%] md:h-full h-[40%] flex justify-center items-center">
        <img src={"/GDPR-cuate.png"} alt="img" className="w-[70%] h-auto" />
      </div>
      <div className="md:w-[1px] w-full md:h-full h-[0.5px] bg-gray-300"></div>
      <form
        className="w-full md:w-[50%] md:h-full h-[50%] flex flex-col items-center p-4 md:py-20 "
        onSubmit={(e) => formSubmit(e)}
      >
        <h4 className="md:mb-5 font-semibold  md:text-base">Login Please</h4>
        <div className="bg-transparent w-[90%] h-24 flex flex-col">
          <label htmlFor="email " className="mx-4 ">
            Email
          </label>
          <input
            type="email "
            id="email"
            className="mx-4 h-8 rounded-md ps-3 md:text-sm text-xs outline outline-gray-400"
            placeholder="Enter Your Email"
            defaultValue={formData.email}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="bg-transparent w-[90%] h-24 mt-2 md-m-0 flex flex-col">
          <label htmlFor="password " className="mx-4 text-sm md:text-base">
            Password
          </label>
          <div className="flex items-center">
            <input
              type={`${openPassword ? "text" : "password"}`}
              id="password"
              className="mx-4 h-8 rounded-md w-4/5 ps-3 md:text-sm text-xs outline outline-gray-400"
              placeholder="Enter Your Password"
              defaultValue={formData.password}
              onChange={(e) => handleChange(e)}
              required
            />
            <div
              className="bg-transparent m-0 cursor-pointer"
              onClick={showPassword}
            >
              {!openPassword ? <LiaEyeSlash /> : <LiaEyeSolid />}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-20 h-10 mt-3 rounded-md text-sm md:text-base bg-blue-400"
        >
          Login
        </button>
        <p className=" text-xs md:text-sm text-gray-500 mt-4">
          Terms of use of Privacy Policy
        </p>
      </form>
    </div>
  );
}
