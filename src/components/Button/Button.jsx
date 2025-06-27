import './Button.scss';

const Button = ({ parentClassName = '', text, href = false }) => {
  const className = `${parentClassName}__button button`;

  if (href) {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return <button className={className}>{text}</button>;
};

export default Button;
