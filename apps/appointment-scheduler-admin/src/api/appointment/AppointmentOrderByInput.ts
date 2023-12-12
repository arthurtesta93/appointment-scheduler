import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  dateEnd?: SortOrder;
  dateStart?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  state?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
