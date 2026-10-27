import { biodata, fotoProfil } from '../data/portfolioData'

function Hero() {
    return(
        <main id="home" className="hero-section">
        <div className="hero-text">
          <p className="greeting">Halo, Saya</p>
          <h1 className="name">{biodata.nama}</h1>
          <p className="job">{biodata.peran}
          </p>
          <button className="btn-project">
            <a href="#project" className="btn-project">Project</a>
          </button>
        </div>

        <div className="hero-image-container">
          <div className="image">
            <img src={fotoProfil} alt="Foto Profil" className="profile-img" />
          </div>
        </div>
      </main>
    )
}

export default Hero