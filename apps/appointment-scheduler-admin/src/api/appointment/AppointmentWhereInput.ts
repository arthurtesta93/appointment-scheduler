import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppointmentWhereInput = {
  dateFinish?: DateTimeNullableFilter;
  dateStart?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Confirmed" | "Pending" | "Rejected";
};
