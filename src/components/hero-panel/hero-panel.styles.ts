export const HeroPanelStyles = (exposedStyles: any, debugMode?: {state: boolean, color: string}) => {
  const styles =  {
    Container: {
      display: 'block',
      height: '100vh',
      width: '100vw',
      backgroundColor: exposedStyles?.containerBgColor || 'black',
      position: 'relative',
    },
    DebugContainer: {
      Icon: {
        position: 'fixed',
        height: '40px',
        width: '40px',
        backgroundColor: 'blue',
        borderRadius: '200px',
        top: '20px',
        right: '20px',
        zIndex: 9999,
      },
      backgroundColor: 'rgba(0, 0, 0, .4)',
      color: 'white',
      position: 'fixed',
      top: '0',
      right: '0',
      height: '100vh',
      width: '500px',
    },
    ContentContainer: {
    position: 'absolute',
      top: '20px',
      border: '2px solid blue',
      height: '80vh',
      width: '40vw',
      marginLeft: '50px'
  },
  ContentHeader: {
    fontFamily: 'Arial',
      color: 'white',
      fontSize: '3rem'
  },
  ContentBody: {
    color: 'orange',
    fontSize: '1rem',
  }
};

  // if (debugMode.state === true) {
  //   const keys = Object.keys(styles);
  //   keys.forEach((key) => {
  //
  //   })
  // }
  return styles;
  };


export const HeroPanelPalette = [
  {
    name: 'Dark Green',
    value: '#264653'
  },
  {
    name: 'Light Green',
    value: '#2a9d8f'
  },
  {
    name: 'Light Orange',
    value: '#e9c46a',
  },
  {
    name: 'Orange',
    value: '#f4a261'
  },
  {
    name: 'Dark Orange',
    value: '#e76f51'
  },
  {
    name: 'Dark Gray',
    value: '#312C2CFF'
  }
];
