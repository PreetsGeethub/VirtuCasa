import Header from "../components/Header";
import React from "react";
import Hero from "../components/Hero";


const Home = () => {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="">
          <Hero/>
        </section>
      </main>
    </>
  );
};

export default Home;
