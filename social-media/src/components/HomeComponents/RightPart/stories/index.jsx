import { StoriesData } from "./storiesData";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Stories() {
  return (
    <>
      <div>
        <h4 className=" font-GilroyBold text-lg text-black">Stories</h4>
      </div>
      <div className="w-[250px] h-[250px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {StoriesData.map((data, item) => (
            <>
              <SwiperSlide>
                <div
                  style={{
                    background: `url(${data.bgPicture})`,
                  }}
                  className="w-full h-[250px] rounded-sm bg-cover bg-no-repeat bg-center"
                >
                  <div className=" w-8 h-8 border-2 border-[#2d5eff] rounded-full overflow-hidden object-cover mt-2">
                    <img src={data.picture} alt="picture" />
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
          ...
        </Swiper>
      </div>
      {/* <div className=" flex items-center justify-between gap-x-4">
        {StoriesData.slice(0, 3).map((data, item) => (
          <>
            <div
              style={{
                background: `url(${data.bgPicture})`,
              }}
              className="w-[33%] h-[200px] bg-cover bg-no-repeat bg-center"
            >
              <div className=" w-8 h-8 border-2 border-[#2d5eff] rounded-full overflow-hidden object-cover mt-2">
                <img src={data.picture} alt="picture" />
              </div>
            </div>
          </>
        ))}
      </div> */}
    </>
  );
}
