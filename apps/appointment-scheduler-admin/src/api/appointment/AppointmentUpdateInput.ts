export type AppointmentUpdateInput = {
  dateFinish?: Date | null;
  dateStart?: Date | null;
  status?: "Confirmed" | "Pending" | "Rejected" | null;
};
