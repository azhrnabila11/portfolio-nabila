import { keahlian } from '../data/portfolioData'

function About() {
    return(
        <section id="about" className="page-section">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <p>
            Saya adalah seorang analis sekaligus pengembang sistem informasi yang gemar memecahkan masalah lewat data dan kode. Berbekal latar belakang Sistem Informasi, saya terbiasa melakukan pemodelan proses bisnis, data preprocessing dengan Python, hingga pengelolaan database berbasis SQL untuk menghasilkan wawasan yang efisien.
          </p>
          <br />
          <p>
            Untuk mewujudkan analisis tersebut menjadi produk nyata, saat ini saya berfokus pada pengembangan aplikasi web modern. Saya sedang mendalami ekosistem Java untuk arsitektur server yang kuat dan menggunakan React.js untuk menghadirkan pengalaman pengguna yang dinamis di sisi frontend. Kombinasi keahlian analitis dan teknis ini memungkinkan saya berkontribusi secara maksimal dalam siklus pengembangan produk digital.
          </p>
        </div>

         <div className="skills-container">
          <h3 className="skills-subtitle">Skills & Technologies</h3>
          <div className="skills-badge-wrapper">
            {keahlian.map((item, index) => (
              <span key={index} className="skill-badge">{item}</span>
            ))}
          </div>
        </div>
      </section>
    )
}

export default About