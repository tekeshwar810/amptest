import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Discription" source="discription" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
