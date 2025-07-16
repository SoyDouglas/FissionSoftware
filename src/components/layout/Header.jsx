import LogoFission from '../../assets/LogoFission.svg'
import '../css/Header.css'
import '../../../src/index.css'

function Header() {
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
                    <div className='navRight'>
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