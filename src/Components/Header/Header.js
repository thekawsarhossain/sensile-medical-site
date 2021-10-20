import { Link, NavLink } from 'react-router-dom'
import { Disclosure, Menu } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo-2.png';
import userImg from '../../images/user.png';
import './Header.css';
import useAuth from '../../hooks/useAuth'


const Header = () => {

    const { user, signOutUser } = useAuth();

    return (
        <Disclosure as="nav" className="bg-gray fixed w-full py-2 z-10">
            {({ open }) => (
                <>
                    <div className="text-light max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex text-2xl items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FontAwesomeIcon icon={faTimes} />
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                {/* logo area here  */}
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-16 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-16 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>

                                {/* logo area ends here  */}
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">

                                        {/* navbar for web */}
                                        <nav className="nav-bar h-16">
                                            <li><NavLink to="/home">home</NavLink></li>
                                            <li><NavLink to="/services">Services</NavLink></li>
                                            <li><NavLink to="/appoinment">Appoinment</NavLink></li>
                                            <li><NavLink to="/about">About</NavLink></li>
                                        </nav>

                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">View notifications</span>
                                    {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                </button>


                                {/* Profile here  */}
                                <Menu as="div" className="ml-3 relative">
                                    <div className="flex justify-between">
                                        {/* signin and login buttons here  */}
                                        {!user.email ? <div className="auth-buttons">
                                            <Link to="/login"><button className="bg-primary lg:py-2 md:py-1 px-6 font-semibold rounded-md hover:bg-blue">Login</button></Link>
                                            <Link to="/signup"><button className="bg-secondary lg:py-2 md:py-1 px-6 font-semibold rounded-md mx-3 hover:bg-lightGray">Signup</button></Link>
                                        </div> :
                                            <div className="bg-gray-800 flex items-center text-sm rounded-full">
                                                <div className="lg:flex items-center justify-end">
                                                    <p className="font-bold capitalize italic">{user?.displayName ? user?.displayName : 'Anonymous'}</p>
                                                    <img
                                                        className="h-8 w-8 rounded-full lg:mx-2 mx-8"
                                                        src={user.photoURL ? user.photoURL : userImg}
                                                        alt=""
                                                    />
                                                </div>
                                                <button className="ms-8 text-primary text-3xl" onClick={signOutUser}><FontAwesomeIcon icon={faSignOutAlt} /></button>
                                            </div>}
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 text-light">

                            {/* navbar for web */}
                            <nav className="navbar-responsive">
                                <li><NavLink to="/home">home</NavLink></li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="/appoinment">Appoinment</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                            </nav>

                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}

export default Header;