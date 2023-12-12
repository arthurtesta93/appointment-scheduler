import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "address";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.address?.toString() || String(record.id);
};
