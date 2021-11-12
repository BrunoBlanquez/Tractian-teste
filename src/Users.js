import * as React from "react";
import {
  List,
  TextField,
  ReferenceField,
  Datagrid,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  EmailField,
} from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="name" />
      <ReferenceField source="unitId" reference="units">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="companyId" reference="companies">
        <TextField source="id" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit title={<EditTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="email" />
      <TextInput source="name" />
      <ReferenceInput source="unitId" reference="units">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="companyId" reference="companies">
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="email" />
      <TextInput source="name" />
      <ReferenceInput source="unitId" reference="units">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="companyId" reference="companies">
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

const EditTitle = ({ record }) => {
  return <span>Edit {record ? `${record.name}` : ""}</span>;
};
