export const NavbarStyles = {
  Container: {
    display: 'flex',
    backgroundColor: 'blue',
    height: '50px',
    width: '100vw',
    color: 'white',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },

  Brand: {
    fontFamily: 'sans-serif',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: 'orange',
    marginLeft: '10px',
    fontSize: '1.25rem',
    minWidth: '80px',
    height: '50px'
  },

  Items: {
    Container: {
      display: 'flex',
      listStyle: 'none',
      overflow: 'hidden',
      marginRight: '50px',
      height: '50px',
      paddingTop: '10px'
    },
    MenuItem: {
      fontFamily: 'sans-serif',
      padding: '5px'
    }
  }
};
