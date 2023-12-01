import { useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";


const sliderItem = [
  {
    image:
      "https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/special-offer-black-friday-banner-template_488814-112.jpg",
  },
  {
    image: "https://i.ytimg.com/vi/f64GdOxJjPE/maxresdefault.jpg",
  },
  {
    image:
      "https://www.shutterstock.com/image-vector/sunscreen-product-banner-ads-on-260nw-1509241181.jpg",
  },
];

export default function HomeSlider() {
  const [sliderImage, setSliderImage] = useState<number>(1);

  function PrevImage() {
    const currentIndex: boolean = sliderImage === 0;
    const newIndex: number = currentIndex
      ? sliderItem.length - 1
      : sliderImage - 1;
    setSliderImage(newIndex);
  }
  function NextImage() {
    const currentIndex: boolean = sliderImage === sliderItem.length - 1;
    const newIndex: number = currentIndex ? 0 : sliderImage + 1;
    setSliderImage(newIndex);
  }
  setInterval(()=>{
    if(sliderImage===sliderItem.length-1){
      setSliderImage(0)
      return
    }
    setSliderImage(sliderImage+1)
  },5000)
  function changeSlide(index:number){
    setSliderImage(index)
  }

  return (
    <div className="w-screen h-[30rem] bg-transparent flex justify-center items-center">
      <div className="w-[90%] h-[90%] max-w-[1500px] rounded-lg group relative">
        <img
          className="w-full h-full object-cover rounded-lg "
          src={sliderItem[sliderImage].image}
          alt="slider"
        />
        <div className="hidden absolute group-hover:flex w-full items-center justify-between px-5 top-1/2 -translate-y-1/2">
          <button onClick={PrevImage}  className="text-white opacity-50">
            <FaChevronCircleLeft size={30} />
          </button>
          <button onClick={NextImage} className="text-white opacity-50">
            <FaChevronCircleRight size={30} />
          </button>
        </div>
        <div className="group-hover:flex absolute hidden w-full justify-center mt-[-20px] gap-1">
          {
            sliderItem.map((item, index)=>(
              <div className="w-2 h-2  rounded-full bg-white cursor-pointer" key={index} onClick={()=>changeSlide(index)}>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}