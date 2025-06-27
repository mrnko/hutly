import './Header.scss';
import Navigation from '../Navigation';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header className="header">
      <Logo parentClassName="header" />
      <Navigation parentClassName="header" />
      <Button parentClassName="button" text="Contact Us" />
    </header>
  );
};

export default Header;
