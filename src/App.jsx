import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useImagePreloader } from "./hooks/useImagePreloader";
import './index.css'

const ALL_IMAGES = [
  '/hero-bg.jpg',
  '/tolu-olubode-PlBsJ5MybGc-unsplash.jpg',
  '/infra.jpg',
  '/residential.jpg',
  '/commercial.jpg',
  '/institutional.jpg',
  '/energy.jpg',
  '/sustainable.jpg',
];
export default function App() {
  const imagesLoaded = useImagePreloader(ALL_IMAGES);

  if (!imagesLoaded) {
    return (
      <div style={{
        position: 'fixed', inset: 0,
        backgroundColor: '#FFFFF',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '20px'
      }}>
        <img src="/logo.jpg" alt="ECIVC" style={{ width: 90, height: 130, borderRadius: '40%', objectFit: 'contain' }} />
        <div style={{
          width: 200, height: 4, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 999, overflow: 'hidden'
        }}>
          <div style={{
            height: '100%', width: '40%',
            backgroundColor: '#FFC857',
            borderRadius: 999,
            animation: 'slide 1.6s ease-in-out infinite'
          }} />
        </div>
        <style>{`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(600%); }
          }
        `}</style>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Values />
      <Contact />
      <Footer />
    </>
  );
}