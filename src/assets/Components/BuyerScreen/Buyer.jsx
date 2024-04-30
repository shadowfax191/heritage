
import BuyerBanner from "./BuyerBanner";
import Properties from "./Properties";
import Section from "./Section";
import Testimonials from "./Testimonials";


const Buyer = () => {
    window.scrollTo(0, 0)
    return (
        <div>
            <BuyerBanner></BuyerBanner>
            <Section></Section>
            <Properties></Properties>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Buyer;