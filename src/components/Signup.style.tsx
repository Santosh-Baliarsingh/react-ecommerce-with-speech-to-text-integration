export const styles = {
    mainContainer: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #000000, #434343)"
      },
      bgStyle : {
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'fixed',
        width : '100%',
        position : 'relative',
        backgroundPosition : 'center',
        height : '100vh'
      },
      formContainer: {
        position : 'absolute',
        width: { sx: "350px", sm: "400px", md: "500px" },
        // height: "500px",
        // border : '2px solid blue',
        // background: " rgba(255, 255, 255, 0.60)",
        background : '#fff',
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur(16px) saturate(180%)",
        webkitBackdropFilter: "blur(16px) saturate(180%)",
        // borderRadius: "10px",
        border: "1px solid  rgba(255, 255, 255, 0.60)",
        borderRadius: "20px",
        // padding: "10px 20px",
      },
      inputEmail: {
        margin: "30px 30px",
      },
      inputPass: {
        margin: "20px 30px",
      },
      head: {
        fontSize: "30px",
        margin: "10px 30px 20px 30px",
        padding : '5px 10px',
        background : '#000',
        fontWeight : '600',
        borderRadius : '5px',
        color : '#fff',
        display : 'inline-block'
      },
      btnContainer: {
        width: { sx: "350px", sm: "400px", md: "500px" },
        // border : '2px solid red',
        padding: "10px 20px",
      },
      loginBtn: {
        margin: "15px 0",
        width: "100%",
      },
      forget: {
        textAlign: "end",
        margin: "10px 30px",
        fontSize: {sx:'18px',md:"20px"},
        curosr: "pointer",
      },
}