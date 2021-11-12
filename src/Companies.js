import * as React from "react";
import {
  List,
  TextField,
  Datagrid,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const CompanyList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const CompanyEdit = (props) => (
  <Edit title={<EditTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const CompanyCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

const EditTitle = ({ record }) => {
  return <span>Edit {record ? `${record.name}` : ""}</span>;
};
