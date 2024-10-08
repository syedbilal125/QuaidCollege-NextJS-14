import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import UpcomingEventsCards from "./UpcomingEventsCardsShowCase";


export default function Events() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center flex-col items-center">
          <h2 className="flex items-center md:text-center text-[20px] text-[#ff6941] gap-2 ml-4 md:ml-0">
            <LuGraduationCap />
            <span className="font-semibold">Our Events</span>
          </h2>
          <h2 className="text-5xl font-semibold pt-2">Upcoming Events</h2>
        </div>
        <div className="flex justify-center items-center lg:block">
          <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
            <UpcomingEventsCards
              img={
                "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg"
              }
              eventPlace={"114-A Wahdat Rd, Block A Muslim Town, Lahore"}
              data={"20 March, 2023"}
              EventTitle={"Basic UI & UX Design for new development"}
              description={
                "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically"
              }
            />
            <UpcomingEventsCards
              img={
                "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg"
              }
              eventPlace={"114-A Wahdat Rd, Block A Muslim Town, Lahore"}
              data={"20 March, 2023"}
              EventTitle={"Digital Education Market Briefing: Minnesota 2023"}
              description={
                "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically"
              }
            />
            <UpcomingEventsCards
              img={
                "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg"
              }
              eventPlace={"114-A Wahdat Rd, Block A Muslim Town, Lahore"}
              data={"20 March, 2023"}
              EventTitle={"Learning Network Webinars for Music Teachers"}
              description={
                "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically"
              }
            />
            <UpcomingEventsCards
              img={
                "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg"
              }
              eventPlace={"114-A Wahdat Rd, Block A Muslim Town, Lahore"}
              data={"20 March, 2023"}
              EventTitle={"Next-Gen Higher Education Students Have Arrived?"}
              description={
                "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically"
              }
            />
            <UpcomingEventsCards
              img={
                "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg"
              }
              eventPlace={"114-A Wahdat Rd, Block A Muslim Town, Lahore"}
              data={"20 March, 2023"}
              EventTitle={"Digital Art & 3D Model – a future for film company"}
              description={
                "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically"
              }
            />
            <UpcomingEventsCards
              img={
                "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg"
              }
              eventPlace={"114-A Wahdat Rd, Block A Muslim Town, Lahore"}
              data={"20 March, 2023"}
              EventTitle={"Conscious Discipline Summer Institute"}
              description={
                "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
