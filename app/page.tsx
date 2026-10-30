import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import Tools from "@/components/Tools";
import WorkWithMe from "@/components/WorkWithMe";
import Contact from "@/components/Contact";
import ThemeSwitcher from "@/components/ThemeSwitcher";
export default function Home() {
  return (
    <main className="px-6">
      <Nav />
      <ThemeSwitcher/>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Tools />
      <WorkWithMe />
      <Contact />
      {/* <footer className="pb-10 mt-10 text-center text-sm text-muted">
        © 2026 Anamika Mishra
      </footer> */}
    </main>
  );
}