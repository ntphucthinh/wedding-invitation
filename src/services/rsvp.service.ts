import { supabase } from '@/lib/supabase';
import type { CreateRSVPRequest, RSVP } from '@/types/rsvp';

export const createRSVP = async (payload: CreateRSVPRequest) => {
  const { error } = await supabase
    .from('rsvp')
    .insert(payload);

  if (error) {
    throw new Error(error.message);
  }
};

export const getRSVPList = async (): Promise<RSVP[]> => {
  const { data, error } = await supabase
    .from('rsvp')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};