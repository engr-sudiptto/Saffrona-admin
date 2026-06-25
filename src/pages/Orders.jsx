import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error('Failed to load orders');
      }
    } catch (error) {
      toast.error('Error fetching data');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  return (
    <div className="min-h-screen md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* ------ Page Title -------- */}
        <h1 className="text-2xl font-light text-gray-500 mb-8 border-b border-gray-300 pb-4">
          Order Management Page
        </h1>

        {/* ------ orders list container ------- */}
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr_auto_auto] gap-6 items-start text-sm text-gray-600"
            >
              {/* ----- icon ------ */}
              <div className="bg-orange-100 text-orange-600 p-4 rounded-lg flex items-center justify-center w-14 h-14 mx-auto md:mx-0">
                <i className="fa-solid fa-people-carry-box text-2xl"></i>
              </div>

              {/* ----- items detail ------ */}
              <div>
                <p className="font-semibold text-gray-500 mb-2">Items Detail</p>
                <p className="text-gray-400 leading-relaxed">
                  {order.items.map((item, i) => {
                    // Fix: Corrected misspelled 'lenght' to 'length'
                    if (i === order.items.length - 1) {
                      return `${item.name} x ${item.quantity}`;
                    } else {
                      return `${item.name} x ${item.quantity}, `;
                    }
                  })}
                </p>
                <p className="mt-3 font-medium text-gray-400">
                  Total Items:
                  <span className="font-bold text-gray-400 ml-1">
                    {order.items.length}
                  </span>
                </p>
              </div>

              {/* ------- address details ------- */}
              <div>
                <p className="font-semibold text-gray-500 mb-1">
                  Customer info
                </p>
                <p className="font-medium text-gray-500 mb-2">
                  {order.address.firstName + ' ' + order.address.lastName}
                </p>
                <div className="text-xs text-gray-400 space-y-0.5">
                  <p>{order.address.street},</p>
                  <p>
                    {`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`}
                  </p>
                  <p className="mt-2 text-gray-500 font-medium">
                    {order.address.phone}
                  </p>
                </div>
              </div>

              {/* ----- price ------ */}
              <div className="md:text-center">
                <p className="font-semibold text-gray-500 md:mb-2">
                  Total Amount
                </p>
                <p className="text-xl font-bold text-green-600">
                  ${order.amount}
                </p>
              </div>

              {/* ---------- status option ---------- */}
              <div className="w-full md:w-auto">
                <p className="font-semibold text-gray-800 mb-2 md:hidden">
                  Status
                </p>
                <select className="w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg cursor-pointer text-xs">
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out of delivery">Out of delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
