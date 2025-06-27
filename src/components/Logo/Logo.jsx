import './Logo.scss';
import logo from '/images/logo.svg';

const Logo = ({ parentClassName = '' }) => {
  const className = `${parentClassName}__logo logo`;

  return (
    <div className={className}>
      <a href="#" className="logo__link">
        <img
          className="logo__image"
          src={logo}
          alt="Hutly — Real Estate React Landing Page"
          width="135"
          height="60"
        />
      </a>
    </div>
  );
};

export default Logo;
