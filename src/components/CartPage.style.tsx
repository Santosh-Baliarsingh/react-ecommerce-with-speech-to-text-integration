export const styles = {
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
  right: {
    display: "flex",
    alignItems: "center",
  },
  cart: {
    margin: "0px 10px",
    position : 'relative'
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
  tableContainer: {
    width: "100%",
    padding: "0 50px",
  },

  table: {
    textAlign: "center",
  },
  tableHead: {
    background: "#000",
  },
  tableCell: {
    fontSize: "30px",
    color: "#fff",
    padding: "30px",
    textAlign: "center",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  tableItem: {
    fontSize: "30px",
    textAlign: "center",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  quantityText: {
    fontSize: "20px",
    fontWeight: "700",
    margin: "0 20px",
  },
  quantityBox: {
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
  },
  totalBox: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
  },
  checkout: {
    border: "2px dotted #000",
    width: "500px",
    margin: "0px 50px",
    padding: "10px",
  },
  totalPrice: {
    fontSize: "20px",
    fontWeight: "600",
    padding: "20px 0",
  },
  deliverycharge: {
    fontSize: "20px",
    fontWeight: "600",
  },
  img: {
    width: "100px",
    height: "100px",
  },
  voice: {
    fontSize: "20px",
    fontWeight: "600",
  },
  audioicon: {
    margin: "10px 0",
  },
  textField: {
    width: "250px",
    margin: "10px 0",
  },
  pincode: {
    fontSize: "20px",
    fontWeight: "600",
  },
  deliveryaddress: {
    margin: "10px",
    fontSize: "20px",
    fontWeight: "600",
  },
  deliveryaddressbox: {
    width: "300px",
    border: "1px dashed",
    padding: "20px",
    background: "#EBEBEB",
    color: "#000",
    margin: "10px 0",
  },
  error: {
    color: "red",
    marginLeft: "10px",
    fontSize: "15px",
  },
  cartEmpty : {
    display : 'flex',
    justifyContent : 'center',
    background : '#F4F5F8',
    width : '100%',
    height : '82vh',
  },
  emptycartImg : {
    width : '300px',
    height : '300px'
  }
};
