import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="DateFinish" source="dateFinish" />
        <DateTimeInput label="DateStart" source="dateStart" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Confirmed", value: "Confirmed" },
            { label: "Pending", value: "Pending" },
            { label: "Rejected", value: "Rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
