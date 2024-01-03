import React from "react";
import Image from "next/image";
import blackimg from "../../../public/Rectangle 1.svg";
import img1 from "../../../public/img1.jpg";
import phone from "../../../public/phone.svg";
import calendar from "../../../public/calendar_3483805 1.svg";
import firstaid from "../../../public/firstaid.svg";
import tracking from "../../../public/tracking.svg";
import luggage from "../../../public/luggage.svg";
import info from "../../../public/info.svg";
import gift from "../../../public/gift.svg";

import promotion from "../../../public/promotion.svg";
import locations from "../../../public/locations.svg";
import badge from "../../../public/badge.svg";
import perform from "../../../public/perform.svg";
import pin from "../../../public/pin.svg";
import commit from "../../../public/commit.svg";
import rs from "../../../public/rs.png";
import mobile from "../../../public/mobile.svg";
import tick from "../../../public/tick.svg";
import software from "../../../public/software.svg";
import code from "../../../public/code.svg";
import cloud from "../../../public/cloud.svg";
import marketing from "../../../public/marketing.svg";
import seo from "../../../public/seo.svg";
import arrow from "../../../public/arrow.svg";
import user from "../../../public/user.png";
import user1 from "../../../public/user1.png";
import user2 from "../../../public/user2.png";
import user3 from "../../../public/user3.png";
import user4 from "../../../public/user4.png";
import { Badge } from "@mui/material";

