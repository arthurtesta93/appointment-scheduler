export type AppointmentUpdateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  dateEnd?: Date;
  dateStart?: Date;
  location?: string | null;
  state?: string | null;
  status?: "Confirmed" | "Pending" | "Cancelled" | null;
};
