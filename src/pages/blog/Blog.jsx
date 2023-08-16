import React from 'react';
import Blog1 from "../../assets/new-1.png";
const Blog = () => {
  const arr =Array(12).fill('');
  return (
    <div className=' container mx-auto'>
       
      <h3 className=' my-10 p-head'>About Energy Blog</h3>
        
        <div className=" my-10 grid  md:grid-cols-2 lg:grid-cols-4 gap-5">
             {
              arr?.map((index,a) =>{
                return(
                  <div className="bg-gray-50 shadow-md rounded-md " key={a}>
                  <img src={Blog1} alt=""  className=' rounded-md'/>
                  <div className=" px-5 py-3">
                    <h2 className=' text-xl font-medium my-3' >Asia Energy Drink </h2>
                    <p className=' text-md text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam natus dolorem saepe eius ad fuga quod cupiditate. Distinctio, possimus?</p>
                  </div>
                 </div>
                )
              })
             }
          

        </div>
    </div>
  )
}

export default Blog
