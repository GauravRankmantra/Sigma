import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const slides = [
  {
    title: 'Diagnostic ECG',
    subtitle: 'High-quality ECG devices for accurate cardiac diagnosis.',
    btn: 'Explore ECG Products',
    image: '/diagnostic-ecg.jpg', // More specific image
  },
  {
    title: 'Patient Monitors',
    subtitle: 'Advanced monitoring solutions for comprehensive patient care.',
    btn: 'View Monitor Range',
    image: '/patient-monitors.jpg', // More specific image
  },
  {
    title: 'Endoscope Testing',
    subtitle: 'Reliable and precise testing for endoscopes and accessories.',
    btn: 'Learn About Testing Services',
    image: '/endoscope-testing.jpg', // More specific image
  },
  {
    title: 'Ultrasound',
    subtitle: 'Cutting-edge ultrasound systems for various clinical applications.',
    btn: 'Discover Ultrasound Machines',
    image: '/ultrasound.jpg', // More specific image
  },
  {
    title: 'Ultrasound Catheters',
    subtitle: 'Specialized ultrasound catheters for interventional procedures.',
    btn: 'See Ultrasound Catheters',
    image: '/ultrasound-catheters.jpg', // More specific image
  },
];

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 w-full h-full flex items-center justify-start px-6 md:px-24">
                <div className="max-w-2xl">
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white text-sm md:text-lg mb-4"
                  >
                   Product Testing
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white leading-tight"
                  >
                    {slide.title}
                    <br />
                   
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl md:text-3xl font-normal text-white leading-tight"
                  >
                   
                    <br />
                    {slide.subtitle}
                  </motion.h1>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-8 px-6 py-3 bg-[#B49C6A] text-white font-semibold hover:bg-white hover:text-[#B49C6A] transition duration-300 relative group"
                  >
                    <span className="relative z-10">{slide.btn}</span>
                    <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-white group-hover:bg-[#B49C6A] transition-all duration-300"></span>
                  </motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
