import { edulogos } from '../data/portfolioData'

function Education() {
    return(
        <section id="education" className="edu-dark-section">
        <div className="edu-dark-content">
          <p className="edu-tagline">Education</p>
          <h2 className="edu-main-title">Riwayat Pendidikan</h2>
          <p className="edu-subtitle">Pernah belajar pada sekolah dan universitas berikut</p>
          
          <div className="edu-logo-grid">
            {edulogos.map((logo) => (
              <div key={logo.id} className="edu-logo-item">
                <div className="edu-logo-box">
                  <img src={logo.img} alt={logo.nama} className="edu-brand-logo" />
                </div>
                <h4 className="edu-item-name">{logo.nama}</h4>
                <p className="edu-item-period">{logo.periode}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Education