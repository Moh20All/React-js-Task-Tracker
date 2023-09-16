import Btn from "./Btn";
const Header = ({ title, onShow, showOn }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Btn color="Black" onShow={onShow} showOn={showOn} />
    </header>
  );
};

export default Header;
