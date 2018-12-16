import React, { Fragment } from 'react';
import classNames from 'classnames';

import DoubleChevronRight from '../../assets/images/layout/double-chevron-right.png';
import Fab from '@material-ui/core/Fab';
import Spinner from '../Spinner';

function CustomButton({ disabled, isLoading, onClick, style, text }) {
  return (
    <Fab className='CustomButton' disabled={disabled} onClick={onClick} style={style}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <p>{text}</p>
          <img
            alt='Double chevron droite'
            className={classNames(
              'CustomButton__icon',
              disabled && 'CustomButton__icon__disabled'
            )}
            src={DoubleChevronRight}
          />
        </Fragment>
      )}
    </Fab>
  );
}

CustomButton.defaultProps = {
  text: 'Button',
};

export default CustomButton;
