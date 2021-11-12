import * as React from "react";
import {
  List,
  TextField,
  NumberField,
  ReferenceField,
  Datagrid,
  ImageField,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  Create,
  Show,
  TabbedShowLayout,
  Tab,
  DateField,
} from "react-admin";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import solidGauge from "highcharts/modules/solid-gauge";
import "./Style.css";

highchartsMore(Highcharts);
solidGauge(Highcharts);

var gaugeOptions = {
  chart: {
    type: "solidgauge",
  },

  title: null,

  pane: {
    center: ["50%", "85%"],
    size: "140%",
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
      innerRadius: "60%",
      outerRadius: "100%",
      shape: "arc",
    },
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  // the value axis
  yAxis: {
    stops: [
      [0.2, "#DF5353"], // red
      [0.4, "#DDDF0D"], // yellow
      [0.7, "#55BF3B"], // green
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70,
    },
    labels: {
      y: 16,
    },
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true,
      },
    },
  },
};

const HealthScoreChart = (props) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: "Health Score",
          },
        },

        credits: {
          enabled: false,
        },

        series: [
          {
            name: "HealthScore",
            data: [props.record.healthscore],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4"> Health Score</span>' +
                "</div>",
            },
            tooltip: {
              valueSuffix: " Unit",
            },
          },
        ],
      })}
    />
  );
};

export const AssetView = (props) => {
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Informações Gerais" style={{ fontWeight: "bold" }}>
          <TextField label="Id" source="id" />
          <TextField source="model" />
          <TextField source="name" />
          <TextField source="sensors" />
          <ImageField source="image" />
          <ReferenceField source="unitId" reference="units">
            <TextField source="id" />
          </ReferenceField>
          <ReferenceField source="companyId" reference="companies">
            <TextField source="id" />
          </ReferenceField>
        </Tab>
        <Tab label="Métricas" path="metrics" style={{ fontWeight: "bold" }}>
          <TextField source="status" />
          <NumberField source="metrics.totalCollectsUptime" />
          <DateField source="metrics.lastUptimeAt" />
          <NumberField source="metrics.totalUptime" />
          <HealthScoreChart {...props} />
        </Tab>
        <Tab label="Especificações" path="specs" style={{ fontWeight: "bold" }}>
          <NumberField source="specifications.maxTemp" />
          <TextField source="model" />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export const AssetList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show" className="assetList">
      <TextField source="id" />
      <TextField source="sensors" />
      <TextField source="model" />
      <TextField source="status" />
      <NumberField source="healthscore" />
      <TextField source="name" />
      <ImageField source="image" />
      <ReferenceField source="unitId" reference="units">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="companyId" reference="companies">
        <TextField source="id" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const AssetEdit = (props) => (
  <Edit title={<EditTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="sensors" />
      <TextInput source="model" />
      <TextInput source="status" />
      <NumberInput source="healthscore" />
      <TextInput source="name" />
      <TextInput source="image" />
      <NumberInput source="specifications.maxTemp" />
      <NumberInput source="metrics.totalCollectsUptime" />
      <ReferenceInput source="unitId" reference="units">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="companyId" reference="companies">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="responsible" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const AssetCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="sensors" />
      <TextInput source="model" />
      <TextInput source="status" />
      <NumberInput source="healthscore" />
      <TextInput source="name" />
      <TextInput source="image" />
      <NumberInput source="specifications.maxTemp" />
      <NumberInput source="metrics.totalCollectsUptime" />
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
  return <span>Edit {record ? `${record.sensors}` : ""}</span>;
};
