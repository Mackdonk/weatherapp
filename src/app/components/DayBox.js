import { IconUmbrellaFilled } from "@tabler/icons-react"; // import the icon

export default function DayBox({ dayCount }) {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  const currentDay = new Date();
  const newDay = new Date(currentDay);
  newDay.setDate(currentDay.getDate() + dayCount + 1);

  const adjustedIndex = newDay.getDay() % 7;
  const todayAbbreviation = days[adjustedIndex];

  return (
    <div className="border-2 border-white rounded-md p-3">
      {todayAbbreviation}
      <IconUmbrellaFilled size={60} />
      <div>rain</div>
      <div className="flex justify-between">
        <div>4C - 7C</div>
      </div>
    </div>
  );
}
