"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  primaryColor: 'green',
  components: {
    Anchor: {
      defaultProps: {
        underline: 'never',
      },
    },
  },
});
