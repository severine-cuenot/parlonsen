import PropTypes from 'prop-types';
import './style.scss';

function Container({ children, ...props }) {
  return (
    <div className="container" {...props}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
