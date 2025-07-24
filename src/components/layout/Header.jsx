import { useState } from 'react'
import LogoFission from '../../assets/LogoFission.svg'
import menuIcon from '../../assets/icons/menu-2.svg'
import closeIcon from '../../assets/icons/x.svg'
import ArrowDown from '../../assets/icons/chevron-down.svg?react';
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
                        <a href="" className='logoText'>Fission</a>
                    </div>
                    {/* Icon for mobile */}
                    <button
                    className={`menu-toggle${open ? ' open' : ''}`}
                    onClick={() => setOpen(o => !o)}
                    aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
                    >
                        <img src={open ? closeIcon : menuIcon} 
                        alt={open ? 'Icono cerrar' : 'Icono menú'} />
                    </button>
                    <div className={`navRight${open ? ' open' : ''}`}>
                        <a href="">
                            Nuestros Servicios 
                            < ArrowDown className="arrow"/>
                        </a>
                        <a href="">
                            Sobre nosotros 
                            < ArrowDown className="arrow"/>
                        </a>
                        <a href="">
                            Blog 
                            {/* < ArrowDown className="arrow"/> */}
                        </a>
                        <a href="">
                            <button className='header-cta'>Agenda una llamada</button>
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header