import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RuleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Discription" source="discription" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
