/* eslint-disable max-len */
// React imports
import PropTypes from 'prop-types';

// Imports
import './style.scss';

function Button({ label, btnstyle, isSubmit }) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`button button__${btnstyle}`}
      title={label}
    >
      <span>{label}</span>
    </button>
  );
}

Button.defaultProps = {
  btnstyle: 'plain',
  isSubmit: false,
  label: '',
};

Button.propTypes = {
  label: PropTypes.string,
  btnstyle: PropTypes.string,
  isSubmit: PropTypes.bool,
};

export default Button;
