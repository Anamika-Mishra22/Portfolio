import AboutPhoto from "./AboutPhoto";
import ScrollWords from "./ScrollWords";
import Reveal from "./Reveal";
import { statement, intro } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 py-10 px-6 md:px-16 text-white">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        
        {/* Left Side: 3D Animated Photo component */}
        <div className="w-full flex justify-center">
          <AboutPhoto />
        </div>

        {/* Right Side: Text & Bio Content */}
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-linear-to-r from-purple-500 via-fuchsia-500 to-orange-400 p-[2px] shadow-lg shadow-purple-500/20">
              <span className="block rounded-full bg-[#07060d] px-5 py-1.5 text-sm font-semibold text-white">
                About Me
              </span>
            </span>
          </Reveal>

          <ScrollWords
            text={statement}
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl text-white"
          />

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-lg text-white/70 leading-relaxed">
              {intro}
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}