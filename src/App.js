import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import HeroImage from "./assets/hero_img.png";
import pc_img from "./assets/pc_img.png";
import search_img from "./assets/search.png";


function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Fixed Navbar */}
      <Navbar />

      <main className="pt-[102px]">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            {/* Background image */}
            <img src={HeroImage} alt="Hero" className="hero-img" />

            {/* Overlay card */}
            <div className="hero-overlay">
              <h1 className="hero-title">
                We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
              </h1>
              <button className="hero-btn">GET FREE CONSULTATION</button>
            </div>
          </div>
        </section>
        <section className="sec498">
          <div className="sec498-container">
            <div className="sec498-row">
              <div className="sec498-img">
                <img src={pc_img} alt="Web & Mobile App Development" />
              </div>
              <div className="sec498-text">
                <h3>Web & Mobile App Development</h3>
                <p>
                  Your web and mobile Apps are pieces of the puzzle to grow your
                  business. We use frameworks which tailor content and engagement
                  methods to respond to different intents shown by your potential
                  customers who interact with your business online.
                </p>
                <button className="hero-btn">LEARN MORE</button>
              </div>
            </div>
          </div>
        </section>
        <section className="sec498">
            <div className="sec498-row sec498-row-reverse">
              <div className="sec498-img">
                <img src={search_img} alt="Digital Strategy Consulting" />
              </div>
              <div className="sec498-text">
                <h3>Digital Strategy Consulting</h3>
                <p>
                  Your digital strategy should complement the overall marketing
                  strategy of the company. In online marketing, each component will
                  never work in isolation and every business needs a different mix.
                  We provide a clear concept and strategic overview to find the most
                  efficient model for your business.
                </p>
                <button className="hero-btn">LEARN MORE</button>
              </div>
            </div>
        </section>

        {/* Placeholder content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold">Welcome to AT Digital</h2>
          <p className="mt-2 text-slate-600">
            Replace this with your Services, About, Contact, and Careers sections.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
