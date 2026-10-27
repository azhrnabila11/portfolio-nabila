import { biodata } from '../data/portfolioData'

function Contact() {
    return(
        <section id="contact" className="kontak-dark-section">
        <div className="kontak-clean-content">
          <h2 className="kontak-main-title">Contact</h2>
          <p className="kontak-subtitle">
            Apakah Anda sedang mencari kandidat untuk posisi System Analyst, Developer, atau ingin berkolaborasi dalam proyek web? Saya akan sangat senang mendengar dari Anda.
          </p>
          
          <div className="email-wrapper">
            <span className="email-icon-label">✉</span>
            <a href="mailto:azhrnabila1102@gmail.com" className="kontak-email-link">
              azhrnabila1102@gmail.com
            </a>
          </div>

          <div className="social-clean-grid">
            
            <a href="https://wa.me/6281320526337" target="_blank" rel="noreferrer" className="social-card">
              <span className="social-icon">💬</span>
              <div className="social-text">
                <strong>WhatsApp</strong>
                <p>+62 813-2052-6337</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/az-zahra-nabila-b02b82350/" target="_blank" rel="noreferrer" className="social-card">
              <span className="social-icon">in</span>
              <div className="social-text">
                <strong>LinkedIn</strong>
                <p>Az Zahra Nabila</p>
              </div>
            </a>

            <a href="https://www.instagram.com/azhrnabilaa/?hl=id" target="_blank" rel="noreferrer" className="social-card">
              <span className="social-icon">📷</span>
              <div className="social-text">
                <strong>Instagram</strong>
                <p>@azhrnabilaa</p>
              </div>
            </a>

            <a href="https://github.com/azhrnabila11" target="_blank" rel="noreferrer" className="social-card">
              <span className="social-icon">💻</span>
              <div className="social-text">
                <strong>GitHub</strong>
                <p>@azhrnabila11</p>
              </div>
            </a>

          </div>
        </div>
      </section>
    )
}

export default Contact