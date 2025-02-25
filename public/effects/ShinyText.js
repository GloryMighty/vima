import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '', hoverClass = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className} ${hoverClass}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
