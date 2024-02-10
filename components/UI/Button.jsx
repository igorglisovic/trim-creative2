const Button = ({
  children,
  className,
  style,
  disabled,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      className={`disabled:cursor-default uppercase text-white bg-main-gradient px-[2.7em] py-3 rounded-full text-xs lg:text-sm font-semibold ${className}`}
      style={style}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default Button
