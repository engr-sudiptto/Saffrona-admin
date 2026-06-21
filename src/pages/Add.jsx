import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Add = () => {
  const navigate = useNavigate()
  const url = 'http://localhost:4000'
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category:"Salad"
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data, [name]:value}))
  }

  // ---- form on submit handle ------
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append("image", image)

    const response = await axios.post(`${url}/api/food/add`, formData)

    if (response.data.success) {
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Salad',
      });
      setImage(false)
      toast.success(response.data.message)
      navigate('/list')
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className="w-full p-4 md:p-10 rounded-xl border-gray-100 mx-auto max-w-250 md:bg-white md:rounded-xl md:shadow-sm md:border-gray-100 border-0 m-4">
      {/* ---- heading -----  */}
      <h2 className="text-xl font-semibold text-gray-600 mb-6">
        Add New Food Item
      </h2>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
        {/* --- Image Upload -----  */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">
            Upload Image
          </label>
          {image ? (
            <div className="w-40 h-30 overflow-hidden relative group rounded-lg">
              <img
                className="object-cover w-full h-full"
                src={URL.createObjectURL(image)}
                alt="Product image"
              />
              <button
                type="button"
                onClick={() => setImage(false)}
                className="absolute top-1 right-1 bg-amber-500 text-white rounded-full text-xs w-5 h-5 font-black cursor-pointer"
              >
                ✕
              </button>
            </div>
          ) : (
            <div className="relative group flex flex-col items-center justify-center w-40 h-30 border-2 border-dashed border-gray-300 hover:border-amber-500 bg-gray-50 hover:bg-amber-50/30 rounded-lg cursor-pointer transition-all overflow-hidden">
                <input
                  required
                onChange={e => setImage(e.target.files[0])}
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div className="flex flex-col items-center text-gray-400 group-hover:text-amber-600 transition-colors">
                <i className="fa-solid fa-upload text-2xl mb-1"></i>
                <p className="text-xs font-medium">Upload</p>
              </div>
            </div>
          )}
        </div>

        {/* ---- Product Name -----  */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">
            Product Name
          </label>
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            required
            type="text"
            placeholder="Type here"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
          />
        </div>

        {/* ------- Description ------  */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">
            Product Description
          </label>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            required
            placeholder="Write content here"
            rows="4"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
          ></textarea>
        </div>

        {/* ---- Category & Price Grid ------  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* ---- Category -----  */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Product Category
            </label>
            <select
              name="category"
              onChange={onChangeHandler}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all cursor-pointer"
            >
              <option value="Salad">Salad</option>
              <option value="Roll">Roll</option>
              <option value="Dessert">Dessert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodle">Noodle</option>
              <option value="Pure Veg">Pure Veg</option>
            </select>
          </div>

          {/* ----- Price -----  */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              Product Price
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-sm">
                $
              </span>
              <input
                required
                name="price"
                onChange={onChangeHandler}
                value={data.price}
                type="text"
                placeholder="20"
                className="w-full pl-7 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* ---- Submit Button ---- */}
        <button
          type="submit"
          className="mt-2 w-full sm:w-32 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-medium text-sm py-2.5 px-4 rounded-lg shadow-sm hover:shadow transition-all text-center cursor-pointer"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Add;
