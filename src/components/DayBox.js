import { IconUmbrellaFilled } from "@tabler/icons-react"; // import the icon

export default function DayBox({ day }) {
  return (
    <div className="border-2 border-white rounded-md p-3">
      {day.date}
      <IconUmbrellaFilled size={60} />
      <div>rain</div>
      <div className="flex justify-between">
        <div>
          {day.day.mintemp_c}C - {day.day.maxtemp_c}C
        </div>
      </div>
    </div>
  );
}
