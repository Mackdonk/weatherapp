import Image from "next/image";
import { IconUmbrellaFilled } from "@tabler/icons-react"; // import the icon
import DayBox from "./components/DayBox";
import HourBox from "./components/HourBox";
export default function Home() {
  const hours = ["1", "2", "3", "4", "5", "6"];

  return (
    <>
      <div className="flex justify-center gap-5 p-20 font-semibold">
        <div className="bg-[#2973B2] text-white text-4xl w-[400px] h-[400px] rounded-xl bg-opacity-70 pt-20">
          <div className="px-10 text-start">Victoria</div>
          <div className="flex  justify-around items-center pt-20">
            <div className="p-3">2C</div>
            <div>Rain</div>
          </div>
        </div>

        <div className="bg-[#2973B2] text-white text-4xl w-[400px] h-[400px] rounded-xl bg-opacity-70">
          <div className="flex justify-center">
            <IconUmbrellaFilled
              className="text-black text-opacity-90"
              size={250}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="p-3">getFormattedCurrentTime</div>
            <div>blank2</div>
          </div>
        </div>
      </div>

      <div className="text-white text-4xl flex justify-start bg-[#2973B2] rounded-xl bg-opacity-70 m-3 p-3">
        <div>Today's forcast</div>
      </div>

      <div className=" bg-[#2973B2] text-white text-4xl rounded-xl bg-opacity-70 grid grid-cols-6 text-center m-3">
        {hours.map((item, index) => (
          <HourBox key={index} hour={item} />
        ))}
      </div>

      <div className=" text-white text-4xl flex justify-start bg-[#2973B2] rounded-xl bg-opacity-70 m-3 p-3">
        <div>Weekly Forcast</div>
      </div>

      <div className="bg-[#2973B2] text-white text-2xl rounded-xl bg-opacity-70 grid grid-cols-7 text-center m-3">
        {[...Array(7)].map((_, index) => (
          <DayBox key={index} dayCount={index} />
        ))}
      </div>

      <div className="mx-auto text-center">
        <div className="inline-flex justify-center mt-80 gap-2 bg-black/80 py-2 px-5 rounded-lg shadow hover:scale-110 transition-all">
          <a
            href="https://www.youtube.com/watch?v=sUKptmUVIBM&t"
            className="hover:scale-300 transition text-3xl font-semibold tracking-widest 
          bg-gradient-to-r from-blue-600 to-blue-200 text-transparent bg-clip-text"
          >
            Click for Jerkmate 1v1
          </a>
        </div>
      </div>
    </>
  );
}
