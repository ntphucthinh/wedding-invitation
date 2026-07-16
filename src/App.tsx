import { lazy, Suspense, useCallback, useState } from 'react';
import Hero from '@/components/wedding/Hero';
import Couple from '@/components/wedding/Couple';
import Popup from '@/components/wedding/Popup';

const Story = lazy(() => import('@/components/wedding/Story'));
const Gallery = lazy(() => import('@/components/wedding/Gallery'));
const Countdown = lazy(() => import('@/components/wedding/Countdown'));
const Event = lazy(() => import('@/components/wedding/Event'));
const RSVP = lazy(() => import('@/components/wedding/RSVP'));
const Wishes = lazy(() => import('@/components/wedding/Wishes'));
const Footer = lazy(() => import('@/components/wedding/Footer'));

function App() {
  const [confirmationName, setConfirmationName] = useState('');
  const [refreshWishesSignal, setRefreshWishesSignal] = useState(0);
  const handleRsvpSubmitted = useCallback((name: string) => {
    setConfirmationName(name);
    setRefreshWishesSignal((value) => value + 1);
  }, []);
  const closeConfirmation = useCallback(() => setConfirmationName(''), []);

  return (
    <div className="min-h-screen bg-wedding-cream text-gray-800">
      <Popup name={confirmationName} onClose={closeConfirmation} />
      <Hero />
      <Couple />
      <Suspense fallback={<div className="h-24 bg-wedding-cream" aria-hidden="true" />}>
        <Story />
        <Gallery />
        <Countdown />
        <Event />
        <RSVP onSubmitted={handleRsvpSubmitted} />
        <Wishes refreshSignal={refreshWishesSignal} />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
