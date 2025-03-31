"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  components: {
    Anchor: {
      defaultProps: {
        underline: 'never',
        c: 'green',
      },
    },
  },
});
