import PropTypes from 'prop-types';
import './style.scss';

function Header({
  children,
  pageTitle,
  // backgroundImage,
  specificClass,
  ...props
}) {
  // const headerBg = {
  //   backgroundImage: `url(${backgroundImage})`,
  // };
  const headerClasses = `pages__header ${specificClass || ''}`;

  return (
    <header className={headerClasses} {...props}>
      <h1 className="page__header-title header">{pageTitle}</h1>
      {children}
    </header>
  );
}

Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  pageTitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  backgroundImage: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  specificClass: PropTypes.string,
};

export default Header;
