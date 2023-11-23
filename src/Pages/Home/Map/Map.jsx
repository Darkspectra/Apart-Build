import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import mp from "../../../assets/home/mp.png"

const Map = () => {
    return (
        <div className="mb-20">
            <SectionTitle heading="Our Location" subHeading={"Locate Us"}></SectionTitle>
            <div className="flex items-center mx-auto gap-10">
                <div>
                    <p className="text-4xl font-bold">Do not Miss you chance! <br />Grab Discount now using <br /> <span className="text-lime-500 text-5xl">NSINS</span> promo code!</p>
                </div>
                <div>
                    <img src={mp} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Map;