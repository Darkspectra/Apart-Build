import about from "../../../assets/home/about.jpg"

const AboutPage = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <img src={about} alt="" />
                </div>
                <div className="ml-8 mt-36">
                    <h2 className="text-3xl font-bold mb-9">Apart Building</h2>
                    <p className='text-2xl'>
                    Renting is a common arrangement for apartment dwellers, providing a flexible housing option without the long-term commitment of homeownership. However, some individuals and families choose to buy apartments, particularly in condominiums, where residents may have ownership of their individual units while sharing ownership of common areas and facilities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;