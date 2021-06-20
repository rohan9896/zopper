import React, { useState } from "react";
import "./FormComponent.css";
import {
  Box,
  Text,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

function FormComponent() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(0);

  const [loading, setLoading] = useState(false);
  
  const [success, setSuccess]= useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body,
      userId
    })

    setLoading(false);
    
    if(response.data) {
      setSuccess("Submitted successfully!");
      setTimeout(() => setSuccess(''), 2000)
    }
  }

  return (
    <Box className="FormComponent">
      <Box className="FormComponent__Heading">
        <Text className="FormComponent__Heading__Text">
          JsonPlaceHolder POST
        </Text>
      </Box>
      <form onSubmit={handleSubmit}>
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
          {success && <p className="successMsg">{success}</p>}
          <Button
            type="submit"
            width="7rem"
            variant="solid"
            isLoading={loading}
            loadingText="Submitting"
            style={{ color: "#F9FAFB", background: "#1F2937", padding: "0.5rem" }}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default FormComponent;
