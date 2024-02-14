import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { styles } from "./CartPage.style";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { NavLink, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/bird.jpg";
import axios from "axios";
import useSpeechToText from "react-hook-speech-to-text";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import VoiceOverOffIcon from "@mui/icons-material/VoiceOverOff";
import cartempty from "../assets/cat-sitting-in-the-house.svg";

interface Product {
  price: number;
  quantity: number;
}

let cartData = JSON.parse(localStorage.getItem("cart") ?? "[]");

if (cartData.length === 0) {
  cartData = cartData.map((product: Product) => ({ ...product, quantity: 1 }));
} else {
  cartData = cartData.map((product: Product) => ({
    ...product,
    quantity: product.quantity ?? 1,
  }));
}

const CartPage = () => {
  const [products, setProducts] = useState(cartData);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [errors, setError] = useState("");
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  const navigate = useNavigate();

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  const handleQuantityChange = (index: number, increment: boolean = true) => {
    const newProducts = [...products];
    if (increment) {
      newProducts[index].quantity += 1;
    } else if (newProducts[index].quantity > 1) {
      newProducts[index].quantity -= 1;
    }
    setProducts(newProducts);
    localStorage.setItem("cartproducts", JSON.stringify(newProducts));
  };

  // Total Price Function
  const totalPrice = products.reduce(
    (total: number, product: Product) =>
      total + product.price * product.quantity,
    0
  );

  const handleDelete = (index: number) => {
    const updatedProducts = [...cartData];
    updatedProducts.splice(index, 1);

    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
    location.reload();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPincode(event.target.value);
    console.log(pincode);

    axios
      .get(`https://api.postalpincode.in/pincode/${event.target.value}`)
      .then((res) => {
        console.log(res);
        setState(res.data[0].PostOffice[0].State);
        setCity(res.data[0].PostOffice[0].Block);
        setDistrict(res.data[0].PostOffice[0].District);
      })
      .catch((error) => {
        setError("Invalid Pincode");
        console.log(error);
      });

    if (event.target.value.length !== 6) {
      setError("Zip Code must be 6 digits!");
    }

    if (event.target.value.length === 6) {
      setError("");
    }
  };

  const checkout = () => {
    const formData = localStorage.getItem("formData");

    if (!formData) {
      navigate("/signup");
    }
  };

  const handlelogout = () => {
    localStorage.removeItem("formData");
    navigate("/");
  };

  const formatAddress = (district: string, city: string, state: string) => {
    return [district, city, state].filter(Boolean).join(", ");
  };

  return (
    <>
      <Box sx={styles.headContainer}>
        <NavLink to="/">
          <Box sx={styles.head} component="img" src={logo} />
        </NavLink>
        <Box sx={styles.right}>
          <NavLink to={"/cartpage"}>
            <Box sx={styles.cart}>
              <Button variant="contained">
                <ShoppingCartIcon sx={styles.cart} />
              </Button>
              <Box sx={styles.counter}>{cartData ? cartData.length : 0}</Box>
            </Box>
          </NavLink>
          {localStorage.getItem("formData") && (
            <Button color="error" onClick={handlelogout} variant="contained">
              Logout
            </Button>
          )}
        </Box>
      </Box>

      {products.length === 0 ? (
        <Box sx={styles.cartEmpty}>
          <Box component="img" sx={styles.emptycartImg} src={cartempty} />
        </Box>
      ) : (
        <TableContainer sx={styles.tableContainer}>
          <Table sx={styles.table}>
            <TableHead sx={styles.tableHead}>
              <TableRow>
                <TableCell sx={styles.tableCell}>Product</TableCell>
                <TableCell sx={styles.tableCell}>Product Name</TableCell>
                <TableCell sx={styles.tableCell}>Product Price</TableCell>
                <TableCell sx={styles.tableCell}>Quantity</TableCell>
                <TableCell sx={styles.tableCell}>Action</TableCell>
                <TableCell sx={styles.tableCell}></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map(
                (
                  each: {
                    title: string;
                    image: string;
                    price: number;
                    quantity: number;
                  },
                  ind: number
                ) => (
                  <TableRow key={ind}>
                    <TableCell sx={styles.tableItem}>
                      <Box sx={styles.img} component="img" src={each.image} />
                    </TableCell>
                    <TableCell sx={styles.tableItem}>{each.title}</TableCell>
                    <TableCell sx={styles.tableItem}>${each.price}</TableCell>
                    <TableCell sx={styles.tableItem}>{each.quantity}</TableCell>
                    <TableCell>
                      <Box sx={styles.quantityBox}>
                        <Button
                          onClick={() => handleQuantityChange(ind, false)}
                        >
                          <RemoveIcon />
                        </Button>
                        <Box sx={styles.quantityText}>{each.quantity}</Box>
                        <Button onClick={() => handleQuantityChange(ind, true)}>
                          <AddIcon />
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell sx={styles.tableItem}>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(ind)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {products.length > 0 && (
        <Box sx={styles.totalBox}>
          <Box sx={styles.checkout}>
            <Box sx={styles.totalPrice}>
              Total Items: <Box component="span"> {products.length}</Box>
            </Box>
            <Box sx={styles.deliverycharge}>
              Delivery Charges: <Box component="span">$50</Box>
            </Box>
            <Box sx={styles.totalPrice}>
              Total Price: <Box component="span">${totalPrice + 50}</Box>
            </Box>
            <Box>
              <Box sx={styles.voice}>
                Voice Note for Delivery Instructions :
              </Box>
              <Box sx={styles.audioicon}>
                {isRecording ? (
                  <Button>
                    <VoiceOverOffIcon
                      onClick={
                        isRecording ? stopSpeechToText : startSpeechToText
                      }
                    />
                  </Button>
                ) : (
                  <Button>
                    <RecordVoiceOverIcon
                      onClick={
                        isRecording ? stopSpeechToText : startSpeechToText
                      }
                    />
                  </Button>
                )}
                <Box sx={styles.deliveryaddressbox}>
                  <ol>
                    {results.map((result) =>
                      typeof result === "object" ? (
                        <li key={result.timestamp}>{result.transcript}</li>
                      ) : (
                        <li key={result}>{result}</li>
                      )
                    )}
                    {interimResult && <li>{interimResult}</li>}
                  </ol>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.pincode}>
              Enter Pincode (Only Indian Postal Code) :
              <Box component="span" sx={styles.error}>
                {errors}
              </Box>
            </Box>

            <TextField
              name="pincode"
              value={pincode}
              placeholder="Enter PinCode"
              onChange={handleChange}
              sx={styles.textField}
            />
            <Box sx={styles.deliveryaddress}>Delivery Address : </Box>
            <Box sx={styles.deliveryaddressbox}>
              {formatAddress(district, city, state)}
            </Box>
            <Button onClick={checkout} variant="contained" fullWidth>
              CheckOut
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CartPage;
