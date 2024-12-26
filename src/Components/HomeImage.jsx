import PropTypes from "prop-types";

const HomeImage = ({title, children }) => {

    return (
      <>
        <div className="relative ">
            <img src="Home/home_bg.svg" alt="Home Image" className="h-full w-full" />
            <div className="grid grid-cols-2 absolute top-0 h-full bg-black bg-opacity-50">
                <div className="p-4 text-white flex flex-col justify-center">
                    <p className="text-4xl">{title}</p>
                    <p className="text-lg mt-10">{children}</p>
                </div>
                <div></div>
            </div>
        </div>
      </>
    );
}

HomeImage.propTypes = {
    title: PropTypes.string,
    children: PropTypes.string,
}

export default HomeImage;
