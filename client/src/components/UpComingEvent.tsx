import { CalendarEvent } from "../assets/assets.config";

type Props = {
  event: CalendarEvent;
}

const UpcomingEvent = ( { event }: Props ) => {
  return (
    <div className="flex flex-1 bg-slate-300 opacity-80 p-2 justify-between">
      <div className="flex flex-col">
        <span className="text-black text-md">
          {event.date}
        </span>
        <span className="text-black">
          <div className="flex">
            {`${event.ensembleName}: ${event.eventName}`}
          </div>
        </span>
      </div>
      {}
      <button className="p-2">Tickets</button>
    </div>
  )
}

export default UpcomingEvent;