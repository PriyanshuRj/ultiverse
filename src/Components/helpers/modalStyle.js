export  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#010101',
      zIndex: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'transparent',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      border: 'none',
      outline: 'none',
      padding: '0'
    }
  }