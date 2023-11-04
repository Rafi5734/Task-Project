import { useState } from "react";
import { useGetUserListQuery } from "../../../apiSlice/userApiSlice/UserApiSlice";

const AllUsers = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const { data: userListData, isLoading } = useGetUserListQuery({
    currentPage,
    itemsPerPage,
  });

  const totalPages = Array.from(
    { length: userListData?.total_pages },
    (_, index) => index + 1
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-7 relative shadow-md sm:rounded-lg overflow-x-scroll">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #ID
            </th>
            <th scope="col" className="px-6 py-3">
              User
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {userListData?.data?.map((tData, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-[14px] text-[#4E5D78] font-[600]"
                >
                  {isLoading ? <p>Loading</p> : <>{++index}</>}
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      className="rounded-xl w-[50px]"
                      src={tData?.avatar}
                      alt="user_img"
                    />
                    <p className="ms-5 me-8 text-[14px] text-[#4E5D78] font-[600]">
                      {tData?.first_name + " "}
                      {tData?.last_name}
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-[14px] text-[#4E5D78] font-[600]">
                  {tData?.email}
                </td>
                <td className="px-6 py-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M2.40002 14.4C3.72551 14.4 4.80003 13.3255 4.80003 12C4.80003 10.6745 3.72551 9.59998 2.40002 9.59998C1.07452 9.59998 0 10.6745 0 12C0 13.3255 1.07452 14.4 2.40002 14.4Z"
                        fill="#B0B7C3"
                      />
                      <path
                        d="M12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.59998 12 9.59998C10.6745 9.59998 9.59998 10.6745 9.59998 12C9.59998 13.3255 10.6745 14.4 12 14.4Z"
                        fill="#B0B7C3"
                      />
                      <path
                        d="M21.6 14.4C22.9255 14.4 24 13.3255 24 12C24 10.6745 22.9255 9.59998 21.6 9.59998C20.2745 9.59998 19.2 10.6745 19.2 12C19.2 13.3255 20.2745 14.4 21.6 14.4Z"
                        fill="#B0B7C3"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="flex justify-center items-center  space-x-px h-10 text-base">
          {totalPages?.map((page, index) => (
            <li key={index} className="p-3">
              <a
                onClick={() => paginate(index)}
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {++index}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AllUsers;
