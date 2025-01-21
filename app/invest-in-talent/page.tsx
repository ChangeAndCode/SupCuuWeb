import React from 'react';
import { ProfileCarousel } from './components/ProfileCarousel/index';
import { ContactForm } from './components/ContactForm';
import { Header } from './components/Header';
import { MOCK_PROFILES } from './data/profiles';

const Page = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="INVEST IN TALENT"
        subtitle="GROW YOUR IMPACT"
        heroImage={{
          src: "/CT/tercera.webp",
          alt: "Handshake with medal symbolizing success"
        }}
      />

      <ProfileCarousel profiles={MOCK_PROFILES} />

      <ContactForm />

      <footer className="bg-gray-50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default Page;