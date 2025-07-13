function Button({ children, type = "button", onClick, disabled = false, style = "primary" }) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all";
  const styleClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-blue-100",
    secondary: "bg-dark-3 hover:bg-dark-4 text-blue-200 border border-blue-500/30",
    danger: "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors shadow-sm",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${styleClasses[style]} ${disabled ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5"}`}
    >
      {children}
    </button>
  );
}

export default Button;