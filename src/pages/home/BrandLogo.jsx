import React from 'react'
import Colcaloa from "../../assets/cocacola.svg";
import Redbul  from "../../assets/redbul.svg";
import Shark from "../../assets/Shark.svg";
import Sunkist from "../../assets/Sunkist.png";
import Fire from "../../assets/fire.svg";
import Burn from "../../assets/Burn.svg";
const brands =[
  {
    id:"cocaloa",
    brandsImg:Colcaloa,
  },
  {
    id:"redbul",
    brandsImg:Redbul,
  },
  {
    id:"shark",
    brandsImg:Shark,
  },
  {
    id:"sunkist",
    brandsImg:Sunkist
  },
  {
    id:"fire",
    brandsImg:Fire
  },
  {
    id:"burn",
    brandsImg:Burn
  },

]
const BrandLogo = () => {
  return (
    <div className=' container mx-auto  md:py-10'>
      <h3 className="p-head mb-12">Partener Brands </h3>
     {/* Brands logo img */}
      <div className=" grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3  items-center ">
        {
          brands?.map((logo) =>{
            return(
              <img src={logo.brandsImg} alt={logo.id} key={logo.id} className=' w-20 md:w-28 mx-auto' />
            )
          })
        }
      </div>
    </div>
  )
}

export default BrandLogo;
