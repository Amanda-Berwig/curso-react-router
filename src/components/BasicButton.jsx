export const BasicButton = ({ children }) => {
  return (
    <button className="bg-[#7D5A50] text-white py-2 px-6 rounded-full text-sm font-medium hover:opacity-90 transition">
      {children}
    </button>
  );
};
