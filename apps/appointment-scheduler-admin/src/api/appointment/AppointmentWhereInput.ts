import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppointmentWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  dateEnd?: DateTimeFilter;
  dateStart?: DateTimeFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  state?: StringNullableFilter;
  status?: "Confirmed" | "Pending" | "Cancelled";
};
