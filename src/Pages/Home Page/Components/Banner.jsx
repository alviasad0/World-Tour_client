import { Link } from "react-router-dom";


const Banner = () => {
    return (
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div>
          <div className="carousel w-full h-[700px] rounded-xl">
            {/* slider-1  */}

            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/TmMnhR8/pexels-asad-photo-maldives-1268855.jpg"
                className="w-full"
              />
              <div className=" absolute flex gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 lg:pl-[120px]   items-center h-full w-full">
                <div
                  className="text-white font-bold space-y-8 w-1/3"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  <h2 className="text-6xl ">
                    Wanderlust Wonders: Explore the World with Us
                  </h2>
                  <p className="text-lg font-medium">
                    Unleash your wanderlust and start exploring the world
                    through our eyes. Join us on epic journeys, find hidden
                    gems, and plan your next adventure today.
                  </p>
                  <div className="flex gap-6">
                    <button className="btn btn-primary bg-blue-400 border-none tracking-widest text-white">
                      <Link to="/allPackages">Packages</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex gap-6 transform -translate-y-1/2 left-5 right-5 bottom-1 justify-end">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a
                  href="#slide2"
                  className=" btn btn-circle bg-blue-400 text-white"
                >
                  ❯
                </a>
              </div>
            </div>
            {/* slider-2  */}

            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/zst0TxJ/pexels-oleksandr-p-1007901.jpg://i.ibb.co/TmMnhR8/pexels-asad-photo-maldives-1268855.jpg"
                className="w-full"
              />
              <div className=" absolute flex gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 lg:pl-[120px]   items-center h-full w-full">
                <div className="text-white font-bold space-y-8 w-1/3">
                  <h2 className="text-6xl ">
                    Wanderlust Wonders: Explore the World with Us
                  </h2>
                  <p className="text-lg font-medium">
                    Unleash your wanderlust and start exploring the world
                    through our eyes. Join us on epic journeys, find hidden
                    gems, and plan your next adventure today.
                  </p>
                  <div className="flex gap-6">
                    <button className="btn btn-primary bg-blue-400 border-none tracking-widest text-white">
                      <Link to="/allPackages">Packages</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex gap-6 transform -translate-y-1/2 left-5 right-5 bottom-1 justify-end">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a
                  href="#slide3"
                  className=" btn btn-circle bg-blue-400 text-white"
                >
                  ❯
                </a>
              </div>
            </div>
            {/* slider-3  */}

            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/H7P5cLf/pexels-mohamad-tamer-2406731.jpg"
                className="w-full"
              />
              <div className=" absolute flex gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 lg:pl-[120px]   items-center h-full w-full">
                <div className="text-white font-bold space-y-8 w-1/3">
                  <h2 className="text-6xl ">
                    Wanderlust Wonders: Explore the World with Us
                  </h2>
                  <p className="text-lg font-medium">
                    Unleash your wanderlust and start exploring the world
                    through our eyes. Join us on epic journeys, find hidden
                    gems, and plan your next adventure today.
                  </p>
                  <div className="flex gap-6">
                    <button className="btn btn-primary bg-blue-400 border-none tracking-widest text-white">
                      <Link to="/allPackages">Packages</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex gap-6 transform -translate-y-1/2 left-5 right-5 bottom-1 justify-end">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a
                  href="#slide4"
                  className=" btn btn-circle bg-blue-400 text-white"
                >
                  ❯
                </a>
              </div>
            </div>
            {/* slider-4  */}

            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/rMQtk4D/pexels-axp-photography-18934574.jpg"
                className="w-full"
              />
              <div className=" absolute flex gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 lg:pl-[120px]   items-center h-full w-full">
                <div className="text-white font-bold space-y-8 w-1/3">
                  <h2 className="text-6xl ">
                    Wanderlust Wonders: Explore the World with Us
                  </h2>
                  <p className="text-lg font-medium">
                    Unleash your wanderlust and start exploring the world
                    through our eyes. Join us on epic journeys, find hidden
                    gems, and plan your next adventure today.
                  </p>
                  <div className="flex gap-6">
                    <button className="btn btn-primary bg-blue-400 border-none tracking-widest text-white">
                      <Link to="/allPackages">Packages</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex gap-6 transform -translate-y-1/2 left-5 right-5 bottom-1 justify-end">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a
                  href="#slide1"
                  className=" btn btn-circle bg-blue-400 text-white"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;