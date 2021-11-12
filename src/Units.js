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
} from "react-admin";

export const UnitList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="companyId" reference="companies">
        <TextField source="id" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const UnitEdit = (props) => (
  <Edit title={<EditTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <ReferenceInput source="companyId" reference="companies">
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const UnitCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <ReferenceInput source="companyId" reference="companies">
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

const EditTitle = ({ record }) => {
  return <span>Edit {record ? `${record.name}` : ""}</span>;
};
