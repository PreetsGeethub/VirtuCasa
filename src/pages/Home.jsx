import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="h-screen bg-black text-white">
          Hero Section
        </section>

        <section className="h-screen bg-gray-900 text-white">
          Section One
        </section>

        <section className="h-screen bg-gray-800 text-white">
          Section Two
        </section>
      </main>
    </>
  );
};

export default Home;
