import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import { usePortfolio } from './hooks/usePortfolio';

export default function App() {
  const { data, loading } = usePortfolio();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowLoader(false), 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (showLoader) return <Loader />;

  return (
    <div className="noise min-h-screen bg-ink-900">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero data={data} />
        <Skills skills={data?.skills || []} />
        <Projects projects={data?.projects || []} />
        <Experience experience={data?.experience || []} certifications={data?.certifications || []} />
        <Education education={data?.education || []} />
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}
