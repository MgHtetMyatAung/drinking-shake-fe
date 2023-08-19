import React from 'react'

const OrderCheckout = () => {
  return (
    <div className=" bg-violet-200/10 shadow-md rounded-md  p-3">
              <table className="  w-full ">
                <thead className=" ">
                  <tr className="  border-b flex justify-between items-center ">
                  <th scope="col" className="px-6 py-3">Products</th>
                  <th scope="col" className="px-6 py-3  ">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" flex justify-between items-center ">
                    <td scope="row" className="px-6 py-3 ">Hey what 's up</td>
                    <td scope="row" className="px-6 py-3 ">$12</td>
                  </tr>
                  <tr className=" flex justify-between items-center ">
                    <td scope="row" className="px-6 py-3 ">Hey what 's up</td>
                    <td scope="row" className="px-6 py-3 ">$12</td>
                  </tr>
                  <tr className=" flex justify-between items-center ">
                    <td scope="row" className="px-6 py-3 ">Hey what 's up</td>
                    <td scope="row" className="px-6 py-3 ">$12</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className=" flex justify-between items-center border-t">
                    <th className=" font-medium px-6  py-3">Total</th>
                    <th className=" font-medium px-3  py-3  text-rose-500">$124</th>
                  </tr>
                </tfoot>
              </table>
            </div>
  )
}

export default OrderCheckout
