const Button = ({ children, className, style }) => {
  return (
    <button
      className={`uppercase text-white bg-main-gradient px-[2.7em] py-3 rounded-full text-xs lg:text-sm font-semibold ${className}`}
      style={style}
    >
      {children}
    </button>
  )
}

export default Button
