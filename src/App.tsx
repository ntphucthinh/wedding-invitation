import { lazy, Suspense, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import Hero from '@/components/wedding/Hero';
import Couple from '@/components/wedding/Couple';
import Popup from '@/components/wedding/Popup';
import MusicPlayer from '@/components/wedding/MusicPlayer';

import { useGuest } from '@/hooks/useGuest';

const Story = lazy(() => import('@/components/wedding/Story'));
const Gallery = lazy(() => import('@/components/wedding/Gallery'));
const Countdown = lazy(() => import('@/components/wedding/Countdown'));
const Event = lazy(() => import('@/components/wedding/Event'));
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
    <div className="min-h-screen bg-[#FAF7F0] text-[#75665D]">
      <Popup name={confirmationName} onClose={closeConfirmation} />
      <Hero />
      <Couple guestName={guest?.name} />
      <Suspense fallback={<div className="h-24 bg-[#FAF7F0]" aria-hidden="true" />}>
        <Story />
        <Gallery />
        <Countdown />
        <Event />
        <RSVP onSubmitted={handleRsvpSubmitted} />
        <Wishes refreshSignal={refreshWishesSignal} />
        <Footer />
      </Suspense>
      <MusicPlayer />
    </div>
  );
}

export default App;