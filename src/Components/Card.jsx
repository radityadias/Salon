import PropTypes from "prop-types";

const Card = ({ titles, children }) => {
  return (
    <>
      <div className="relative m-10">
        {titles.map((title, index) => {
          const key = Object.keys(children)[index];

          return (
            <div key={title} className="mb-10">
              <a
                href="#"
                className="flex flex-col items-center bg-white rounded-lg md:flex-row w-full "
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="Home/home_card_1.svg"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                  {children[key].map((item, i) => (
                    <p
                      key={i}
                      className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

// PropTypes validation
Card.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired, // titles must be an array of strings
  children: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired, // children must be an object where each key contains an array of strings
};

export default Card;
