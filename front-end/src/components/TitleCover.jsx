import PropTypes from "prop-types";

const TitleCover = ({ title }) => {
  return (
    <div className="flex items-center justify-center bg-blue-200 px-6 py-12 h-56 w-full">
      <h1 className="text-titleText text-2xl font-menuFont font-semibold text-center">
        {title}
      </h1>
    </div>
  );
};

export default TitleCover;

TitleCover.propTypes = {
  title: PropTypes.string.isRequired,
};
