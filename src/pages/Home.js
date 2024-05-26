import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import ClubCard from '../components/ClubCard';
import Footer from '../components/Footer';

export default function Home() {
  const clubCardRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar scrollToClubCard={() => scrollToRef(clubCardRef)} scrollToFooter={() => scrollToRef(footerRef)} />
      <Carousel />
      <h3 className='display-4 font-weight-bold text-muted' style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center' }}>CLUBS</h3>
      <div ref={clubCardRef}>
        <ClubCard />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
