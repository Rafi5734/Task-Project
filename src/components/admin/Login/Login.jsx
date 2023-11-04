import { useState } from "react";
import Navbar1 from "../../reuseableComponent/navbar1/Navbar1";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [checkPassword, setCheckPassword] = useState(" ");

  var data = JSON.parse(localStorage.getItem("authUserDetails"));

  var randomNumbers = Math.floor(Math.random() * 100000000) + 1;

  console.log(randomNumbers);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("pass", checkPassword);
    if (checkPassword === data?.password) {
      toast.success("Successfully Logged in!");
      localStorage.setItem("authToken", JSON.stringify(randomNumbers));
      navigate("/");
      location.reload();
    } else {
      toast.error("Check your password again.");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordCheck = (password) => {
    setCheckPassword(password);
  };
  return (
    <>
      <div className="w-full h-full">
        <Navbar1 />
        <div className="w-full h-[90vh] flex justify-center items-center flex-col">
          <div>
            <div className="flex justify-center flex-col items-center">
              <p className="text-[26px] text-[#323B4B] font-[700]">Sign In</p>
              <p className="text-[18px] text-[#8A94A6] font-[500] mt-5">
                Welcome back, you’ve been missed!
              </p>
            </div>
            <div className="w-full grid lg:grid-cols-2 xs:grid-cols-1 gap-4">
              <div className="">
                <div className="w-full h-[58px] mt-5 me-10 rounded-lg bg-[#F0F5FA] flex justify-center flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.5281 17.0089 15.2203 18.75 12.5 18.75C9.04845 18.75 6.25001 15.9516 6.25001 12.5C6.25001 9.04843 9.04845 6.25 12.5 6.25C14.0932 6.25 15.5427 6.85104 16.6464 7.83281L19.5927 4.88645C17.7323 3.1526 15.2438 2.08333 12.5 2.08333C6.74741 2.08333 2.08334 6.74739 2.08334 12.5C2.08334 18.2526 6.74741 22.9167 12.5 22.9167C18.2526 22.9167 22.9167 18.2526 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.28436 7.65156L6.70676 10.1615C7.6328 7.86874 9.87551 6.24999 12.5 6.24999C14.0932 6.24999 15.5427 6.85104 16.6463 7.83281L19.5927 4.88645C17.7323 3.1526 15.2437 2.08333 12.5 2.08333C8.49895 2.08333 5.02915 4.34218 3.28436 7.65156Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M12.5 22.9167C15.1906 22.9167 17.6354 21.887 19.4839 20.2125L16.2599 17.4844C15.2141 18.2766 13.9141 18.75 12.5 18.75C9.79062 18.75 7.4901 17.0224 6.62344 14.6115L3.22656 17.2287C4.95052 20.6021 8.45156 22.9167 12.5 22.9167Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.9745 15.7484 17.225 16.7531 16.2583 17.4849L16.2599 17.4839L19.4839 20.212C19.2557 20.4193 22.9167 17.7083 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z"
                      fill="#1976D2"
                    />
                  </svg>
                  <p className="ms-3 text-[16px] text-[#8A94A6] font-[500]">
                    Sign Up with Google
                  </p>
                </div>
              </div>
              <div className="">
                <div className="w-full h-[58px] mt-5 rounded-lg bg-[#F0F5FA] flex justify-center flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6_21)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.256 3.89624C14.0196 2.88584 14.5985 1.45774 14.3891 0C13.141 0.088904 11.6822 0.907396 10.831 1.97424C10.055 2.9409 9.41729 4.37889 9.66636 5.77454C11.0308 5.81828 12.439 4.98002 13.256 3.89624ZM20 17.6086C19.454 18.8561 19.1912 19.4135 18.4878 20.5185C17.5066 22.0609 16.123 23.9815 14.4069 23.9956C12.8837 24.0125 12.491 22.9725 10.4231 22.9852C8.35532 22.9965 7.92424 24.0153 6.39835 23.9998C4.6836 23.9843 3.37257 22.2514 2.39135 20.709C-0.353892 16.3992 -0.642649 11.3402 1.0502 8.64908C2.25449 6.73835 4.15399 5.6207 5.93853 5.6207C7.75455 5.6207 8.89726 6.64804 10.4013 6.64804C11.8601 6.64804 12.7483 5.61789 14.8489 5.61789C16.4391 5.61789 18.1238 6.51115 19.3226 8.05215C15.3922 10.2733 16.0286 16.0606 20 17.6086Z"
                        fill="#C1C7D0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_21">
                        <rect width="20" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="ms-3 text-[16px] text-[#8A94A6] font-[500]">
                    Sign Up with Apple ID
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 mt-5">
              <hr className="mt-3" />
              <p className="text-center text-[#B0B7C3]">Or</p>
              <hr className="mt-3" />
            </div>

            <form className="w-full mt-8" onSubmit={handleLogin}>
              <div className="relative mb-7">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6_37)">
                      <circle cx="10" cy="10" r="10" fill="#EDEFF1" />
                      <path
                        d="M13.3875 12.2842C12.9742 12.7813 12.4565 13.1814 11.8712 13.456C11.2858 13.7306 10.6472 13.8729 10.0006 13.8729C9.3541 13.8729 8.71548 13.7306 8.13014 13.456C7.5448 13.1814 7.02708 12.7813 6.61376 12.2842C6.44788 12.0927 6.21355 11.9739 5.96107 11.9533C5.70859 11.9326 5.45808 12.0118 5.26332 12.1738C5.06856 12.3358 4.94507 12.5677 4.91937 12.8197C4.89366 13.0717 4.96778 13.3238 5.12582 13.5217C5.72158 14.236 6.46702 14.8106 7.3094 15.205C8.15179 15.5993 9.07054 15.8037 10.0006 15.8037C10.9308 15.8037 11.8495 15.5993 12.6919 15.205C13.5343 14.8106 14.2797 14.236 14.8755 13.5217C15.0335 13.3238 15.1076 13.0717 15.0819 12.8197C15.0562 12.5677 14.9327 12.3358 14.738 12.1738C14.5432 12.0118 14.2927 11.9326 14.0402 11.9533C13.7877 11.9739 13.5534 12.0927 13.3875 12.2842Z"
                        fill="#C6CCD4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_37">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <input
                  type="email"
                  disabled
                  id="default-email"
                  value={data?.email}
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.61905 14.0108V15.9326C9.61905 16.1335 9.79576 16.2963 10 16.2963C10.2104 16.2963 10.381 16.1275 10.381 15.9326V14.0108C10.8248 13.8583 11.1429 13.4467 11.1429 12.963C11.1429 12.3493 10.6312 11.8519 10 11.8519C9.36882 11.8519 8.85714 12.3493 8.85714 12.963C8.85714 13.4467 9.17517 13.8583 9.61905 14.0108ZM4.28571 8.14816V5.55499C4.28571 2.48645 6.84409 0 10 0C13.1495 0 15.7143 2.48705 15.7143 5.55499V8.14816C16.9784 8.15167 18 9.14838 18 10.3774V14.0741C18 17.3402 15.2714 20 11.9054 20H8.09456C4.73232 20 2 17.3469 2 14.0741V10.3774C2 9.14043 3.02273 8.15164 4.28571 8.14816ZM6.57143 8.14815V5.55619C6.57143 3.71055 8.10645 2.22222 10 2.22222C11.8897 2.22222 13.4286 3.71489 13.4286 5.55619V8.14815H6.57143Z"
                      fill="#C1C7D0"
                    />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => handlePasswordCheck(e.target.value)}
                  // value={userRegistration?.password}
                  id="default-password"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Create Password"
                  required
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="text-white absolute right-2.5 bottom-2.5 rounded-full px-4 py-2"
                >
                  {showPassword ? (
                    <>
                      <svg
                        className="bg-[#38CB89] rounded-xl"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_16_154)">
                          <path
                            d="M10 4.03906C6.17879 4.03906 2.71351 6.12968 0.15649 9.52541C-0.0521632 9.80361 -0.0521632 10.1923 0.15649 10.4705C2.71351 13.8703 6.17879 15.9609 10 15.9609C13.8212 15.9609 17.2865 13.8703 19.8435 10.4746C20.0522 10.1964 20.0522 9.8077 19.8435 9.5295C17.2865 6.12968 13.8212 4.03906 10 4.03906ZM10.2741 14.1976C7.73755 14.3572 5.64284 12.2665 5.80239 9.72588C5.93331 7.63117 7.63118 5.9333 9.72589 5.80238C12.2625 5.64283 14.3572 7.73345 14.1976 10.2741C14.0626 12.3647 12.3647 14.0626 10.2741 14.1976ZM10.1473 12.2584C8.78081 12.3443 7.65163 11.2192 7.74164 9.85271C7.81119 8.72353 8.72763 7.81118 9.85681 7.73754C11.2233 7.65162 12.3525 8.77671 12.2625 10.1432C12.1888 11.2765 11.2724 12.1888 10.1473 12.2584Z"
                            fill="#DCDFE5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_16_154">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        className="bg-[#FF5630] rounded-xl"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_16_154)">
                          <path
                            d="M10 4.03906C6.17879 4.03906 2.71351 6.12968 0.15649 9.52541C-0.0521632 9.80361 -0.0521632 10.1923 0.15649 10.4705C2.71351 13.8703 6.17879 15.9609 10 15.9609C13.8212 15.9609 17.2865 13.8703 19.8435 10.4746C20.0522 10.1964 20.0522 9.8077 19.8435 9.5295C17.2865 6.12968 13.8212 4.03906 10 4.03906ZM10.2741 14.1976C7.73755 14.3572 5.64284 12.2665 5.80239 9.72588C5.93331 7.63117 7.63118 5.9333 9.72589 5.80238C12.2625 5.64283 14.3572 7.73345 14.1976 10.2741C14.0626 12.3647 12.3647 14.0626 10.2741 14.1976ZM10.1473 12.2584C8.78081 12.3443 7.65163 11.2192 7.74164 9.85271C7.81119 8.72353 8.72763 7.81118 9.85681 7.73754C11.2233 7.65162 12.3525 8.77671 12.2625 10.1432C12.1888 11.2765 11.2724 12.1888 10.1473 12.2584Z"
                            fill="#DCDFE5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_16_154">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center mb-4 mt-6">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-[#B0B7C3]"
                >
                  Remember
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:bg-[#377DFF] focus:bg-[#377DFF] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#377DFF]"
              >
                Sign In
              </button>
            </form>
            <p className="text-center mt-3 text-[#B0B7C3] text-[16px]">
              Already have an account?
              <span className="ms-2 text-[#377DFF]">
                <Link to="/registration">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
