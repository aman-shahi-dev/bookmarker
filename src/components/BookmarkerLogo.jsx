const BookmarkerLogo = ({
  width = "100%",
  height = "auto",
  className = "",
  ...props
}) => (
  <svg
    viewBox="0 0 400 400"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={200} cy={200} r={0} fill="ffffff" />
    <text
      x={200}
      y={300}
      fontFamily="Inter, Arial, sans-serif"
      fontSize={300}
      fontWeight={900}
      fill="#000000"
      textAnchor="middle"
      stroke="#ffffff"
      strokeWidth={10}
    >
      B
    </text>
  </svg>
);

export default BookmarkerLogo;
