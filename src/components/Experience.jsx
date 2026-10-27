import { daftarPengalaman } from '../data/portfolioData'

function Experience() {
    return(
        <section id="experience" className="page-section">
        <h2 className="section-title">Experience</h2>
        <div className="exp-wrapper">
          {daftarPengalaman.map((exp) => (
            <div key={exp.id} className="exp-card">
              
              <div className="exp-left-col">
                <h3 className="exp-company">{exp.perusahaan}</h3>
                <p className="exp-duration">{exp.durasi}</p>
              </div>

              <div className="exp-right-col">
                <h3 className="exp-position">{exp.posisi}</h3>
                <p className="exp-desc">{exp.deskripsi}</p>
              </div>

            </div>
          ))}
        </div>
      </section>
    )
}

export default Experience