
import { Link } from 'react-router-dom';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/05.png';
import './About.css';


const About = () => {
    return (
        <div className="about-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="About More Information" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get appointed?</p>
                    <p>An apartment is a self-contained living space that is part of a larger building or complex. It is a popular housing option in urban areas, offering a convenient and often more affordable alternative to traditional houses. Apartments come in various sizes and styles, ranging from small studios to spacious penthouses.</p>
                    <Link to="/about" className="btn border-0 border-b-4 mt-4">About Building</Link>
                </div>
            </div>
        </div>
    );
};

export default About;