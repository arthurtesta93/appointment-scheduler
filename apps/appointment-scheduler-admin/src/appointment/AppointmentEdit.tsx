import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
