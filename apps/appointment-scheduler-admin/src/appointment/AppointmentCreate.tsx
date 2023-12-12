import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <DateTimeInput label="Date End" source="dateEnd" />
        <DateTimeInput label="Date Start" source="dateStart" />
        <TextInput label="Location" source="location" />
        <TextInput label="State" source="state" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "confirmed", value: "Confirmed" },
            { label: "pending", value: "Pending" },
            { label: "cancelled", value: "Cancelled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
