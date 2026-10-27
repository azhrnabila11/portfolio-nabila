import { daftarSertifikasi } from '../data/portfolioData'

function Certification() {
    return(
        <section id="certification" className="page-section">
        <h2 className="section-title">Certification</h2>
        <div className="cert-grid">
          {daftarSertifikasi.map((cert) => (
            <div key={cert.id} className="cert-card">
              
              <div className="cert-image-wrapper">
                <img src={cert.gambar} alt={cert.nama} className="cert-img-cover" />
              </div>

              <div className="cert-card-body">
                <h3 className="cert-title">{cert.nama}</h3>
                <p className="cert-schema"><span>Skema:</span> {cert.skema}</p>
                <p className="cert-period">{cert.periode}</p>
              </div>

            </div>
          ))}
        </div>
      </section>
    )
}

export default Certification