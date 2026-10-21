import { lazy, Suspense, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import Hero from '@/components/wedding/Hero';
import Couple from '@/components/wedding/Couple';
import Popup from '@/components/wedding/Popup';
import MusicPlayer from '@/components/wedding/MusicPlayer';

import { useGuest } from '@/hooks/useGuest';

const Gallery = lazy(() => import('@/components/wedding/Gallery'));
const Countdown = lazy(() => import('@/components/wedding/Countdown'));
const Event = lazy(() => import('@/components/wedding/Event'));
const WeddingGift = lazy(() => import('@/components/wedding/WeddingGift'));
const RSVP = lazy(() => import('@/components/wedding/RSVP'));
const Wishes = lazy(() => import('@/components/wedding/Wishes'));
const Footer = lazy(() => import('@/components/wedding/Footer'));

function App() {
  const { uuid } = useParams<{ uuid: string }>();
  const { guest } = useGuest(uuid);

  const [confirmationName, setConfirmationName] = useState('');
  const [refreshWishesSignal, setRefreshWishesSignal] = useState(0);

  const handleRsvpSubmitted = useCallback((name: string) => {
    setConfirmationName(name);
    setRefreshWishesSignal((value) => value + 1);
  }, []);

  const closeConfirmation = useCallback(() => setConfirmationName(''), []);

  return (
    <div className="min-h-screen bg-[#F8F3EA] text-[#796152]">
      <Popup name={confirmationName} onClose={closeConfirmation} />
      <Hero />
      <Couple guestName={guest?.name} />
      <Suspense fallback={<div className="h-24 bg-[#F8F3EA]" aria-hidden="true" />}>
        <Gallery />
        <Countdown />
        <Event />
        <WeddingGift />
        <RSVP onSubmitted={handleRsvpSubmitted} />
        <Wishes refreshSignal={refreshWishesSignal} />
        <Footer />
      </Suspense>
      <MusicPlayer />
    </div>
  );
}

export default App;