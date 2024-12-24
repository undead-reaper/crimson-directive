import About from "./components/About"
import Contact from "./components/Contact"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Story from "./components/Story"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </main>
  )
}

export default App