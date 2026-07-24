import React, { useState } from 'react';
import { EnvelopeModal } from './components/EnvelopeModal';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FamiliesSection } from './components/FamiliesSection';
import { ScheduleOfEvents } from './components/ScheduleOfEvents';
import { OurStory } from './components/OurStory';
import { PhotoGallery } from './components/PhotoGallery';
import { EventDetails } from './components/EventDetails';
import { ScheduleTimeline } from './components/ScheduleTimeline';
import { DressCode } from './components/DressCode';
import { TravelInfo } from './components/TravelInfo';
import { RsvpSection } from './components/RsvpSection';
import { GuestbookSection } from './components/GuestbookSection';
import { RegistrySection } from './components/RegistrySection';
import { FaqSection } from './components/FaqSection';
import { AudioPlayer } from './components/AudioPlayer';
import { Footer } from './components/Footer';

import { INITIAL_GUESTBOOK } from './data/weddingData';
import { GuestRSVP, GuestbookMessage } from './types';

export function App() {
  // const [envelopeOpen, setEnvelopeOpen] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [rsvps, setRsvps] = useState<GuestRSVP[]>([]);
  const [guestbookMessages, setGuestbookMessages] = useState<GuestbookMessage[]>(INITIAL_GUESTBOOK);

  // const handleOpenInvitation = () => {
  //   setEnvelopeOpen(false);
  // };

  const handleReopenEnvelope = () => {
    // setEnvelopeOpen(true);
  };

  const handleOpenRsvpModal = () => {
    const rsvpElement = document.getElementById('rsvp');
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddRsvp = (newRsvp: GuestRSVP) => {
    setRsvps((prev) => [newRsvp, ...prev]);
  };

  const handleAddGuestbookMessage = (msg: GuestbookMessage) => {
    setGuestbookMessages((prev) => [msg, ...prev]);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917972722490', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2825] font-sans selection:bg-[#D4AF37]/20 relative">

      {/* Interactive Virtual Envelope - Commented Out */}
      {/* <EnvelopeModal ... /> */}

      {/* Main Website Header Navigation */}
      <Header
        musicPlaying={musicPlaying}
        setMusicPlaying={setMusicPlaying}
        onReopenEnvelope={handleReopenEnvelope}
        onOpenRsvp={handleOpenRsvpModal}
      />

      {/* Main Content */}
      <main>
        <HeroSection onOpenRsvp={handleOpenRsvpModal} />
        <FamiliesSection />
        <ScheduleOfEvents />
        <PhotoGallery />
        <OurStory />
        <EventDetails />
        <ScheduleTimeline />

        <RsvpSection onAddRsvp={handleAddRsvp} />
        <GuestbookSection
          messages={guestbookMessages}
          onAddMessage={handleAddGuestbookMessage}
        />
      </main>

      {/* Audio Player */}
      <AudioPlayer isPlaying={musicPlaying} setIsPlaying={setMusicPlaying} />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button - Left Side */}
      <a
        href="https://wa.me/917972722490"
        target="_blank"
        rel="noopener noreferrer"
        onClick={openWhatsApp}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5c] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        title="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.917-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2.039c-5.523 0-10 4.477-10 10 0 1.78.463 3.44 1.268 4.88L1 22l5.18-1.36C7.96 21.54 9.92 22 12 22c5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
        </svg>

        {/* Optional Tooltip */}
        <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-[#1B2A4A] text-white text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;