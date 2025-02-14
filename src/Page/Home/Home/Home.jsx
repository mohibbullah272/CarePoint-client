import Banner from "../Banner";
import FAQAccordion from "../FaqSection";
import Feedback from "../Feedback";
import PopularCamp from "../PopularCamp";
import TopCamp from "../TopCamp";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <PopularCamp></PopularCamp>
        <TopCamp></TopCamp>
        <Feedback></Feedback>
        <FAQAccordion></FAQAccordion>
        </div>
    );
};

export default Home;