import React from "react";
import Navbar from "./ui/shared/navbar";
import Footer from "./ui/shared/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col text-center items-center">
        <div className="flex flex-col gap-5 my-10">
          <h1 className="text-5xl font-bold">
            Connecting Talents  &<br />
            <span className="text-[#6A38C2]">
              {" "}
              Empowering Careers.
            </span>
          </h1>
          <p>
            success comes from embracing every challenge, learning constantly,
            and fly high
          </p>
        </div>
        <div className="w-[70%]">
          <h1 className="text-left font-bold text-3xl my-4">About Us</h1>
          <h1 className="text-left font-bold text-xl mb-2">
            Welcome to Pixel<span className="text-[#6A38C2]"> Blue!</span>
          </h1>
          <p className="text-left text-gray-700">
            Founded in 2024, Pixel Blue is more than just a job portal—it's a
            dynamic platform that redefines the way talent and opportunities
            come together. Our mission is to bridge the gap between skilled
            professionals and forward-thinking companies across a wide range of
            industries. Whether you’re a job seeker searching for the perfect
            role to elevate your career or an employer in need of outstanding
            talent to drive your business forward, Pixel Blue is designed to
            meet those needs with ease and efficiency. We’re committed to
            creating a seamless experience that fosters connections,
            opportunities, and growth for everyone involved.
          </p>
        </div>
        <div className="w-[70%] my-6">
          <h1 className="text-left font-bold text-xl mb-2">Our Mission</h1>
          <p className="text-left text-gray-700">
            At Pixel Blue, our mission is straightforward yet impactful: to
            completely transform the hiring experience for both job seekers and
            employers. We do this by offering an intuitive, user-friendly
            platform that simplifies the job search and recruitment process. For
            job seekers, we are committed to empowering individuals by helping
            them find roles that not only align with their skills and
            qualifications but also resonate with their passions and long-term
            career goals.
          </p>
        </div>
        <div className="w-[70%] my-6">
          <h1 className="text-left font-bold text-xl mb-2">
            Our Vision for the Future
          </h1>
          <p className="text-left text-gray-700">
            As the job market continues to evolve and adapt to new trends and
            demands, so does Pixel Blue. Our vision is not just to keep pace
            with these changes, but to lead the way in innovating and redefining
            how recruitment is done. We are committed to pushing the boundaries
            of the traditional hiring process by leveraging cutting-edge
            technology and data-driven insights that enhance the experience for
            both employers and job seekers.
          </p>
        </div>
        <div className="w-[70%] my-6">
          <p className="text-left font-bold">
            Whether you're searching for your next career move or building a
            team of talented professionals, Pixel Blue is here to guide you
            every step of the way. Together, let’s shape the future of work.
          </p>
        </div>
        <div>
          <h1 className="text-center font-bold text-xl my-6">
            Thanks for<span className="text-[#6A38C2]"> Visiting!!</span>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
