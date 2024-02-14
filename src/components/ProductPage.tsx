import { Box, Button, Divider, Grid, Rating } from "@mui/material";
import { styles } from "./ProductPage.style";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/bird.jpg";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
  };
}

const cartData = JSON.parse(localStorage.getItem("cart") ?? "[]");

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await response.json();
    setProducts(data);
    setLoading(false);
    console.log(data);
  };

  const handlelogout = () => {
    localStorage.removeItem("formData");
    navigate("/");
  };

  const addToCart = (product: Product) => {
    console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const selectedProduct = product;
    const isProductInCart = cart.some(
      (item: { title: string; price: string }) =>
        item.title === selectedProduct.title
    );

    if (isProductInCart) {
      console.log("Product already exists in the cart");
      return;
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Box sx={styles.headContainer}>
        <Box sx={styles.head} component="img" src={logo} />
        <Box sx={styles.right}>
          <NavLink to={"/cartpage"}>
            <Box sx={styles.cart}>
              <Button variant="contained">
                <ShoppingCartIcon sx={styles.cart} />
              </Button>
              <Box sx={styles.counter}>{cartData ? cartData.length : 0}</Box>
            </Box>
          </NavLink>
          {localStorage.getItem('formData') && <Button color="error" onClick={handlelogout}  variant="contained">Logout</Button>}
        </Box>
      </Box>
      {loading ? (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Bars
            height="100"
            width="100"
            color="#000"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </Box>
      ) : (
        <Grid sx={styles.gridContainer} container spacing={2} rowSpacing={5}>
          {products.map((ele: Product) => (
            <Grid key={ele.id} sx={styles.gridItem} item xs={12} sm={6} md={3}>
              <Box sx={styles.cardContainer}>
                <Box sx={styles.imgBox}>
                  <Box sx={styles.img} component="img" src={ele.image}></Box>
                </Box>
                <Divider />
                <Box sx={styles.title}>{ele.title}</Box>
                <Box sx={styles.ratingBox}>
                  <Box sx={styles.price}>${ele.price}</Box>
                  <Box>
                    <Rating
                      readOnly
                      defaultValue={ele.rating.rate}
                      precision={ele.rating.rate}
                    />
                  </Box>
                </Box>
                <Box sx={styles.addtocartBox}>
                  <Button
                    onClick={() => addToCart(ele)}
                    variant="contained"
                    sx={styles.addtocart}
                  >
                    Add to cart
                  </Button>
                </Box>
                <Box sx={styles.category}>{ele.category}</Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProductPage;
