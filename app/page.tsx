import Info from "@/app/component/Info";
import Skills from "@/app/component/Skills";
import Experience from "@/app/component/Experience";
import Projects from "@/app/component/Projects";
import LeftSide from "@/app/component/LeftSide";
import Services from "@/app/component/Services";
import LeftSideMobile from "@/app/component/LeftSideMobile";

export default function Home() {
  return (
    <div>
      <LeftSideMobile />
      <div className="grid lg:grid-cols-4">
        <div className="lg:col-span-1 hidden lg:inline-block bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
          {/*dark: from-gray-800 to-slate-900, light: from-indigo-500 via-purple-500 to-pink-500  */}
          <LeftSide />
        </div>
        <div className="lg:col-span-3 col-span-full py-10 px-5 overflow-y-scroll max-h-screen">
          <div className="">
            <h1
              className={
                "text-2xl font-semibold bg-blue-100 p-2 rounded-md mb-5"
              }
            >
              About
            </h1>
            <p>
              Hi! I am a passionate web developer with a strong foundation in
              JavaScript, TypeScript, and modern frameworks like React and
              Next.js. With a love for clean code, seamless user!
            </p>
          </div>
          <Info />
          <Experience />
          <Projects />
          <Services />
          <Skills />
        </div>
      </div>
    </div>
  );
}
