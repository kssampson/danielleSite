import { CalendarEvent, InfoBlockSecondSection } from "../assets/assets.config";
import HomeBio from "./HomeBio";
import UpcomingEvent from "./UpComingEvent";

type Props = {
  infoBlockFirstSection:  {heading: string, body: string };
  infoBlockSecondSection: InfoBlockSecondSection;
  calendarUpcoming: CalendarEvent[];
}

const InfoBlock = ( { infoBlockFirstSection, infoBlockSecondSection, calendarUpcoming }: Props ) => {

  return (
    <div className="flex flex-col lg:w-1/2 sm:w-2/3 h-full">
      <div className="flex flex-1 flex-col bg-black opacity-80 p-4">
        <span className="fluid-text-medium-heading text-yellow-600 font-bold py-2">
          {infoBlockFirstSection.heading}
        </span>
        <span className="mt-2 mb-2 overflow-y-auto max-h-80">
          {calendarUpcoming.map((event) => {
            return (
              <div>
                <UpcomingEvent event={event}/>
              </div>
            )
          })}
        </span>
        <div className="flex justify-center py-2">
          <button className="flex justify-center rounded-none p-2 lg:p-2 bg-slate-300 text-black hover:text-yellow-600">View All</button>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-slate-300 opacity-80 p-4 ">
        <span className="fluid-text-medium-heading text-yellow-600 font-bold">
          {infoBlockSecondSection.heading}
        </span>
        <HomeBio infoBlockSecondSection={infoBlockSecondSection}/>
        <div className="flex justify-center py-4">
          <button className="flex justify-center rounded-none p-2 lg:p-2 bg-black text-slate-300 hover:text-yellow-600">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default InfoBlock;