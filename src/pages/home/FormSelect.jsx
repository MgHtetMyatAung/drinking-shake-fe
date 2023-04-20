import React from "react";

const FormSelect = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 95, 65, 99];
  return (
    <div className="border-[1px] border-gray-500 rounded-lg">
      <select name="" id="" className=" bg-transparent py-3 px-3 focus-visible:outline-none text-sm md:text-base">
        {data.map((num) => (
          <option key={num} value={num}>
            +{num}
          </option>
        ))}
      </select>
      <input
        type="number"
        className=" py-3 px-3 bg-transparent text-sm md:text-base md:min-w-[300px] focus-visible:outline-none"
        placeholder="789898765"
      />
    </div>
  );
};

export default FormSelect;
