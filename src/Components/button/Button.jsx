import PropTypes from 'prop-types';

import './Button.css';

function Button({texto}) {
  return <button className="custom-button">{texto}</button>;
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Button;