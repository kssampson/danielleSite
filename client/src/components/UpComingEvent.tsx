import { useState } from "react";
import { CalendarEvent } from "../assets/assets.config";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import UpComingEventExpanded from "./UpComingEventExpanded";

type Props = {
  event: CalendarEvent;
}

const handleTickets = (url: string) => {
  window.open(url, `${url}`)
}



const UpcomingEvent = ( { event }: Props ) => {

  const [expandEventDetailClicked, setExpandEventDetailClicked] = useState<boolean>(false);

  return (
    <div className="flex flex-1 flex-col bg-slate-300 opacity-80 p-2">
      <div
      className="flex flex-col border-b-2 border-yellow-500 pb-2"
      onClick={() => setExpandEventDetailClicked(!expandEventDetailClicked)}
      >
        <div className="flex justify-between text-black text-md cursor-pointer">
          <div className="flex flex-col hover:text-yellow-600">
            <span>
              {event.date}
            </span>
            <div className="flex">
              {`${event.ensembleName}: ${event.eventName}`}
              <div className="p-1">
                {expandEventDetailClicked ? (<FaAngleUp />) : (<FaAngleDown />)}
              </div>
            </div>
          </div>
          <button className="rounded-none p-2 hover:text-yellow-600 text-gray-300" onClick={() => handleTickets(event.organizerPurchaseOptionsUrl)}>Tickets</button>
        </div>
        <span className="text-black">
          {expandEventDetailClicked && (
            <UpComingEventExpanded event={event}/>
          )}
        </span>
      </div>
      {/* <button className="rounded-none p-2" onClick={() => handleTickets(event.organizerPurchaseOptionsUrl)}>Tickets</button> */}
    </div>
  )
}

export default UpcomingEvent;