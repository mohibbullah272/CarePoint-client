import Banner from "../Banner";
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

        </div>
    );
};

export default Home;