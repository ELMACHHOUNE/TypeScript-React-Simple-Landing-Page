type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#393E46] text-[#DFD0B8] px-6 py-3 rounded-full shadow-lg hover:bg-[#222831] hover:text-[#DFD0B8] border-2 border-[#948979] transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-[#948979]"
    >
      {label}
    </button>
  );
};
export default Button;
