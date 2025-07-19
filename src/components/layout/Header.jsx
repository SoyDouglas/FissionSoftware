import { useState } from 'react'
import LogoFission from '../../assets/LogoFission.svg'
import menuIcon from '../../assets/icons/menu-2.svg'
import '../css/Header.css'



function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className='Header'>
                <nav className='HeaderNav'>
                    <div className='navLeft'>
                        <a href="" className='HeaderImg'>
                            <img src={LogoFission} alt="Fission logo" />
                        </a>
                        <a href="" className='logoText'>FISSION</a>
                    </div>
                    {/* Icon for mobile */}
                    <button
                    className={`menu-toggle${open ? ' open' : ''}`}
                    onClick={() => setOpen(o => !o)}
                    aria-label='Toggle menu'
                    >
                        <img src={menuIcon} alt="" />
                    </button>
                    <div className={`navRight${open ? ' open' : ''}`}>
                        <a href="">Nuestros Servicios</a>
                        <a href="">Sobre nosotros</a>
                        <a href="">Contacto</a>
                        <a href="">
                            <button>CONTÁCTANOS</button>
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header