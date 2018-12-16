import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  spinner: {
    color: '#aa90c6',
    animationDuration: '550ms',
  },
});

function Spinner({ classes }) {
  return (
    <CircularProgress
      variant='indeterminate'
      disableShrink
      className={classes.spinner}
      size={24}
      thickness={4}
    />
  );
}

export default withStyles(styles)(Spinner);
