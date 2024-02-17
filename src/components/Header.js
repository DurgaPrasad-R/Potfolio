const Header = () => {
  // functional component
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="font-signature text-3xl font-bold">Logo</div>
      <div>
        <ul className="flex">
          <li className="mx-4">Home</li>
          <li className="mx-4">Home</li>
          <li className="mx-4">Home</li>
          <li className="mx-4">Home</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
