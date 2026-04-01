import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: "[Client testimonial to be added — real words from a client about the programme they went through and what changed for them.]",
      author: "HR Leader · Global Organization",
    },
    {
      text: "[Client testimonial to be added — real words from a client about the programme they went through and what changed for them.]",
      author: "People Manager · Tech Company",
    },
    {
      text: "[Client testimonial to be added — real words from a client about the programme they went through and what changed for them.]",
      author: "L&D Head · Enterprise",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="site-testimonials">
      <div className="testi-inner">

        {/* LEFT CARD WITH SCROLL ANIMATION */}
        <div className="testi-card">
  <div className="testi-qmark">“</div>

  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <p className="testi-text">
        {testimonials[index].text}
      </p>

      <p className="testi-attr">
        {testimonials[index].author}
      </p>
    </motion.div>
  </AnimatePresence>
</div>

        {/* RIGHT SIDE */}
        <div>
          <p className="testi-kicker">Client Stories</p>

          <h2 className="testi-h2">
            Real words.
            <p>
                Real programmes.
            </p>
            Real change.
          </h2>

          <div className="testi-arrows">
            <button className="testi-arrow" onClick={prevSlide}>
              ←
            </button>
            <button className="testi-arrow" onClick={nextSlide}>
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}