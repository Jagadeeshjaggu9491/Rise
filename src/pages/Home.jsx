import ContactForm from "../components/ContactForm";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import Logo from "../images/9-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../images/Rise-9-two.jpg";
import slide2 from "../images/Rise-9-one.jpg";
import {
  FaRulerCombined,
  FaBuilding,
  FaClock,
  FaLeaf,
  FaCarSide,
  FaCity,
} from "react-icons/fa";
import {
  FaMapMarkedAlt,
  FaHome,
  FaIdBadge,
  FaBed,
  FaRupeeSign,
  FaArrowsAltV,
  FaUniversity,
  FaCloudSun,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaChild,
  FaTree,
  FaWheelchair,
  FaCar,
  FaWater,
  FaShieldAlt,
  FaRunning,
} from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import AboutImg from "../images/BuildingNight.jpg"; // replace with your image
import PriceImg from "../images/about.jpg"; // replace with your image

import Floor1 from "../images/west-1.png";
import Floor2 from "../images/west-2.png";
import Floor3 from "../images/east-1.png";
import Floor4 from "../images/east-2.png";

import BuildingNight from "../images/about.jpg";
import PriceSheetBlurred from "../images/price-sheet.jpg";

// Normal imports (your exact filenames)
import gal1 from "../images/gal-1.jpg";
import gal2 from "../images/gal-2.jpg";
import gal3 from "../images/gal-3.jpg";
import gal4 from "../images/gal-4.jpg";
import gal5 from "../images/gal-5.jpg";
import gal6 from "../images/gal-6.jpg";
import gal7 from "../images/gal-7.jpg";
import gal8 from "../images/gal-8.jpg";

import { Phone, Mail, Instagram, Facebook, Youtube } from "react-icons/fa";

