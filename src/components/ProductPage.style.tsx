export const styles = {
  gridContainer: {
    width: "100%",
    margin: "50px 0px",
  },
  headContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 50px",
    position: "sticky",
    top: 0,
    zIndex: "20",
    background: " rgba(255, 255, 255, 1)",
  },
  head: {
    width: "90px",
    height: "90px",
    cursor: "pointer",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  cardContainer: {
    width: "400px",
    background: " rgba(255, 255, 255, 0.75)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur(16px) saturate(180%)",
    webkitBackdropFilter: "blur(16px) saturate(180%)",
    border: "1px solid  rgba(255, 255, 255, 0.75)",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "transform 1s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  imgBox: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  img: {
    width: "200px",
    height: "170px",
    margin : '25px 0'
  },
  title: {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "600",
    padding: "10px",
  },
  ratingBox: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "15px 0",
  },
  price: {
    fontSize: "30px",
    fontWeight: "700",
  },
  addtocartBox: {
    display: "flex",
    justifyContent: "center",
  },
  addtocart: {
    margin: "10px 0",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  cart: {
    margin: "0px 10px",
    position: "relative",
  },
  counter: {
    position: "absolute",
    top: 0,
    right: 10,
    width: "25px",
    height: "25px",
    background: "#000",
    borderRadius: "50%",
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "700",
    margin: "auto",
    color: "#fff",
  },
  category: {
    position: "absolute",
    top: 0,
    background: "#000",
    padding: "10px",
    fontWeight: "600",
    color: "#fff",
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
};
