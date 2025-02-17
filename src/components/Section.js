"use client";

import Image from "next/image";
import { IconUmbrellaFilled } from "@tabler/icons-react"; // import the icon
import { useEffect, useState } from "react";
import HourBox from "./HourBox";
import DayBox from "./DayBox";

export default function Section() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState();

  const hours = ["1", "2", "3", "4", "5", "6"];

  async function getData() {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=4a0965f212e0485d8a903740251702&q=${searchText}&days=7&aqi=no`;
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <input
        type="text"
        name="City"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit" onClick={() => getData()}>
        Search
      </button>

      <div className="flex justify-end">
        <div>Weather App V.1 Mackdonk</div>
      </div>

      {data && (
        <>
          <div className="flex justify-center gap-5 p-20 font-semibold">
            <div className="bg-[#2973B2] text-white text-4xl w-[400px] h-[400px] rounded-xl bg-opacity-70 pt-20">
              <div className="px-10 text-start">{data.location.name}</div>
              <div className="flex  justify-around items-center pt-20">
                <div className="px-5">{data.current.temp_c + " °C"}</div>
                <div>{data.current.condition.text}</div>
              </div>
              <div className="px-5">
                {new Date(data.location.localtime).toLocaleTimeString("en-US", {
                  timeStyle: "short",
                })}
              </div>
            </div>

            <div className="bg-[#2973B2] text-white text-4xl w-[400px] h-[400px] rounded-xl bg-opacity-70">
              <div className="flex justify-center items-center h-[350px]">
                <Image
                  src={"https:" + data.current.condition.icon}
                  alt="weather-icon"
                  className="text-black text-opacity-90"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>

          <div className="text-white text-4xl flex justify-start bg-[#2973B2] rounded-xl bg-opacity-70 m-3 p-3">
            <div>Today's Forecast</div>
          </div>

          <div className=" bg-[#2973B2] text-white text-4xl rounded-xl bg-opacity-70 grid grid-cols-6 text-center m-3">
            {hours.map((item, index) => (
              <HourBox key={index} hour={item} />
            ))}
          </div>

          <div className=" text-white text-4xl flex justify-start bg-[#2973B2] rounded-xl bg-opacity-70 m-3 p-3">
            <div>Weekly Forecast</div>
          </div>

          <div className="bg-[#2973B2] text-white text-2xl rounded-xl bg-opacity-70 grid grid-cols-7 text-center m-3">
            {data.forecast.forecastday.map((day, index) => (
              <DayBox key={index} day={day} />
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
      )}
    </>
  );
}
