export type Appointment = {
  createdAt: Date;
  dateFinish: Date | null;
  dateStart: Date | null;
  id: string;
  status?: "Confirmed" | "Pending" | "Rejected" | null;
  updatedAt: Date;
};
