export const Button = ({ children, ...other }) => {
  return (
    <button className="bg-gray-600 pt-1 pb-1 pr-4 pl-4 rounded-lg font-bold text-white" {...other}>
      {children}
    </button>
  );
};
