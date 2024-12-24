import About from "./components/About"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App