const page = () => {
  return (
  
    <div className="w-11/22 m-2 ">
      {/* navbar */}
      <nav className="flex justify-between px-20 py-10 font-bold">
        <div>
          <Image src={blackimg} />
        </div>
        <div id="nav" className="   w-10/12 flex justify-between items-center rounded-full  px-6">
          <div className="bg-slate-100 p-2 rounded-full shadow-lg px-4">Home</div>
          <div>About us</div>

          <div>Work</div>
          <div>Services</div>
          <div>Clients</div>
          <div>Team</div>
          <div>Contact us</div>
        </div>
      </nav>


      {/* <div className="" id="body">
        {/* section 1 */}
      <section1>
        <div id="secion1">

        <div className="w-full    flex px-20 py-10">
          <div className="w-8/12 rounded-tl-xl  p-10">
            <h3 className="text-blue-700 font-bold text-4xl leading-10">
              Diversifying the Designs of{" "}
            </h3>
            <h3 className="text-blue-700 font-bold text-4xl leading-10">
              Digital World
            </h3>
            <p className="font-bold text-lg leading-7 my-6">
              Explorogent International Services Private Limited (EISPL) is one
              of the most famous companies in the sector of Web and Mobile
              Development. In the market, EISPL has a strong presence in
              providing quality services to its clients. EISPL is convinced that
              one should diversify the offering, given the changing needs of the
              clients. That is why we engage in multiple projects and
              activities. We also possess knowledge in web development, app
              development, UI/UX design, as well as digital marketing.
            </p>
            <p className="font-bold text-lg leading-7  my-6">
              EISPL is convinced that one should diversify the offering, given
              the changing needs of the clients. That is why we engage in
              multiple projects and activities. We also possess knowledge in web
              development, app development, UI/UX design, as well as digital
              marketing.
            </p>
            <button className="flex items-center justify-evenly border w-[214px] h-[60px] p-6 font-bold rounded-full bg-yellow-600 text-white ">
              <Image
                className=" w-8 h-8 bg-white p-1 rounded-full"
                src={phone}
              ></Image>
              Book a call
            </button>
          </div>
          <div className="w-4/12  rounded-tr-xl  flex items-center justify-start ">
            <Image className="bg-auto w-full" src={img1} />
          </div>
        </div>

        <div className="m-auto w-11/12 text-center">
          <p className="font-bold text-lg leading-7 my-6">
            In the realm of digital solutions, we offer expertise in
          </p>
          <div className="flex justify-between text-blue-600 font-bold">
            <button className="border border-blue-600  bg-white rounded-full p-2">
              Website development
            </button>
            <button className="border-2 border-blue-600  bg-white rounded-full p-2 px-8">
              App development
            </button>
            <button className="border-2 border-blue-600  bg-white rounded-full p-2 px-8">
              UI / UX Design
            </button>
            <button className="border-2 border-blue-600  bg-white rounded-full p-2 px-8 ">
              Digital Marketing
            </button>
            <button className="border-2 border-blue-600  bg-white rounded-full p-2 px-8">
              SEO Optimization
            </button>
          </div>

          <p className="font-bold text-lg leading-7 my-6">
            showcasing our proficiency across various facets of the digital
            platform
          </p>
        </div>
        </div>
      </section1>

      {/* -------------- */}
      {/* s2completed */}
      <section>
        <h2 className=" w-full px-20  text-center font-bold text-2xl mt-20 text-yellow-600">
          Stay Ahead!
        </h2>

        <h2 className=" w-full px-20  text-center font-bold text-2xl  text-yellow-600">
          Launch Your Next Project with Stackkaroo
        </h2>
        <div className="w-full   flex px-20 py-10">
          <div className="w-6/12 rounded-tl-xl  p-10">
            <h3 className="text-blue-700 font-bold text-4xl leading-10">
              Our Story
            </h3>
            <p className="font-bold text-lg leading-7 my-6">
              Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan
              Mishra bring their extensive experience to the forefront as
              industry veterans. Our team is fueled by innovation, continually
              striving to exceed customer expectations.
            </p>
            <p className="font-bold text-lg leading-7  my-6">
              Operating from our registered office in Agartala Sadar, Tripura
              (W), our company is officially registered with the Corporate
              Identification Number (CIN). Our active status and an authorized
              share capital of Rs 10.00 lac are a source of pride.
            </p>
            <button className="flex items-center justify-evenly  w-[404px] h-[60px] p-6 font-bold rounded-full bg-yellow-600 text-white ">
              <Image className=" w-10 h-8cp-1 rounded-full" src={rs}></Image>
              Get Estimated Project Cost
            </button>
          </div>
          <div className="w-6/12  rounded-tr-xl  flex items-center justify-start ">
            <Image className="bg-auto w-full" src={mobile} />
          </div>
        </div>
      </section>

      {/* ---------------------- */}
      {/* section3 completed */}
      <section>
        <h2 className=" w-full px-20  text-center font-bold text-2xl mt-20 text-yellow-600">
          Why Choose Us?
        </h2>

        <p className=" w-full px-20 py-2 text-center font-bold text-sm ">
          {" "}
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
          <p>
            Our dedicated team ensures that the solutions provided are
            dependable and long-term
          </p>
        </p>

        <div
          className=" grid grid-rows-2 
        grid-flow-col gap-8 w-full px-20 py-10 "
        >
          <div className=" col-span-4 rounded-3xl shadow-lg border-2 border-white p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image className="m-auto" width={75} height={75} src={user} />
              <h3 className="text-blue-600 font-bold my-2">
                User-Centric Approach
              </h3>
            </div>
          </div>

          <div className=" col-span-4 rounded-3xl  shadow-lg border-2 border-white p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image className="m-auto" width={75} height={75} src={user1} />
              <h3 className="text-blue-600 font-bold my-2">
                Customer Satisfaction
              </h3>
            </div>
          </div>

          <div className=" col-span-4 rounded-3xl shadow-lg  border-2 border-white p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image className="m-auto" width={75} height={75} src={user2} />
              <h3 className="text-blue-600 font-bold my-2">
                Integrating Feedback
              </h3>
            </div>
          </div>
          <div className=" col-span-4 rounded-3xl  shadow-lg  border-2 border-white p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image className="m-auto" width={75} height={75} src={user3} />
              <h3 className="text-blue-600 font-bold my-2">
                Integrating Feedback
              </h3>
            </div>
          </div>

          <div className=" col-span-4 rounded-3xl shadow-lg  border-2 border-white p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image className="m-auto" width={75} height={75} src={user4} />
              <h3 className="text-blue-600 font-bold my-2">
                On-Time Product Delivery
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ */}

      {/*section4 completed */}
      <section>
        <h2 className=" w-full px-20  text-center font-bold text-2xl mt-20 text-yellow-600">
          Stackkaroo’s Digital Services
        </h2>

        <p className=" w-full px-20 py-2 text-center font-bold text-sm ">
          {" "}
          We excel with reliability, innovation and customer-centric approach
          for our quality products. Our dedicated team ensures that the
          solutions provided are dependable and long-term
        </p>

        <div
          className=" grid grid-rows-2 
        grid-flow-col gap-8 w-full px-20 py-10 "
        >
          <div className=" col-span-4 rounded-3xl shadow-lg border border-black p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image className="m-auto" width={75} height={75} src={software} />
              <h3 className="text-blue-600 font-bold my-2">
                Website Development
              </h3>
            </div>
            <p>
              We excel with reliability, innovation and customer-centric
              approach for our quality products. Our dedicated team ensures that
              the solutions provided are dependable and long-term
            </p>

            <Image className=" w-12" src={arrow} />
          </div>

          <div className=" col-span-4 rounded-3xl  shadow-lg border border-black p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image className="m-auto" width={75} height={75} src={code} />
              <h3 className="text-blue-600 font-bold my-2">App Development</h3>
            </div>
            <p>
              We specialize in creating superior apps for diverse sectors such
              as e-commerce, education, and transportation.
            </p>
            <Image className=" w-12" src={arrow} />
          </div>

          <div className=" col-span-4 rounded-3xl  shadow-lg border border-black p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image className="m-auto" width={75} height={75} src={cloud} />
              <h3 className="text-blue-600 font-bold my-2">
                Software Development
              </h3>
            </div>
            <p>
              We specialize in tailored solutions ensuring business growth and
              efficiency by providing superior software.
            </p>
            <Image className=" w-12" src={arrow} />
          </div>

          <div className=" col-span-4 rounded-3xl shadow-lg border border-black p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image
                className="m-auto"
                width={75}
                height={75}
                src={marketing}
              />
              <h3 className="text-blue-600 font-bold my-2">
                Digital Marketing
              </h3>
            </div>
            <p>
              We specialize in tailored digital marketing solutions and ensure
              effective online marketing strategies.
            </p>
            <Image className=" w-12" src={arrow} />
          </div>
          <div className=" col-span-4 rounded-3xl  shadow-lg border border-black p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image
                className="m-auto"
                width={75}
                height={75}
                src={marketing}
              />
              <h3 className="text-blue-600 font-bold my-2">
                Digital Marketing
              </h3>
            </div>
            <p>
              We specialize in tailored digital marketing solutions and ensure
              effective online marketing strategies.
            </p>
            <Image className=" w-12" src={arrow} />
          </div>

          <div className=" col-span-4 rounded-3xl shadow-lg border border-black p-4 text-center font-bold align-middle">
            <div className="flex justify-evenly w-10/12 mb-4">
              <Image className="m-auto" width={75} height={75} src={seo} />
              <h3 className="text-blue-600 font-bold my-2">SEO Optimization</h3>
            </div>
            <p>
              We ensure optimal website traffic by addressing factors such as
              user experience, accessibility, product details, and monitoring
              target audience.
            </p>
            <Image className=" w-12" src={arrow} />
          </div>
        </div>
      </section>

      {/* ----------------------- */}
      {/* section5 completed */}
      <section>
        <h2 className=" w-full px-20  text-center font-bold text-2xl text-yellow-600">
          SEO Services
        </h2>

        <div
          className=" grid grid-rows-3 
        grid-flow-col gap-8 w-full px-20 py-10 place-content-center"
        >
          <div className=" col-span-4 roundedshadow-lg  p-4 text-left font-bold align-middle">
            <div className="flex w-1/2">
              <Image className="m-auto w-11" src={user} />
              <h3 className="text-blue-600 text-left font-bold my-2">
                Customized SEO Services
              </h3>
            </div>
            <p>
              We develop tailored SEO plans for new websites as they consider a
              correct SEO website checklist, as well as strategy, to be critical
              for business.
            </p>
          </div>
          <div className=" col-span-4 roundedshadow-lg  p-4 text-left font-bold align-middle">
            <div className="flex w-1/2">
              <Image className="m-auto w-11" src={tick} />
              <h3 className="text-blue-600 text-left font-bold my-2">
                On-Page SEO Services
              </h3>
            </div>
            <p>
              We offer on-page SEO services for content, photos, descriptions,
              and visibility. They follow the design principles for SEO-friendly
              websites in order to provide their customers with the best
              outcomes.
            </p>
          </div>
          <div className=" col-span-4 roundedshadow-lg  p-4 text-left font-bold align-middle">
            <div className="flex w-1/2">
              <Image
                className="m-auto  w-11"
                width={75}
                height={75}
                src={tick}
              />
              <h3 className="text-blue-600 text-left font-bold my-2">
                Off-Page SEO Services
              </h3>
            </div>
            <p>
              We undertake off-page SEO for better rankings. They mainly
              specialize in handling backlink profiles. Their SEO analysts
              strive to ensure that their websites are listed on some of the
              popular sites in the industry of travel.
            </p>
          </div>
          <div className=" col-span-4 roundedshadow-lg  p-4 text-left font-bold align-middle">
            <div className="flex w-1/2">
              <Image
                className="m-auto  w-11"
                width={75}
                height={75}
                src={tick}
              />
              <h3 className="text-blue-600 text-left font-bold my-2">
                Mobile SEO Services
              </h3>
            </div>
            <p className="">
              We stress upon the mobile optimizations since the mobile phone use
              by search is highly prevalent. They are more able to score the
              best SEO rankings and can easily be viewed on mobile devices.
            </p>
          </div>

          <div className=" col-span-4 roundedshadow-lg  p-4 text-left font-bold align-middle">
            <div className="flex w-1/2 ">
              <Image className="m-auto  w-11" src={tick} />
              <h3 className="text-blue-600 text-left font-bold my-2">
                Free Website Audit and Strategies
              </h3>
            </div>
            <p className="text-left">
              We go beyond essential SEO website development to give out free
              website audits, analysis and SEO strategies for transparent
              business strategies. They target business owners in different
              industries, and these packages include local SEO and e-commerce
              services.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- */}
      {/* s6completed */}
  // <section>
        <h2 className=" w-full px-20  text-center font-bold text-2xl text-yellow-600">
        Stackkaroo’s Talent Hiring & Job Placement Services
       </h2>

      <p className=" w-full px-20 py-2 text-center font-bold text-sm ">
      //     We are a talent searching platform that redesigns how companies hire
      //     talents. It is a cost-effective solution for industries. We also
      //     provide global job opportunities with good salaries, support, and
      //     professional development.
         </p>

         <div
          className="grid grid-rows-2 
        grid-flow-col gap-8 w-full px-20 py-10 "
        >
          <div className=" col-span-4 rounded bg-white shadow-lg p-4 text-center font-bold align-middle">
            <Image className="m-auto" width={75} height={75} src={locations} />
            <h3 className="text-blue-600 font-bold my-2">
              Unleashing Top Talent Globally
            </h3>
            <p>
              We offer 5% top talents and supports companies hiring from various
              time zones.
            </p>
          </div>

          <div className=" col-span-4  rounded bg-white shadow-lg  p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={promotion} />
            <h3 className="text-blue-600 font-bold my-2">Securing Success</h3>
            <p>
              The company has a 30-day replacement policy and high retention
              rate due to competitive payouts and strong brand reputation.
            </p>
          </div>

          <div className=" col-span-4   rounded bg-white shadow-lg p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={pin} />
            <h3 className="text-blue-600 font-bold my-2">Beyond Borders</h3>
            <p>We provide both, flexible full-time and part-time jobs</p>
          </div>

          <div className=" col-span-4  rounded bg-white shadow-lg p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={badge} />
            <h3 className="text-blue-600 font-bold my-2">
              End-to-End Excellence
            </h3>
            <p>
              In our hiring process, a job description is shared, matches are
              reviewed, interviews are conducted, and post-hiring support is
              provided by us.
            </p>
          </div>

          <div className="col-span-4  rounded bg-white shadow-lg  p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={perform} />
            <h3 className="text-blue-600 font-bold my-2">
              Efficiency Redefined
            </h3>
            <p>
              The platform enables fast hiring without waiting for candidates to
              reply. We offer affordable alternatives to traditional recruitment
              methods and provides quality talent.
            </p>
          </div>

          <div className=" col-span-4  rounded bg-white shadow-lg  p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={commit} />
            <h3 className="text-blue-600 font-bold my-2">Surprise Plans</h3>
            <p>
              The contracts are good and satisfy both parties. We save time and
              money by providing remote onboarding and IT support.
            </p>
          </div>
        </div>

        <div
          className=" grid grid-rows-1 
        grid-flow-col gap-8 w-full px-20 py-2"
        >
          <div className=" col-span-6 rounded bg-white shadow-lg p-4 text-center font-bold align-middle">
            <h2 className=" w-full px-20  text-center font-bold text-2xl text-yellow-600">
              Planning for a Trip?
            </h2>
            <h3 className="text-blue-600 font-bold my-2">
              India’s no.1 Tour & Travel Operator Agency and your source for the
              most personalized travel experience in India, Plankaroo.com
            </h3>
            <p>
              Our platform aims to be a one-stop shop for memorable experiences
              for you. Plankaroo.com offers travel bookings, sightseeing,
              restaurant reservations, and tour guides. We help travelers make
              custom trips to India, fulfilling travel dreams.
            </p>
          </div>
          <div className=" col-span-6 rounded bg-white shadow-lg p-4 text-center font-bold align-middle">
            <h2 className=" w-full px-20  text-center font-bold text-2xl text-yellow-600">
              Planning for a Special Occasion
            </h2>
            <h3 className="text-blue-600 font-bold my-2">
              Go straight to Plankaroo.com, the number one Event Organizer
            </h3>
            <p>
              Through our special plans, we'll cater to all your event needs,
              ensuring a memorable day for your loved ones. Whatever you wish to
              celebrate, Plankaroo.com will make it unforgettable. Our team of
              specialists will prepare a tailored event, so you can relax and
              enjoy the party. Trust Plankaroo.com to fulfill your dreams and
              create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------- */}
      {/* s7completed */}
      <section>
      <h2 className=" w-full px-20  text-center font-bold text-2xl mt-20 text-yellow-600">
          Plankaroo Tours & Travels Services
        </h2>

        <p className=" w-full px-20 py-2 text-center font-bold text-sm ">
          {" "}
          We Provide the Best Class Services to make your vacation fun and
          memorable
        </p>

        <div
          className=" grid grid-rows-2 
        grid-flow-col gap-8 w-full px-20 py-10 "
        >
          <div className=" col-span-4 rounded bg-white shadow-lg  p-4 text-center font-bold align-middle">
            <Image className="m-auto" width={75} height={75} src={calendar} />
            <h3 className="text-blue-600 font-bold my-2">Booking Automation</h3>
            <p>
              Check out our Booking Automation for easy and hassle-free
              reservations. It simplifies the process and makes our platform
              user-friendly.
            </p>
          </div>
          <div className=" col-span-4  rounded bg-white shadow-lg  p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={firstaid} />
            <h3 className="text-blue-600 font-bold my-2">
              First Aid Medical Kit
            </h3>
            <p>
              At Plankaroo, your safety and peace of mind are our top priority.
              We provide essential health care services, like First Aid Medical
              Kits, to equip you for any circumstance and confident travel.
            </p>
          </div>

          <div className=" col-span-4   rounded bg-white shadow-lg p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={tracking} />
            <h3 className="text-blue-600 font-bold my-2">Tracking Feature</h3>
            <p>
              You understand the importance of staying connected with family
              during your visit. Plankaroo.com tracks loved ones for peace of
              mind and allows you to fully enjoy your journey.
            </p>
          </div>

          <div className=" col-span-4  rounded bg-white shadow-lg p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={luggage} />
            <h3 className="text-blue-600 font-bold my-2">
              Customized Tour Packagese
            </h3>
            <p>
              Enjoy our custom tour packages. Choose destinations, activities,
              accommodations, restaurants, vehicles, and tour guides for a
              personalized itinerary. We design packages for every traveler.
            </p>
          </div>

          <div className="col-span-4  rounded bg-white shadow-lg  p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={info} />
            <h3 className="text-blue-600 font-bold my-2">
              Information Automation
            </h3>
            <p>
              Plankaroo.com's Info Automation ensures understanding of cultural
              activities in user's language. We use 3D map for precise details,
              making travels more exciting.
            </p>
          </div>

          <div className=" col-span-4  rounded bg-white shadow-lg  p-4 text-center font-bold align-middle">
            {" "}
            <Image className="m-auto" width={75} height={75} src={gift} />
            <h3 className="text-blue-600 font-bold my-2">Surprise Plans</h3>
            <p>
              Surprise Plans at Plankaroo.com for an enhanced trip experience.
              Special packages and customized surprises to elevate your journey.
              Let us add spice to your travels.
            </p>
          </div>
        </div>
      </section> 
      </div> 


     
    
  );
};

export default page;
