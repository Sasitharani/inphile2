"use client";
import 'tailwindcss/tailwind.css';
import { useState, useEffect } from 'react';
import FeedbackForm from './FeedbackForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineContactPhone } from 'react-icons/md';
import FourStep from './FourStep';
import Head from 'next/head';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const servicesSection = document.getElementById('services');
    const servicesDivs = servicesSection.querySelectorAll('.service-div');
    const contactSection = document.getElementById('contact');
    const feedbackDiv = document.getElementById('feedback');
    const textContactDiv = document.getElementById('textContact');

    const handleAnimation = () => {
      const rect = servicesSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        servicesDivs.forEach((div, index) => {
          setTimeout(() => {
            div.classList.add('animate-move-up');
          }, index * 100); // Add delay for each div
        });
      }
    };

    const handleContactAnimation = () => {
      const rect = contactSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        feedbackDiv.classList.add('animate-slide-in-left');
        textContactDiv.classList.add('animate-slide-in-right');
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(servicesSection);

    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleContactAnimation();
            contactObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    contactObserver.observe(contactSection);

    const handleHashChange = () => {
      if (window.location.hash === '#services') {
        handleAnimation();
      }
      if (window.location.hash === '#contact') {
        handleContactAnimation();
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      contactObserver.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleBookCallClick = () => {
    const feedbackDiv = document.getElementById('feedback');
    if (feedbackDiv) {
      feedbackDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Insphile Management Solutions</title>
      </Head>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes moveUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-move-up {
          animation: moveUp 1s ease-out forwards;
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }
        .service-div:hover {
          height: calc(100% + 15px);
          width: calc(100% + 15px);
          color: white;
        }
        .service-div:hover .text-black, .service-div:hover .text-blue-600 {
          color: white;
        }
        .bg-services {
          background: url('/img/bc.jpg') no-repeat center center;
          background-size: contain;
        }
        .bg-contact {
          background: url('/img/bcc.jpg') no-repeat center center;
          background-size: contain;
          opacity: 0.05;
        }
      `}</style>
      <div className="flex flex-col min-h-screen scroll-smooth">
        <div className="w-full">
          <header className="w-full text-white bg-black p-4 flex text-lg justify-between items-center fixed top-0 left-0 right-0 z-10">
            <h1 className="text-2xl font-bold">
              Insphile Management Solutions
            </h1>
            <nav>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul
                className={`md:flex space-x-12 ${
                  isMenuOpen
                    ? "fixed inset-0 flex flex-col items-start justify-center space-y-4 p-4"
                    : "hidden"
                }`}
              >
                <li className="hover:text-yellow-500 font-medium text-xs">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-yellow-500 font-medium text-xs">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-yellow-500 font-medium text-xs">
                  <a href="#services">Services</a>
                </li>
                <li className="hover:text-yellow-500 font-medium text-xs">
                   <a href="#contact">Contact Us</a>
                </li>

                <li className="hover:text-yellow-500 font-medium text-xs">
                  <a href="#contact"></a>
                </li>
              </ul>
            </nav>
          </header>
          <div
            id="home"
            className="relative flex items-center justify-center min-h-screen"
          >
            <div className="absolute inset-0 bg-cover bg-center bg-fixed"></div>
            <div className="absolute inset-0  opacity-50"></div>
            <div className="absolute left-0 ml-4 mt-5 mb-96 flex flex-col items-start justify-center h-50 w-85 p-4">
              <p className="text-[8px] text-black">INSPHILE</p>
              <p className="text-[8px] text-black">MANAGEMENT</p>
              <p className="text-[8px] text-black">SOLUTIONS</p>
            </div>
            <div
              className="absolute left-0 m-5 flex flex-col items-start justify-center h-50 w-85 border-2"
              id="bridging"
            >
              <div className="flex flex-row w-full items-center">
                <div className="w-1/3">
                  <div
                    className="ml-4 h-50 w-85 p-4 bg-white bg-opacity-35"
                    id="bridging"
                  >
                    <h1 className="text-4xl text-green-500">Bridging Top</h1>
                    <h1 className="text-4xl text-green-500">
                      {" "}
                      Talent <span className="text-4xl text-black"> With</span>
                    </h1>
                    <h1 className="text-4xl text-black">Top Companies</h1>

                    <p className="text-sm text-black mt-4">
                      With our quick and easy recruitment services you are
                    </p>
                    <p className="text-sm text-black">
                      just one call away from building your dream team!
                    </p>
                  </div>
                </div>
                <div className="w-1/3">
                  <img
                    src="/img/handShake.jpg"
                    alt="Handshake Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/3">
                  <img
                    src="/img/frontP.jpg"
                    alt="Front Image"
                    className="w-full h-full  object-contain"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute left-0 ml-28 mt-72 p-4 bg-transparent z-20"
              id="callButton"
            >
              <button className="px-4 py-2 bg-rose-100 text-black rounded-2xl" onClick={handleBookCallClick}>
                Book a Call
              </button>
            </div>
          </div>
          <div
            id="about"
            className="relative flex flex-col items-center justify-center min-h-screen border-blue-500 p-4 "
          >
            <div className="absolute inset-0 bg-cover bg-center bg-fixed"></div>
            <div className="absolute inset-0  opacity-50"></div>
            <div className="absolute  left-0  mb-96 flex flex-col items-start justify-center h-50 w-85 p-4">
              <p className="text-[8px] text-black">INSPHILE</p>
              <p className="text-[8px] text-black">MANAGEMENT</p>
              <p className="text-[8px] text-black">SOLUTIONS</p>
            </div>
            <div className="relative mt-16 h-96 flex flex-col items-center justify-evenly p-4 border-2 border-gray-300 rounded-2xl">
              <h2 className="text-4xl font-bold  text-blue-500">About Us</h2>
              <p className="text-lg text-green-500 text-center">
                Welcome to INSPHILE, your premier partner in bridging talent and
                opportunity.
              </p>
              <p className="text-lg text-black text-justify pt-1" id='aboutUs'>
                Our recruitment model is built to meet the quality and delivery
                needs of our clients. We maintain a large database of competent
                candidates, allowing us to present the best-suited candidates
                based on their strengths and objectives. With a unique
                combination of skills, knowledge, and experience, INSPHILE
                offers excellent Human Resource Solutions. Our skilled
                recruiters and innovative practices empower our IT and Non-IT
                clients by providing prominent manpower solutions across various
                industries in India.
              </p>
              <div className="relative mt-4 h-44 w-full overflow-hidden pt-4">
                <div className="absolute flex animate-scroll">
                  <img src="https://via.placeholder.com/150" alt="Sample Image 1" className="h-36 w-72 mx-2" />
                  <img src="https://via.placeholder.com/150" alt="Sample Image 2" className="h-36 w-72 mx-2" />
                  <img src="https://via.placeholder.com/150" alt="Sample Image 3" className="h-36 w-72 mx-2" />
                  <img src="https://via.placeholder.com/150" alt="Sample Image 4" className="h-36 w-72 mx-2" />
                  <img src="https://via.placeholder.com/150" alt="Sample Image 5" className="h-36 w-72 mx-2" />
                  <img src="https://via.placeholder.com/150" alt="Sample Image 6" className="h-36 w-72 mx-2" />
                  <img src="https://via.placeholder.com/150" alt="Sample Image 7" className="h-36 w-72 mx-2" />
                  <img src="https://via.placeholder.com/150" alt="Sample Image 8" className="h-36 w-72 mx-2" />
                </div>
              </div>
            </div>
          </div>
          <div
            id="services"
            className="flex flex-col items-center justify-center min-h-screen border-blue-500 bg-services"
          >
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <div className="grid grid-cols-3 gap-4 w-full p-4">
              <div className="service-div flex flex-col justify-between border-2 border-gray-300 rounded-2xl bg-gray-500 bg-opacity-5 p-4 hover:bg-blue-500 transition-all">
                <div className="font-bold text-blue-600 flex justify-center items-center">Construction</div>
                <div className="text-black">Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample</div>
              </div>
              <div className="service-div flex flex-col justify-between border-2 border-gray-300 rounded-2xl bg-gray-500 bg-opacity-5 p-4 hover:bg-blue-500 transition-all">
                <div className="font-bold text-blue-600 flex justify-center items-center">FMCG</div>
                <div className="text-black">Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample</div>
              </div>
              <div className="service-div flex flex-col justify-between border-2 border-gray-300 rounded-2xl bg-gray-500 bg-opacity-5 p-4 hover:bg-blue-500 transition-all">
                <div className="font-bold text-blue-600 flex justify-center items-center">IT ans ITES</div>
                <div className="text-black">Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample</div>
              </div>
              <div className="service-div flex flex-col justify-between border-2 border-gray-300 rounded-2xl bg-gray-500 bg-opacity-5 p-4 hover:bg-blue-500 transition-all">
                <div className="font-bold text-blue-600 flex justify-center items-center">Automobile</div>
                <div className="text-black">Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample</div>
              </div>
              <div className="service-div flex flex-col justify-between border-2 border-gray-300 rounded-2xl bg-gray-500 bg-opacity-5 p-4 hover:bg-blue-500 transition-all">
                <div className="font-bold text-blue-600 flex justify-center items-center">Infrastructure</div>
                <div className="text-black">Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample</div>
              </div>
              <div className="service-div flex flex-col justify-between border-2 border-gray-300 rounded-2xl bg-gray-500 bg-opacity-5 p-4 hover:bg-blue-500 transition-all">
                <div className="font-bold text-blue-600 flex justify-center items-center">Banking</div>
                <div className="text-black">Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample. Sample sample sample sample sample.Sample sample sample sample sample</div>
              </div>
            </div>
          </div>

          <div
            id="4step"
            className="flex items-center justify-center min-h-screen border-blue-500"
          >
            <FourStep />
          </div>
          <div
            id="contact"
            className="flex flex-col justify-center min-h-screen border-blue-500"
            style={{ backgroundImage: "url('/img/bcc.jpg')", backgroundSize: "contain", opacity: 1 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-5 "></div>
            <div className="w-full text-center mt-8" id='touch1'>
              <h1 className="text-5xl font-rounded">
                <span className="text-blue-500">Get In</span> <span className="text-black">Touch</span>
              </h1>
            </div>
            <div className="w-full text-center mt-4" id='touch2'>
              <p className="text-lg">
                Ready to take the next step in your career or find the perfect candidate for your team? Contact us today to learn more about how HireTick can help you achieve your goals.
              </p>
            </div>
            <div id='touch3' className="flex flex-col md:flex-row justify-center">
              <div id="feedback" className="w-full md:w-1/3 p-4 relative">
                <FeedbackForm />
              </div>
              <div className="w-1/3 h-full md:w-1/2 m-5 p-4 bg-transparent rounded-2xl border-2 relative" id="text">
                <div id="textContact" className="p-4">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <MdOutlineContactPhone className="mr-2" />
                    Contact Us!
                  </h2>
                  <p className="text-sm mb-4">
                    Whether you’re a job seeker looking for your next career opportunity or an employer seeking top talent to join your team.
                  </p>
                  <div className="flex items-center mb-4">
                    <FaPhone className="mr-2" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">Office Phone Number</h3>
                      <p className="text-sm">+91 9</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <FaEnvelope className="mr-2" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">Email ID</h3>
                      <p className="text-sm">hrd@insphile.in</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">Main Branch</h3>
                      <p className="text-sm">Sample</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 right-4 z-30">
          <button
            className="p-3 bg-blue-500 text-white rounded-full shadow-lg"
            onClick={handleBookCallClick}
          >
            <FaPhoneAlt size={24} />
          </button>
        </div>
      </div>
    </>
  );
}