export default function Home() {
  // Intro Popup

  useEffect(() => {
    // Show popup automatically after page loads (you can adjust delay)
    const popupTimer = setTimeout(() => {
      setShowForm(true);
    }, 1000); // 0.5 sec after load

    return () => clearTimeout(popupTimer);
  }, []);

  // Header

  const [glass, setGlass] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false); // For popup

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setGlass(true);
      } else {
        setGlass(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Banner
  const slides = [
    {
      id: 1,
      img: slide1,
      title: "Experience Elevated Living at Rise with 9",
      desc: "Ultra-luxury 3 & 4 BHK residences with panoramic views and premium lifestyle amenities.",
    },
    {
      id: 2,
      img: slide2,
      title: "Welcome to Your Dream Home in the Sky",
      desc: "Spacious villa-style homes with skyline views and world-class clubhouse facilities.",
    },
  ];

  // Project Highlights
  const highlights = [
    {
      icon: <FaMapMarkedAlt size={32} />,
      title: "3.6 Acres",
      desc: "Project Area",
    },
    {
      icon: <FaHome size={32} />,
      title: "415 Units",
      desc: "Flats",
    },
    {
      icon: <FaIdBadge size={32} />,
      title: "P02400009942",
      desc: "RERA ID",
    },
    {
      icon: <FaBuilding size={32} />,
      title: "56 Floors",
      desc: "2 Towers",
    },
    {
      icon: <FaBed size={32} />,
      title: "3 & 4 BHKs",
      desc: "3303 – 5777 sft",
    },
    {
      icon: <FaRupeeSign size={32} />,
      title: "4.4 Cr*",
      desc: "Starts from",
    },
    {
      icon: <FaArrowsAltV size={32} />,
      title: "23 Ft Ceilings",
      desc: "Double height living rooms",
    },
    {
      icon: <FaUniversity size={32} />,
      title: "6 Level Club House",
      desc: "52,000+ sft",
    },
    {
      icon: <FaCloudSun size={32} />,
      title: "Sky Terrace",
      desc: "With sky amenities",
    },
  ];

  // Amenities
  const amenities = [
    {
      icon: <FaSwimmingPool size={32} />,
      title: "Infinity / Swimming Pool",
      desc: "Relax with pool & kids’ pool at rooftop / sky-deck level.",
    },
    {
      icon: <FaDumbbell size={32} />,
      title: "Fully Equipped Gym",
      desc: "Modern gym & cardio studio for fitness & wellness.",
    },
    {
      icon: <FaChild size={32} />,
      title: "Kids Play Area & Creche",
      desc: "Dedicated kids’ play zone and nursery spaces.",
    },
    {
      icon: <FaWheelchair size={32} />,
      title: "24×7 Security & CCTV",
      desc: "Round-the-clock security, CCTV & surveillance for safety.",
    },
    {
      icon: <FaTree size={32} />,
      title: "Landscaped Gardens & Open Spaces",
      desc: "Green areas, gardens & open spaces for refreshing ambience.",
    },
    {
      icon: <FaCar size={32} />,
      title: "Basement & Sound-Treated Parking",
      desc: "Secure parking with treated structure & EV-ready spots.",
    },
    {
      icon: <FaWater size={32} />,
      title: "Water & Power Backup",
      desc: "24×7 treated water supply & back-up power for common areas.",
    },
    {
      icon: <FaRunning size={32} />,
      title: "Jogging / Cycling Track & Fitness Zones",
      desc: "Track & outdoor fitness zones for a healthy lifestyle.",
    },
  ];

  // Floor Plans
  const floorPlans = [
    { id: 1, title: "3588 Sft – West Facing", img: Floor1 },
    { id: 2, title: "3303 Sft – West Facing", img: Floor2 },
    { id: 3, title: "4099 Sft – East Facing", img: Floor3 },
    { id: 4, title: "5777 Sft – East Facing", img: Floor4 },
  ];

  // FAQ's
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const faqs = [
    {
      q: "What is ‘Rise With 9’ (The Trilight Residences)’ and who is developing it?",
      a: "Rise With 9 (The Trilight Residences) is an ultra-luxury residential development in Neopolis (Kokapet), Hyderabad, offering large 3- and 4-BHK apartments in high-rise towers. The project is marketed under the brand ‘Trilight / Rise With 9’.",
    },
    {
      q: "Where exactly is the project located?",
      a: "The project is located in Neopolis / Kokapet (Gandipet Kokapet SEZ main road area), Hyderabad — an emerging luxury residential hub near Financial District / IT corridors. Exact location maps are available on the official site and brand.",
    },
    {
      q: "Is the project RERA-registered? What is the RERA number?",
      a: "Yes — the project is RERA-registered. Listings reference RERA ID P0240000942 (you should link the RERA page/download the RERA record for the latest official document before publishing).",
    },
    {
      q: "What unit types and sizes are available?",
      a: "The project offers large-format luxury 3-BHK and 4-BHK apartments; published unit sizes start around ≈3,303 sq ft and go up to ≈5,777 sq ft.",
    },
    {
      q: "How many towers / what is the project size?",
      a: "The Trilight development (Rise With 9) sits on a multi-acre plot (6.6 acres) with two premium towers for this product.",
    },
    {
      q: "What is the possession / handover date?",
      a: "Handover date as per RERA reference to May 2030 as the RERA possession timeline.",
    },
    {
      q: "What are the key amenities provided?",
      a: "Rise With 9 advertises high-end amenities: multiple clubhouses (sky club & rooftop sky amenities (skydeck, pools), large clubhouse spaces, business lounges, gym, children’s play areas and landscaped open spaces. The brochure emphasizes multiple clubhouses and sky amenities as highlights.",
    },
    {
      q: "Is parking provided and what type is it?",
      a: "Covered allocated car parking is provided (number of parking slots varies by unit). Are EV charging points, STP and sustainability features included? EV charging and sustainability features such as sewage treatment / rainwater harvesting are commonly listed.",
    },
  ];

  //  Gallery
  const galleryImages = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8];

  // Whatsapp config
  const whatsappNumber = "+919652389333"; // replace with your number (country code included, no +)
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in Trilight Rise with 9 (The Trilight Residences). Kindly share the latest brochure, price sheet, and payment structure. Thank you!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div>
      {/* Header */}
      <header className={`custom-header ${glass ? "glass" : ""}`}>
        <nav className="container d-flex justify-content-between align-items-center py-3">
          <Link to="/" className="d-flex align-items-center">
            <img src={Logo} className="img-fluid logo" alt="Logo" />
          </Link>

          {/* Center Nav for large screens */}
          <ul className="d-none d-lg-flex gap-4 m-0 list-unstyled justify-content-center flex-grow-1">
            <li>
              <a href="#home" className="text-white text-decoration-none">
                Home
              </a>
            </li>

            <li>
              <a
                href="#project-highlights"
                className="text-white text-decoration-none"
              >
                Project Highlights
              </a>
            </li>

            <li>
              <a href="#amenities" className="text-white text-decoration-none">
                Amenities
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-white text-decoration-none">
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#floor-plans"
                className="text-white text-decoration-none"
              >
                Floor Plans
              </a>
            </li>

            <li>
              <a
                href="#price-sheet"
                className="text-white text-decoration-none"
              >
                Price Sheet
              </a>
            </li>
          </ul>

          {/* Button for large screens */}
          <div className="d-none d-lg-block">
            <button
              className="btn btn-primary border-0 bg-main rounded-pill px-4 py-2 cta-animate"
              onClick={handleOpenForm}
            >
              Schedule Site Visit
            </button>
          </div>
          <button
            className="navbar-toggler d-lg-none border-0 navbar-dark"
            type="button"
            onClick={handleShowMenu}
            style={
              {
                // backgroundColor: "rgba(255,255,255,0.1)",
                // borderRadius: "6px",
              }
            }
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Menu */}
          {/* Offcanvas Menu */}
          <div
            className={`offcanvas offcanvas-end ${showMenu ? "show" : ""}`}
            tabIndex="-1"
            style={{ visibility: showMenu ? "visible" : "hidden" }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close text-reset"
                onClick={handleCloseMenu}
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="list-unstyled">
                {[
                  { label: "Home", link: "#home" },
                  { label: "Project Highlights", link: "#project-highlights" },
                  { label: "Amenities", link: "#amenities" },
                  { label: "Floor Plans", link: "#floor-plans" },
                  { label: "Price Sheet", link: "#price-sheet" },
                  { label: "Gallery", link: "#gallery" },
                ].map((item, idx) => (
                  <li className="mb-3" key={idx}>
                    <a
                      href={item.link}
                      onClick={handleCloseMenu}
                      className="text-dark text-decoration-none fs-5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                className="btn btn-primary border-0 bg-main mt-3 w-100"
                onClick={() => {
                  handleCloseMenu();
                  handleOpenForm();
                }}
              >
                Schedule Site Visit
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Banner Section */}
      <section className="position-relative">
        {/* Right-Side Absolute Form (optional, hidden on small screens) */}
        <div
          className="position-absolute top-50 end-0 translate-middle-y me-4 d-none d-md-block"
          style={{ zIndex: 20, width: "340px" }}
        >
          <ContactForm />
        </div>

        {/* Bootstrap Carousel */}
        <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators" style={{ zIndex: 15 }}>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#heroSlider"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ position: "relative" }}
              >
                {/* Background Image */}
                <img
                  src={slide.img}
                  className="d-block w-100"
                  style={{ height: "100vh", objectFit: "cover" }}
                  alt={slide.title}
                />

                {/* 🔥 Black Overlay ONLY for first slide */}
                {index === 1 && (
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }}
                  ></div>
                )}

                {/* Center Content */}
                <motion.div
                  className="position-absolute top-50 start-50 translate-middle text-white w-100"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ zIndex: 2 }}
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-7 text-center">
                        <motion.h2
                          className="text-center display-3 fw-light mb-3 text-uppercase tracking-wider"
                          style={{ color: "#BFA05B", letterSpacing: "0.2em" }}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        >
                          {slide.title}
                        </motion.h2>
                        {/* <h1 className="fw-bold display-5">{slide.title}</h1> */}
                        <p className="fs-4 mt-3">{slide.desc}</p>
                        <button
                          className="btn btn-primary rounded-pill bg-main border-0 px-4 py-2 mt-3 fw-semibold cta-animate"
                          onClick={handleOpenForm}
                        >
                          Book Your Dream Home
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroSlider"
            data-bs-slide="prev"
            style={{ zIndex: 10 }}
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroSlider"
            data-bs-slide="next"
            style={{ zIndex: 10 }}
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-5" id="project-highlights">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2
              className="text-center display-5 fw-light mb-3 text-uppercase tracking-wider"
              style={{ color: "#BFA05B", letterSpacing: "0.2em" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Project Highlights
            </motion.h2>
            <p className="text-muted">
              Explore the key features that make this project truly exceptional
            </p>
          </div>

          <div className="row g-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-4 col-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 shadow-sm rounded-4 h-100 text-center text-white highlight-card">
                  <div className="text-main mb-3">{item.icon}</div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-5" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT — IMAGE */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={AboutImg}
                alt="Luxury Living"
                className="img-fluid rounded-4 shadow"
                style={{ height: "500px", objectFit: "cover", width: "100%" }}
              />
            </motion.div>

            {/* RIGHT — CONTENT */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text- display-6 fw-light mb-3 text-uppercase tracking-wider"
                style={{ color: "#BFA05B", letterSpacing: "0.2em" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Live Above Ordinary, Live Above the City
              </motion.h2>

              <p className="text-muted mb-4 fs-6">
                Step into a world where luxury isn’t just seen — it’s felt. Rise
                With 9 brings you breathtaking double-height living spaces,
                panoramic skyline views, and an unmatched sense of openness
                rarely found in modern high-rises. This isn’t just a home; it’s
                your private sky villa — crafted for elegance, comfort, and the
                joy of everyday living.
              </p>

              <p className="text-muted fs-6 mb-4">
                From sunrise-filled mornings to serene evenings above the city
                lights, every moment here feels elevated. Rise With 9 captures
                not just architecture, but emotion — delivering spaces that
                breathe, inspire, and redefine what a home can be.
              </p>

              {/* Bullet Points */}
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-2">
                  <FaCheckCircle className="text-main me-2 mt-1" />
                  <span>
                    23-ft double-height living spaces for villa-style grandeur.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <FaCheckCircle className="text-main me-2 mt-1" />
                  <span>
                    Panoramic views with floor-to-ceiling glass architecture.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <FaCheckCircle className="text-main me-2 mt-1" />
                  <span>Premium interiors crafted for elegance & comfort.</span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <FaCheckCircle className="text-main me-2 mt-1" />
                  <span>
                    Sky villa experience in the heart of Hyderabad’s Neopolis.
                  </span>
                </li>
              </ul>

              {/* Button */}
              <motion.button
                className="btn bg-main text-white px-4 py-2 rounded-pill fw-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenForm}
              >
                Explore More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-5 bg-light" id="amenities">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2
              className="text-center display-5 fw-light mb-3 text-uppercase tracking-wider"
              style={{ color: "#BFA05B", letterSpacing: "0.2em" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Amenities
            </motion.h2>
            <p className="text-muted">
              Discover all the lifestyle & comfort features offered at Rise with
              9.
            </p>
          </div>

          <div className="row g-4">
            {amenities.map((item, idx) => (
              <motion.div
                key={idx}
                className="col-lg-3 col-md-4 col-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 bg-white shadow-sm rounded-4 text-center amenity-card h-100">
                  <div className="text-main mb-3">{item.icon}</div>
                  <h6 className="fw-bold mb-2">{item.title}</h6>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Button */}
          <div className="text-center mt-4">
            <motion.button
              className="btn bg-main text-white px-4 py-2 rounded-pill fw-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenForm}
            >
              Explore More
            </motion.button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-5 py-lg-7 bg-white" id="gallery">
        <div className="container">
          {/* Section Title */}
          <motion.h2
            className="text-center display-5 fw-light mb-5 text-uppercase tracking-wider"
            style={{ color: "#BFA05B", letterSpacing: "0.2em" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Project Gallery
          </motion.h2>

          {/* 4 Images per Row Grid */}
          <div className="row g-3 g-lg-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="col-6 col-lg-3" // 2 per row on mobile, 4 per row on desktop
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
              >
                <div className="gallery-item position-relative overflow-hidden rounded-4 shadow-lg">
                  <img
                    src={img}
                    alt={`Trilight Rise with 9 - Gallery ${index + 1}`}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-5 py-lg-7 bg-light" id="floor-plans">
        <div className="container">
          <div className="row align-items-center g-5 g-xl-7">
            {/* LEFT SIDE – Content + Button */}
            <div className="col-lg-6">
              <motion.h2
                className="text display-5 fw-light mb-3 text-uppercase tracking-wider"
                style={{ color: "#BFA05B", letterSpacing: "0.2em" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Floor Plans
              </motion.h2>

              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                A signature highlight of Rise with 9 is the{" "}
                <strong>22-ft. double-height living area</strong>, a design
                element usually reserved for premium villas, which provides a
                sense of grandeur and abundant natural light.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <p className="text-secondary mb-5">
                  Picture the perfect Sunday light streaming into your spacious
                  living room, a gentle breeze moving through an intelligently
                  designed layout where every corner feels both open and
                  intimately yours. This is the thoughtful foundation of every
                  home at Rise with 9.
                </p>

                <button
                  className="btn btn-dark bg-main border-0 btn-lg px-5 rounded-pill shadow-sm fw-semibold"
                  onClick={handleOpenForm}
                >
                  Download Brochure
                </button>
              </motion.div>
            </div>

            {/* RIGHT SIDE – 2×2 Grid */}
            <div className="col-lg-6">
              <div className="row g-4 g-xl-5">
                {floorPlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    className="col-6"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.7 }}
                  >
                    <div className="floor-card position-relative rounded overflow-hidden shadow-lg">
                      {/* Image with default 50% opacity */}
                      <img
                        src={plan.img}
                        alt={plan.title}
                        className="img-fluid w-100 h-100 transition-all"
                        style={{ objectFit: "cover" }}
                      />

                      {/* Hover Overlay with Unlock Button */}
                      <div className="unlock-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-70 d-flex align-items-center justify-content-center opacity-0">
                        <button
                          className="btn btn-warning btn-md-lg text-white bg-main border-0 fw-bold px-md-5 py-md-3 rounded-pill shadow-lg"
                          onClick={handleOpenForm}
                        >
                          Unlock Floor Plan
                        </button>
                      </div>

                      {/* Title at Bottom */}
                      <div
                        className="position-absolute bottom-0 start-0 w-100 p-4 text-center text-white"
                        style={{
                          background:
                            "linear-gradient(transparent, rgba(0,0,0,0.9))",
                        }}
                      >
                        <h6 className="mb-0 fw-bold">{plan.title}</h6>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Sheet */}
      <section className="py-5 py-lg-7 " id="price-sheet">
        <div className="container">
          {/* Section Title */}
          <motion.h2
            className="text-center display-5 fw-light mb-5 text-uppercase tracking-wider"
            style={{ color: "#BFA05B", letterSpacing: "0.2em" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trilight Rise with 9 Price Sheet
          </motion.h2>

          <div className="row align-items-center g-5 g-xl-7">
            {/* Left Side – Beautiful Building Image */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="pe-lg-5"
              >
                {/* Hero Image */}
                <img
                  src={PriceImg} // Your night terrace / building image
                  alt="Trilight Rise with 9 – Sky Terrace"
                  className="img-fluid rounded-4 shadow mb-5 w-100"
                  style={{ objectFit: "cover", height: "420px" }}
                />

                {/* Sliced Premium Content */}

                <p className="lead text-muted mb-2">
                  Exclusivity demands transparency — only for the discerning
                  few.
                </p>

                <div className="row text-start">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <span className="text-main fs-3 me-3">✦</span>
                      <p className="mb-0">
                        <strong>Limited to 9 + 1</strong> exclusive homes
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="text-main fs-3 me-3">✦</span>
                      <p className="mb-0">
                        <strong>Flexible, milestone-linked</strong> payment
                        schedules
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="text-main fs-3 me-3">✦</span>
                      <p className="mb-0">
                        <strong>Invitation-only pricing</strong> — revealed upon
                        request
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn mt-4 btn-warning bg-main border-0 btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
                    style={{
                      color: "#fff",
                      fontSize: "1.1rem",
                    }}
                    onClick={handleOpenForm}
                  >
                    Unlock Price Sheet
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Side – Blurred Price Sheet + Unlock Button */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="text-center"
              >
                {/* Blurred Price Sheet Image */}
                <div className="position-relative d-inline-block">
                  <img
                    src={PriceSheetBlurred}
                    alt="Price Sheet (Locked)"
                    className="img-fluid rounded-4 shadow-lg"
                    style={{
                      filter: "blur(10px) brightness(0.9)",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />

                  {/* Overlay with Unlock Button */}
                  <div
                    className="position-absolute top-50 start-50 translate-middle text-center w-100 px-4"
                    style={{ zIndex: 10 }}
                  >
                    <h4 className="text-white mb-4 fw-semibold">
                      Price Sheet & Payment Structure
                    </h4>

                    <button
                      className="btn mt-4 btn-warning bg-main border-0 btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
                      style={{
                        color: "#fff",
                        fontSize: "1.1rem",
                      }}
                      onClick={handleOpenForm}
                    >
                      Unlock Price Sheet
                    </button>
                  </div>

                  {/* Optional Dark Overlay for Better Contrast */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ's */}
      <section className="py-5 py-lg-7 bg-light">
        <div className="container">
          <motion.h2
            className="text-center display-5 fw-light mb-5 text-uppercase tracking-wider"
            style={{ color: "#BFA05B", letterSpacing: "0.2em" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqs.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-bottom border-light pb-4 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Question */}
                  <button
                    className="w-100 text-start bg-transparent border-0 d-flex justify-content-between align-items-center"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                  >
                    <h5 className="fw-semibold text-dark mb-0 pe-4">
                      {item.q}
                    </h5>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-main fs-3"
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Answer - Animated Collapse */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-secondary pt-3 pe-5 lead">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <motion.button
              className="btn btn-dark bg-main border-0 btn-lg px-5 py-3 rounded-pill fw-bold shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenForm}
            >
              Book Free Site Visit
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="w-100 py-5 contact-bg">
        <div className="container">
          <div className="row g-4">
            {/* -------------------------------------- */}
            {/* LEFT SIDE */}
            {/* -------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-lg-6"
            >
              <div
                className="p-5 rounded-4 h-100"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(70,70,70,0.4), rgba(40,40,40,0.4))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <img src={Logo} className="img-fluid mb-4" alt="Rise With 9" />

                <h1 className="text-main fw-bold display-4">Rise With 9</h1>

                <p className="text-main fs-3 mt-3">
                  9 is not just a number
                  <br />
                  it's a narrative
                </p>

                <hr className="border-white opacity-25 mt-5 mb-3" />

                <p className="text-white fw-semibold text-center">
                  TGRERA No: P024000009942
                </p>

                {/* Social Icons */}
                <div className="d-flex gap-3 mt-3">
                  {/* <Facebook className="text-warning" />
                  <Instagram className="text-warning" />
                  <Youtube className="text-warning" /> */}
                </div>
              </div>
            </motion.div>

            {/* -------------------------------------- */}
            {/* RIGHT SIDE - FORM */}
            {/* -------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-lg-6 col-12"
            >
              <div
                className="p-5 p-md-4 p-3 rounded-4 h-100"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(70,70,70,0.4), rgba(40,40,40,0.4))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <h2 className="text-white text-center mb-4 fs-2 fs-md-1">
                  CONTACT US
                </h2>

                {/* Form */}
                <div className="d-flex flex-column gap-3">
                  <input
                    type="text"
                    className="form-control text-white py-3 bg-light bg-opacity-50 border-0"
                    placeholder="Your Name"
                  />

                  <input
                    type="email"
                    className="form-control text-white py-3 bg-light bg-opacity-50 border-0"
                    placeholder="Email Address"
                  />

                  <input
                    type="text"
                    className="form-control text-white py-3 bg-light bg-opacity-50 border-0"
                    placeholder="Phone Number"
                  />

                  {/* Checkbox */}
                  <div className="d-flex align-items-start">
                    <input type="checkbox" className="me-2 mt-1" />
                    <p className="text-white small m-0">
                      I agree to receive communications about Rise With 9 and
                      accept the terms & conditions. I may be contacted via
                      phone, SMS, email, or WhatsApp for updates & offers. Your
                      information will remain confidential.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex flex-column flex-md-row gap-3">
                    <button
                      className="btn btn-warning bg-main border-1 px-4 py-3 fw-semibold w-100"
                      style={{ borderRadius: "10px" }}
                      onClick={handleOpenForm}
                    >
                      Schedule Your Visit
                    </button>

                    <button
                      className="btn btn-outline-warning px-4 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2 w-100"
                      style={{ borderRadius: "10px" }}
                      onClick={handleOpenForm}
                    >
                      <i className="bi bi-download"></i> Download Brochure
                    </button>
                  </div>

                  <hr className="border-secondary" />

                  {/* Contact Info */}
                  <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center text-white mt-2 text-center">
                    <a
                      href="tel:+919652389333"
                      className="d-flex align-items-center justify-content-center gap-2 text-decoration-none flex-wrap"
                    >
                      <span className="text-white fw-semibold fs-6">
                        Call Us:
                      </span>

                      <FaPhoneAlt className="text-main fs-4" />

                      <span className="text-main fw-bold fs-4">
                        +91 96523 89333
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-white py-4">
        <div className="container text-center">
          {/* Copyright */}
          <p className="mb-3">© 2025 TRILIGHT. All Rights Reserved.</p>

          {/* Disclaimer */}
          <p className="footer-disclaimer small mb-0">
            Disclaimer: Please note that this website is not an official RERA
            website and serves only as an informational portal managed by a
            RERA-authorized real estate agent.
            <strong> Rise With 9 by Trilight</strong> is a RERA-registered
            project. Authorized Channel Partner | Channel Partner RERA Number:
            Coming Soon | Project RERA Number: Coming Soon. The pricing,
            availability, and all details on this website are subject to change
            without prior notice. Images on this website are for representation
            purposes only and may not reflect the final project. Your contact
            details may be shared with RERA-registered developers for
            communication as needed. All website content is protected by
            copyright and intellectual property laws. Unauthorized use or
            duplication of content is strictly prohibited. For accurate and
            updated information regarding pricing, availability, services, or
            other project details, please contact us directly via the official
            contact details provided on this website.
          </p>
        </div>
      </footer>

      {/* Form Popup Modal */}
      {showForm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.7)", zIndex: 1050 }}
        >
          <div
            className="position-relative bg-white rounded p-4"
            style={{ width: "90%", maxWidth: "500px" }}
          >
            {/* Close button */}
            <button
              type="button"
              className="btn-close position-absolute"
              style={{ top: "10px", right: "10px" }}
              onClick={handleCloseForm}
            ></button>

            <ContactForm />
          </div>
        </div>
      )}

      {/* ✅ WhatsApp Floating Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fab"
        initial={{ y: 0 }}
        animate={{ y: [-5, -15, -5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="whatsapp-inner d-flex flex-column align-items-center justify-content-center">
          {/* Text above Icon */}
          <p className="whatsapp-text mb-1 text-style">
            WhatsApp For More Information
          </p>

          {/* Official WhatsApp Icon (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M20.52 3.48A11.86 11.86 0 0 0 12 .5a11.88 11.88 0 0 0-8.44 3C.96 6.5.4 9.86 1.5 12.9l-1 3.65 3.74-1.02A11.9 11.9 0 0 0 12 23.5a11.86 11.86 0 0 0 8.52-3.48A11.83 11.83 0 0 0 24 12.02a11.83 11.83 0 0 0-3.48-8.54zM12 21.5c-2.16 0-4.26-.63-6.05-1.82l-.43-.27-2.64.72.71-2.57-.28-.45A9.85 9.85 0 0 1 2 12.01 9.96 9.96 0 0 1 12 2c2.65 0 5.14 1.03 7.02 2.9A9.93 9.93 0 0 1 22 12a9.94 9.94 0 0 1-2.93 7.07A9.88 9.88 0 0 1 12 21.5zm5.22-7.3c-.28-.14-1.66-.82-1.91-.92-.26-.1-.45-.14-.63.14-.18.27-.72.92-.89 1.1-.16.18-.33.2-.61.07-.28-.14-1.17-.43-2.23-1.36a8.33 8.33 0 0 1-1.54-1.91c-.16-.27-.02-.42.12-.56.12-.12.28-.33.42-.49.14-.16.18-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.63-1.52-.87-2.08-.23-.55-.47-.48-.63-.49-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28s.99 2.64 1.13 2.82c.14.18 1.94 3.08 4.7 4.34 2.77 1.26 2.77.85 3.27.8.5-.05 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.27-.2-.59-.34z"
              fill="white"
            />
          </svg>
        </div>
      </motion.a>
    </div>
  );
}
