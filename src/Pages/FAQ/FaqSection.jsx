

const FaqSection = () => {
    return (
      <div className="max-w-screen-2xl mx-auto ">
        <div
          className="bg-blue-50  rounded-xl mt-28"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="text-center text-5xl text-blue-500 font-bold pt-28 pb-10">
            Most Asked Questions
          </h1>
          <div className="flex flex-col py-20 items-center justify-center lg:flex-row gap-20">
            <div
              className="lg:max-w-xl"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <div>
                <div className="space-y-5">
                  <div className="collapse collapse-plus  bg-blue-200">
                    <input
                      type="radio"
                      name="my-accordion-3"
                      checked="checked"
                    />
                    <div className="collapse-title text-2xl font-medium">
                      What should I pack for my trip?
                    </div>
                    <div className="collapse-content">
                      <p className="text-lg font-medium">
                        Packing essentials can vary depending on your
                        destination and the time of year. We provide packing
                        guides and tips in our blog to help you prepare for your
                        specific trip.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-blue-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl font-medium">
                      How do I book a tour or accommodation through your
                      website?
                    </div>
                    <div className="collapse-content">
                      <p className="text-lg font-medium">
                        To book a tour or accommodation, simply browse our
                        listings, select your preferred option, and follow the
                        booking instructions provided on our website. We partner
                        with trusted travel providers to ensure a seamless
                        booking experience.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-blue-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl font-medium">
                      Can you recommend off-the-beaten-path destinations?
                    </div>
                    <div className="collapse-content">
                      <p className="text-lg font-medium">
                        Absolutely! We specialize in uncovering hidden gems and
                        lesser-known destinations. Check our blog and
                        destination guides for unique and adventurous travel
                        ideas.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-blue-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl font-medium">
                      Is travel insurance necessary, and do you offer it?
                    </div>
                    <div className="collapse-content">
                      <p className="text-lg font-medium">
                        Travel insurance is highly recommended to protect your
                        trip. While we donot provide insurance directly, we
                        offer guidance on finding the right insurance policy to
                        suit your needs.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-blue-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl font-medium">
                      Are your travel tips suitable for solo travelers,
                      families, and groups?
                    </div>
                    <div className="collapse-content">
                      <p className="text-lg font-medium">
                        Our travel tips are designed to cater to all types of
                        travelers. We provide insights and recommendations for
                        solo adventurers, families, and groups, so you can plan
                        your journey with confidence.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-blue-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl font-medium">
                      How can I stay updated with your latest travel content?
                    </div>
                    <div className="collapse-content">
                      <p className="text-lg font-medium">
                        Stay in the loop by subscribing to our newsletter and
                        following us on social media. We regularly share travel
                        stories, tips, and destination updates to keep you
                        informed and inspired.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="rounded-xl h-[700px] md:w-[500px]"
                src="https://i.ibb.co/2hHmTJT/ancient-4782059-1920.jpg"
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

export default FaqSection;



// /* faq */
      