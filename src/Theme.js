import { defaultTheme } from "react-admin";
import { createTheme } from "@material-ui/core/styles";
import merge from "lodash/merge";
import createPalette from "@material-ui/core/styles/createPalette";

const palette = createPalette(
  merge({}, defaultTheme.palette, {
    secondary: {
      main: "#020eba",
    },
  })
);

const rawTheme = {
  palette,
};

export const Theme = createTheme(merge({}, defaultTheme, rawTheme));
