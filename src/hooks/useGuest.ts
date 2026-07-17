import { useEffect, useState } from 'react';
import { getGuestByUuid } from '@/services/guest.service';
import type { Guest } from '@/types/guest';

export function useGuest(uuid?: string) {
  const [guest, setGuest] = useState<Guest | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uuid) {
      setGuest(null);
      return;
    }

    const load = async () => {
      setLoading(true);

      try {
        const data = await getGuestByUuid(uuid);

        setGuest(data);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [uuid]);

  return {
    guest,
    loading,
  };
}