import icon from '../assets/logo.png'
const Navbar = () => {
    return ( <div className="fixed top-0 left-0 py-2 px-6  flex  justify-center items-center h-16 w-full z-10 bg-neutral-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
        <div><p className="font-bold gradient-text">RunDwn</p></div>
        <div className='w-8 h-8 flex items-center justify-center'><img src={icon} alt=''/></div>
    </div> );
}
 
export default Navbar;