import { daftarProject } from '../data/portfolioData'

function Projects() {
    return (
        <section id="project" className="page-section">
        <h2 className="section-title">Personal Project</h2>
        <div className="project-grid">
          {daftarProject.map((project) => (
            <div key={project.id} className="project-card">
               <div className="project-image-wrapper">
                <img src={project.gambar} alt={project.nama} className="project-img-cover" />
              </div>
              <div className="project-card-body">
                <h3 className="project-title">{project.nama}</h3>
                <p className="project-desc">{project.deskripsi}</p>
                {project.linkProject ? (
                <a href={project.linkProject} target="_blank" rel="noreferrer" className="project-link">
                  Lihat Project  &rarr;
                </a>
              ) : null}
              </div>
            </div>
          ))}
          
        </div>
       </section>
    )
}

export default Projects