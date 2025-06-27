import './Navigation.scss';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#project', label: 'Project' },
  { href: '#about', label: 'About Us' },
  { href: '#faq', label: 'FAQ' },
];

const Navigation = ({ parentClassName = '' }) => {
  const className = `${parentClassName}__navigation navigation`;

  return (
    <nav className={className}>
      <ul className="navigation__list">
        {navItems.map(({ href, label }) => (
          <li key={href} className="navigation__item">
            <a href={href} className="navigation__link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
