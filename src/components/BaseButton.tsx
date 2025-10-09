interface IBaseButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const BaseButton: React.FC<IBaseButtonProps> = ({
  label,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={`px-6 py-3 border font-bold text-xl rounded-lg ${className}`}
      onClick={onClick}
    >
      {label || children}
    </button>
  );
};

export default BaseButton;
