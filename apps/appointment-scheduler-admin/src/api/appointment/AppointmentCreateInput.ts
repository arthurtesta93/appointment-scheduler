export type AppointmentCreateInput = {
  dateFinish?: Date | null;
  dateStart?: Date | null;
  status?: "Confirmed" | "Pending" | "Rejected" | null;
};
