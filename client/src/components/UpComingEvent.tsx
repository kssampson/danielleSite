import { CalendarEvent } from "../assets/assets.config";

type Props = {
  event: CalendarEvent;
}


const handleTickets = (url: string) => {
  window.open(url, `${url}`)
}

const UpcomingEvent = ( { event }: Props ) => {
  return (
    <div className="flex flex-1 bg-slate-300 opacity-80 p-2 justify-between">
      <div className="flex flex-col border-b-2 border-yellow-500 pb-2">
        <span className="text-black text-md ">
          {event.date}
        </span>
        <span className="text-black">
          <div className="flex">
            {`${event.ensembleName}: ${event.eventName}`}
          </div>
        </span>
      </div>
      {}
      <button className="rounded-none p-2" onClick={() => handleTickets(event.organizerPurchaseOptionsUrl)}>Tickets</button>
    </div>
  )
}

export default UpcomingEvent;