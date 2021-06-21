import React, { useRef, useState } from "react";
import "./FormComponent.css";
import { Box, Text, FormControl, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { apiUrl } from "../../constants";

function FormComponent() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const userIdRef = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/posts`, {
        title: titleRef.current.value,
        body: bodyRef.current.value,
        userId: userIdRef.current.value,
      });

      console.log(response.data);

      if (response.data) {
        setErr("");
        setSuccess("Submitted successfully!");
        setTimeout(() => setSuccess(""), 2000);
      }
    } catch (err) {
      console.error(err);
      setSuccess("");
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };

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
            <Input
              ref={titleRef}
              className="FormComponent__Input"
              size="md"
              type="text"
              placeholder="Title"
              required
            />
            <Input
              ref={bodyRef}
              className="FormComponent__Input"
              size="md"
              type="text"
              placeholder="Body"
              required
            />
            <Input
              ref={userIdRef}
              className="FormComponent__Input"
              size="md"
              type="Number"
              placeholder="UserId"
              required
              errorBorderColor="red"
            />
          </Box>
          {err && <p className="errMsg">{err}</p>}
          {success && <p className="successMsg">{success}</p>}
          <Button
            type="submit"
            width="7rem"
            variant="solid"
            isLoading={loading}
            loadingText="Submitting"
            style={{
              color: "#F9FAFB",
              background: "#1F2937",
              padding: "0.5rem",
            }}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default FormComponent;
