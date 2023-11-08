
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoThumbsUpOutline } from "react-icons/io5";
const WhyChoose = () => {

  
        return (
          <div className="max-w-screen-2xl mx-auto ">
            <div
              className="bg-blue-50  rounded-xl mt-28"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="flex flex-col py-20 items-center justify-center lg:flex-row gap-20">
                <div
                  className="lg:max-w-xl"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  <h1 className="text-5xl font-bold text-black">
                    Why Choose Us?
                  </h1>
                  <p className="text-xl font-medium text-black pt-4">
                    Join a passionate community of travelers sharing stories,
                    tips, and recommendations.
                  </p>
                  <div className="pt-10 space-y-6">
                    <div className="flex gap-6 items-center justify-center">
                      <div className="border-blue-600 border-l-4 pl-6 py-4">
                        <LiaCertificateSolid className="text-4xl  "></LiaCertificateSolid>
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-black">
                          Reliability
                        </h1>
                        <p className="text-xl text-black font-medium">
                          Count on us for trusted travel advice and reliable
                          resources for your adventures.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-center justify-center">
                      <div className="border-blue-600 border-l-4 pl-6 py-4">
                        <VscWorkspaceTrusted className="text-3xl  "></VscWorkspaceTrusted>
                      </div>
                      <div>
                        <h1 className="text-2xl text-black font-bold ">
                          Expertise
                        </h1>
                        <p className="text-xl text-black font-medium">
                          With years of globetrotting experience, our team knows
                          the ins and outs of travel.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-center justify-center">
                      <div className="border-blue-600 border-l-4 pl-6 py-4">
                        <IoThumbsUpOutline className="text-3xl  "></IoThumbsUpOutline>
                      </div>
                      <div>
                        <h1 className="text-2xl text-black font-bold ">
                          Authentic Insights
                        </h1>
                        <p className="text-xl text-black font-medium">
                          Gain access to local insights and hidden gems in every
                          corner of the world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded-xl h-[700px] md:w-[500px]"
                    src="https://i.ibb.co/L6Tq4bB/m038t0013-b-travel-06jul23.jpg"
                    alt=""
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        );
   
};

export default WhyChoose;

