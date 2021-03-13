export const HeroPanelStyles = (exposedStyles: any) => {
  return {
    Container: {
      display: "block",
      height: "100vh",
      width: "100vw",
      backgroundColor: exposedStyles?.containerBgColor || 'black',
      border: "4px solid red",
      position: "relative"
    },
    ContentContainer: {
    position: "absolute",
      top: "20px",
      border: "2px solid blue",
      height: "80vh",
      width: "40vw",
      marginLeft: "50px"
    // marginTop: '40px'
  },
  ContentHeader: {
    fontFamily: "Arial",
      color: "white",
      fontSize: "3rem"
  },
  ContentBody: {
    color: "orange",
      fontSize: "1rem",
  }
};
  };
