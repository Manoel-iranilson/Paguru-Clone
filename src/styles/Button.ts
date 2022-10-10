import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 8,
    fontSize: "sm",
    fontWeight: 400,
  },
  variants: {
    outline: {
      borderWidth: 1.5,
      fontWeight: 400,
    },
    link: {
      fontWeight: 400,
      _hover: {
        textDecoration: "none",
      },
    },
  },
  sizes: {
    md: {
      fontSize: "sm",
    },
  },
  defaultProps: {
     colorScheme: "primary",
  },
};