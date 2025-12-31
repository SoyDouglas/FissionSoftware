import '../css/Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-labelledby="footer-title">
      {/* Glow sutil como en otras secciones */}
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-container">
        <div className="footer-top">
          {/* 1) Marca */}
          <section className="footer-col footer-brand" aria-label="Marca">
            <h2 id="footer-title" className="footer-brand-title">
              Fission
            </h2>
            <p className="footer-brand-text">
              Construyendo soluciones digitales a la medida.
            </p>
            <p className="footer-meta">© {year} | Colombia</p>
          </section>

          {/* 2) Enlaces */}
          <nav className="footer-col" aria-label="Enlaces rápidos">
            <h3 className="footer-heading">Enlaces</h3>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#portafolio">Portafolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>

          {/* 3) Servicios */}
          <section className="footer-col" aria-label="Servicios">
            <h3 className="footer-heading">Nuestros Servicios</h3>
            <ul className="footer-links">
              <li><a href="#desarrollo-web">Desarrollo Web</a></li>
              <li><a href="#backend-apis">Backend & APIs</a></li>
              <li><a href="#apps-medida">Aplicaciones a medida</a></li>
              <li><a href="#consultoria">Consultoría IT</a></li>
              <li><a href="#soporte">Soporte & Mantenimiento</a></li>
            </ul>
          </section>

          {/* 4) Contacto */}
          <section className="footer-col" aria-label="Contacto">
            <h3 className="footer-heading">Contacto</h3>

            <a className="footer-contact" href="mailto:info@tudominio.com">
              <span className="footer-icon" aria-hidden="true">
                {/* Mail icon */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M4 6.5h16v11H4v-11Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    opacity="0.95"
                  />
                  <path
                    d="m5 7.5 7 6 7-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              info@tudominio.com
            </a>

            <div className="footer-social">
              <a
                className="social-btn"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                {/* LinkedIn */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M6.5 10v8M6.5 7.2v.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 18v-5.1c0-1.6 1-2.7 2.5-2.7 1.6 0 2.4 1.1 2.4 2.7V18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4h16v16H4V4Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    opacity="0.45"
                  />
                </svg>
              </a>

              <a
                className="social-btn"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                {/* GitHub */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M9.2 19.2c-3.2 1-3.2-1.6-4.4-2M13.8 20.2v-2.5c0-.7.2-1.2.6-1.6-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.6-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.6 0 3.6-2.2 4.4-4.3 4.6.4.4.7 1 .7 2v2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                className="social-btn"
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                {/* WhatsApp (simple) */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M20 11.6a7.6 7.6 0 0 1-11.6 6.6L4 19l.9-4.2A7.6 7.6 0 1 1 20 11.6Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.6 10.2c.2 1.1 1.8 2.8 2.9 3 .5.1 1.1-.2 1.6-.6l.7.4c.3.2.4.6.2.9-.4.6-1.3 1.2-2.6 1-2.1-.3-4.7-2.9-5-5-.2-1.3.4-2.2 1-2.6.3-.2.7-.1.9.2l.4.7c-.4.5-.7 1-.5 1.6Z"
                    fill="currentColor"
                    opacity="0.8"
                  />
                </svg>
              </a>

              <a
                className="social-btn"
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                {/* Telegram */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M21 4 3.6 11.2c-.9.4-.8 1.7.2 1.9l4.2.8 1.6 4.8c.3.9 1.5 1 2 .2l2.3-3.2 4.2 3.1c.7.5 1.7.1 1.9-.7L22 5.2c.2-.9-.7-1.6-1.4-1.2Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <a className="footer-toplink" href="#inicio">
              Volver arriba <span aria-hidden="true">↑</span>
            </a>
          </section>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-legal">
            © {year} Fission — Todos los derechos reservados
          </p>
          <div className="footer-legal-links">
            <a href="#privacidad">Política de privacidad</a>
            <span className="dot" aria-hidden="true">•</span>
            <a href="#terminos">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
