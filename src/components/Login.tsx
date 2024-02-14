import { Box, Button, FormControl, TextField } from "@mui/material";
import { styles } from "./Login.style";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import naruto from "../assets/naruto.jpg";

interface FormData {
  email: string;
  password: string;
}
const Login = () => {
  const [formData, setformData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [showerror, setshowError] = useState(false);

  const navigate = useNavigate();

  const handleinputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const data = JSON.parse(localStorage.getItem("formData") || "{}");
    if (data.email === formData.email && data.password === formData.password) {
      setformData({
        email: "",
        password: "",
      });
      navigate("/cartpage");
    } else {
      setshowError(true);
    }
  };
  return (
    <>
      <Box sx={styles.mainContainer}>
        {/* <Box sx={styles.bgStyle} component="img" src={naruto}></Box> */}
        <Box sx={styles.formContainer}>
          <Box sx={styles.head}>Login here!</Box>
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

            <Box sx={styles.forget}>forget password?</Box>
            <Box sx={styles.btnContainer}>
              <Button type="submit" sx={styles.loginBtn} variant="contained">
                login
              </Button>
              <Link style={{ textDecoration: "none" }} to="/signup">
                <Box sx={styles.register}>
                  Don't have an account register Here!
                </Box>
              </Link>
              {showerror && (
                <Box sx={{ fontSize: "20px", color: "red", margin: "20px 0" }}>
                  Login Failed!
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
