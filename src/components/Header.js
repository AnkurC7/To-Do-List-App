import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "rgb(238, 154, 77)" : "rgb(255, 232, 124)"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};
Header.defaultProps = { title: "To Do List" };

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;

// CSS in JS
// const headingStyle={
//     color: "red",
//     backgroundColor: 'black',
// }
// <h2 style={headingStyle}> </h2>
