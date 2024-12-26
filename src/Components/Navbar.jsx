const Navbar = () => {
    const contents = ['Home', 'Promo', 'Facial Care', 'Reservation', 'Galery'];

    return(
        <>
            <nav className="bg-primary relative w-full z-20 top-0 start-0 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="Navbar/hair.svg" className="h-8" alt="Trendy Salon Logo"/>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="flex text-sm bg-transparent rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="Navbar/user.svg" alt="user photo"/>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  -50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        
                        {contents.map((content) => (
                            <li key={content}>
                                <a href="#" className="block py-2 px-3 text-main-text" aria-current="page">{content}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </nav>
        </>
    ) 
}

export default Navbar;