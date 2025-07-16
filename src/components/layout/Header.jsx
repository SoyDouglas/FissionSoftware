import LogoFission from '../../assets/LogoFission.svg'
import '../css/Header.css'

function Header() {
    return (
        <>
            <header className='Header'>
                <nav>
                    <a href="" className='HeaderImg'>
                        <img src={LogoFission} alt="Fission logo" />
                    </a>
                    <a href="">FISSION</a>
                    <a href="">Home</a>
                    <a href="">Servicios</a>
                    <a href="">Sobre nosotros</a>
                    <a href="">Contacto</a>
                    <a href="">
                        <button>Agenda una llamada</button>
                    </a>
                </nav>
            </header>
        </>
    )
}

export default Header