import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Server error or network issue.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch data.');
    }
  };

  // ----- remove food item functionality -------
    const removeFoodItem = async foodId => {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId,
      });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message)
      } else {
        toast.error('Error to remove food item')
      }
    };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full antialiased text-gray-800">
      {/* ------ Header Section ------- */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-600 tracking-tight">
            All Food List
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
            Manage your restaurant food items
          </p>
        </div>
        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
          Total: {list.length}
        </span>
      </div>

      {/* ------ Table Container ------ */}
      <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden">
        <div className="grid grid-cols-[1fr_2fr_1.5fr_1fr_1fr] bg-gray-50/70 text-gray-500 font-semibold p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200 items-center">
          <p className="text-left sm:pl-4">Image</p>
          <p className="text-center">Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {/* ---------- Food Items List ----------- */}
        <div className="divide-y divide-gray-100">
          {list.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <i className="fa-solid fa-box-open text-3xl mb-2 block text-gray-300"></i>
              <p className="text-sm font-medium">No items available</p>
            </div>
          ) : (
            list.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1.3fr_2fr_1.5fr_1fr_1fr] items-center py-3 sm:p-4 text-center hover:bg-gray-50/50 transition-colors text-xs sm:text-sm md:text-base gap-1 sm:gap-4"
              >
                {/* --- Image --- */}
                <div className="flex justify-start items-center pl-2 sm:pl-4">
                  <img
                    src={`${url}/images/${item.image}`}
                    alt={item.name}
                    className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
                  />
                </div>

                {/* --- Name --- */}
                <p className="font-medium text-gray-600 text-center truncate">
                  {item.name}
                </p>

                {/* --- Category --- */}
                <div className="flex justify-center items-center">
                  <span className="bg-gray-100 text-gray-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium truncate">
                    {item.category}
                  </span>
                </div>

                {/* --- Price --- */}
                <p className="text-emerald-600 font-bold sm:font-semibold">
                  ${item.price}
                </p>

                {/* --- Action Button --- */}
                <div className="flex justify-center items-center">
                  <button onClick={()=>removeFoodItem(item._id)} className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1.5 sm:p-2 rounded-lg transition-all duration-150 cursor-pointer border border-transparent hover:border-red-100 active:scale-95">
                    <i className="fa-solid fa-xmark text-sm sm:text-lg"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
