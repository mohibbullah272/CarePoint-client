import Banner from "../Banner";
import FAQAccordion from "../FaqSection";
import Feedback from "../Feedback";

import OurGoal from "../OurGoal";
import PopularCamp from "../PopularCamp";
import TopCamp from "../TopCamp";
import UpcomingEvents from "../UpcomingEvents";
import OurSuccess from "./OurSuccess";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <PopularCamp></PopularCamp>
        <TopCamp></TopCamp>
      
        <UpcomingEvents></UpcomingEvents>
        <OurSuccess></OurSuccess>
        <OurGoal></OurGoal>
        <Feedback></Feedback>
        <FAQAccordion></FAQAccordion>
        </div>
    );
};

export default Home;