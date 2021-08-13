import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
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
