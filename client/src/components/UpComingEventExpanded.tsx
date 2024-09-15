import { CalendarEvent } from "../assets/assets.config";

type Props = {
  event: CalendarEvent;
}

const UpComingEventExpanded = ( { event }: Props ) => {
  return (
    <div className="flex flex-col pt-2 pr-2">
      <span className="text-black">
        {` Come join us at ${event.locationDetails.locationName}! `}
        {event.eventDescription}
      </span>
      <a className="pt-2 pr-2 text-gray-800 hover:text-yellow-600 cursor-pointer">
      {` ${event.locationDetails.address} ${event.locationDetails.city}, ${event.locationDetails.state} ${event.locationDetails.zip}, ${event.locationDetails.country}`}
      </a>
    </div>
  )
};

export default UpComingEventExpanded;