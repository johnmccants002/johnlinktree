import { FaDiscord, FaDollarSign } from "react-icons/fa";
import { items } from "../../data/data";

export default function PayMe() {
  return (
    <>
      <div className="h-16 w-full flex items text-xl font-semibold gap-2">
        <a
          href={items.cashapp.url}
          target="_blank"
          className="group text-4xl w-full bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
          rel="noreferrer"
        >
          <div className="md:group-hover:scale-[110%] transition-transform duration-500">
            <FaDollarSign />
          </div>
        </a>
        <a
          href={items.discord.url}
          target="_blank"
          className="group text-4xl w-full bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors duration-300"
          rel="noreferrer"
        >
          <div className="md:group-hover:scale-[110%] transition-transform duration-500">
            <FaDiscord />
          </div>
        </a>
      </div>
    </>
  );
}
