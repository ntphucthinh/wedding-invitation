import { supabase } from "@/lib/supabase";
import type { Guest } from "@/types/guest";

export const getGuestByUuid = async (uuid: string): Promise<Guest | null> => {
  const { data, error } = await supabase
    .from("guests")
    .select("id, uuid, name")
    .eq("uuid", uuid)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
