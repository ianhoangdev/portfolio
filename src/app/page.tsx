import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto">
        <Navbar />
        <main className="pt-8">
          <p className="text-gray-700">
            I am a sophomore student at the University of Florida currently studying Computer Science and Mathematics.
          </p>
        </main>
      </div>
    </div>
  );
}
