export type Appointment = {
  address: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date;
  dateEnd: Date;
  dateStart: Date;
  id: string;
  location: string | null;
  state: string | null;
  status?: "Confirmed" | "Pending" | "Cancelled" | null;
  updatedAt: Date;
};
