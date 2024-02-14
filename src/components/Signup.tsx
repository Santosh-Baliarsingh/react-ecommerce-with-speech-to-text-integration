import { Box, Button, FormControl, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { styles } from "./Signup.style";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const Signup = () => {
  const [formData, setformData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const handleinputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const validateForm = () => {
    let emailError = "";
    let passwordError = "";
  
    if (!formData.email.includes("@")) {
      emailError = "Invalid email";
    }
  
    if (formData.password.length < 8) {
      passwordError = "Password must be at least 8 characters";
    }
  
    if (!emailError && !passwordError) {
      setEmailError("");
      setPasswordError("");
    }
  
    return { emailError, passwordError };
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { emailError, passwordError } = validateForm();
  
    setEmailError(emailError);
    setPasswordError(passwordError);
  
    if (emailError || passwordError) {
      return;
    }
  
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/login");
  };
  return (
    <>
      <Box sx={styles.mainContainer}>
        <Box sx={styles.formContainer}>
          <Box sx={styles.head}>Register here!</Box>
          <Box component="form" onSubmit={handleSubmit}>
            <Box>
              <FormControl fullWidth>
                <TextField
                  sx={styles.inputEmail}
                  label="Enter email"
                  type="email"
                  name="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleinputChange}
                />
              </FormControl>
            </Box>
            <Box sx={{ fontSize: "20px", color: "red", margin: "5px 30px" }}>{emailError}</Box>
            <Box>
              <FormControl fullWidth>
                <TextField
                  sx={styles.inputPass}
                  type="password"
                  name="password"
                  label="Enter password"
                  variant="outlined"
                  value={formData.password}
                  onChange={handleinputChange}
                />
              </FormControl>
            </Box>
            <Box sx={{ fontSize: "20px", color: "red", margin: "5px 30px" }}>{passwordError}</Box>
            <Box sx={styles.btnContainer}>
              <Button type="submit" sx={styles.loginBtn} variant="contained">
                Register
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
