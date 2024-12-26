const Footer = () => {
  const headers = ["Our Branch", "Contact Us", "Social Media"];
  const contents = {
    branch: ["Trendy Salon 1", "Be&You Salon", "Trendy Salon 3"],
    contact: ["trendysalon@gmail.com"],
    social: ["Instagram", "Facebook", "WhatsApp"],
  };

  return (
    <footer className="bg-primary relative">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {headers.map((header, index) => {
              const key = Object.keys(contents)[index];

              return (
                <div key={header}>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    {header}
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {contents[key].map((item, i) => (
                      <li key={i} className="mb-4">
                        <a href="#" className="hover:underline">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © Trendy Salon{" "}
            . All Rights Reserved.
            Yogyakarta, Indonesia
          </span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
