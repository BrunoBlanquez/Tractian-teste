import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { AssetList, AssetView } from "./Asset";
import { AssetEdit, AssetCreate } from "./Asset";
import { CompanyList, CompanyEdit, CompanyCreate } from "./Companies";
import { UnitList, UnitEdit, UnitCreate } from "./Units";
import { UserList, UserEdit, UserCreate } from "./Users";
import { Theme } from "./Theme";

const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/tractian/fake-api/"
);
const App = () => (
  <Admin dataProvider={dataProvider} theme={Theme}>
    <Resource
      name="assets"
      list={AssetList}
      show={AssetView}
      edit={AssetEdit}
      create={AssetCreate}
    />
    <Resource
      name="companies"
      list={CompanyList}
      edit={CompanyEdit}
      create={CompanyCreate}
    />
    <Resource
      name="units"
      list={UnitList}
      edit={UnitEdit}
      create={UnitCreate}
    />
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);

export default App;
