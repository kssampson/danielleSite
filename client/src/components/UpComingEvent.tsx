import { useState } from "react";
import { CalendarEvent } from "../assets/assets.config";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  event: CalendarEvent;
}

const handleTickets = (url: string) => {
  window.open(url, `${url}`)
}



const UpcomingEvent = ( { event }: Props ) => {

  const [expandEventDetailClicked, setExpandEventDetailClicked] = useState<boolean>(false);

  return (
    <div className="flex flex-1 bg-slate-300 opacity-80 p-2 justify-between">
      <div
      className="flex flex-col border-b-2 border-yellow-500 pb-2"
      onClick={() => setExpandEventDetailClicked(!expandEventDetailClicked)}
      >
        <span className="text-black text-md">
          {event.date}
        </span>
        <span className="text-black">
          <div className="flex">
            {`${event.ensembleName}: ${event.eventName}`}
            <div className="p-1">
              <FaAngleDown />
            </div>
          </div>
          {expandEventDetailClicked && (
            <>
            <div className="flex flex-col pt-2 pr-2">
              <span className="text-black">
                {` Come join us at ${event.locationDetails.locationName}! `}
                {event.eventDescription}
              </span>
              <span className="pt-2 pr-2">
              {` ${event.locationDetails.address} ${event.locationDetails.city}, ${event.locationDetails.state} ${event.locationDetails.zip}, ${event.locationDetails.country}`}
              </span>
            </div>
            </>
          )}
        </span>
      </div>
      {}
      <button className="rounded-none p-2" onClick={() => handleTickets(event.organizerPurchaseOptionsUrl)}>Tickets</button>
    </div>
  )
}

export default UpcomingEvent;