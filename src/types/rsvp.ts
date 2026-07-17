export interface RSVP {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export interface CreateRSVPRequest {
  name: string;
  message: string;
}