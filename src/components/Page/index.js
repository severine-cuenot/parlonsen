import PropTypes from 'prop-types';
import './style.scss';

function Page({ children, ...props }) {
  return (
    <div className="page" {...props}>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
