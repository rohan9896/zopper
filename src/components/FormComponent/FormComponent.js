import React from "react";
import "./FormComponent.css";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button
} from "@chakra-ui/react";

function FormComponent() {
  return (
    <Box className="FormComponent">
      <Text>JsonPlaceHolder POST</Text>
      <FormControl>
        <Box className="FormComponent__InputsContainer">
          <Input type="text" placeholder="Title" required />
          <Input type="text" placeholder="Body" required />
          <Input
            type="Number"
            placeholder="UserId"
            required
            errorBorderColor="red"
          />
        </Box>
        <Button
          className="FormComponent__Form__SubmitBtn"
          variant="solid"
          // isLoading
          loadingText="Submitting"
          _hover="#4B5563"
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}

export default FormComponent;
