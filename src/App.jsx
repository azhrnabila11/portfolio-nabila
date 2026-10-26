import { useEffect, useState } from 'react'
import './App.css'
import fotoProfil from './assets/pas-foto.png'
import imgStemming from './assets/project-stemming.png'
import imgPortfolio from './assets/project-portfolio.png'
import imgSiplik from './assets/project-Siplik.png'
import logoUniv from './assets/unikom-logo.png' 
import logoSekolah from './assets/sman21-logo.png' 
import imgCert1 from './assets/imgCert1.jpeg' 
import imgCert2 from './assets/imgCert2.jpeg'

function App() {
  const [biodata] = useState({
    nama: "Az-Zahra Nabila",
    peran: "System Analyst dan Web Developer",
  });

  const [keahlian] = useState([
    "System Analysis", "Business Process Modeling", "Requirement Gathering", 
    "Functional Requirement Spesification (FRS)", "OOP", "SDLC", "UML Design", 
    "SQL", "Database Management", "Data Preprocessing", "Natural Language Processing (NLP)", 
    "Python", "Java", "HTML", "CSS", "JavaScript", "React.js", "Django", 
  ]);

  const [daftarProject] = useState([
    {
      id: 1,
      nama:"Stemming Bahasa Sunda",
      deskripsi: "membangun web pemroses teks, stemming, dan analisis keterbacaan naskah Bahasa Sunda berbasis Django. Mengimplementasikan modifikasi algoritma Enhanced Confix Stripping (ECS) yang disesuaikan dengan morfologi bahasa Sunda serta mengintegrasikan metode Gunning Fog Index (GFI) untuk mengukur tingkat keterbacaan dokumen secara otomatis.",
      linkProject: "https://stemming-bahasa-sunda.vercel.app/",
      gambar: imgStemming 
    },
    {
      id: 2,
      nama:"Sistem Informasi Pengaduan Lingkungan (SIPLIK)",
      deskripsi: "merancang dokumen kebutuhan sistem untuk membangun website pengaduan lingkungan, sistem ini dirancang untuk menyediakan media pelaporan permasalahan lingkungan yang terstruktur dan terdokumentasi dengan baik. Kontribusi saya pada project ini yaitu dalam menyusun Software Requirements Specification (SRS).",
      linkProject:"",
      gambar: imgSiplik 
    },
    {
      id: 3,
      nama:"Portfolio Pribadi",
      deskripsi: "Membangun website portofolio dinamis berbasis React.js sebagai media representasi digital keahlian analitis dan teknis saya di bidang Sistem Informasi.",
      linkProject:"",
      gambar: imgPortfolio
    }
  ]);

  const [edulogos] = useState([
    { 
      id: 1, 
      nama: "Universitas Komputer Indoneia", 
      periode: "2022-2026",
      img: logoUniv
    },

    { 
      id: 2, 
      nama: "SMA Negeri 21 Bandung", 
      periode: "2018-2021",
      img: logoSekolah
    },
  ]);

  const [daftarPengalaman] = useState([
    {
      id: 1,
      perusahaan: "Balai Besar Pengujian Teknologi Mineral dan Batubara TekMIRA",
      posisi: "System Analyst Intern",
      durasi: "3 Bulan (2025)",
      deskripsi: "Berkontribusi dalam menganalisis kebutuhan bisnis dan proses bisnis untuk pengembangan sistem informasi penyewaan lapangan tenis serbaguna. Menyusun dokumen Software Requirements Specification (SRS), merancang diagram UML dan kebutuhan basis data, serta mendokumentasikan spesifikasi fungsional melalui kolaborasi dengan stakeholders untuk memastikan kebutuhan sistem sesuai dengan tujuan proyek."
    }
  ]);

  const [daftarSertifikasi] = useState([
    {
      id: 1,
      nama: "Badan Nasional Sertifikasi Profesi (BNSP)",
      skema: "System Analyst",
      periode: "Diterbitkan Feb 2026 · Berlaku s/d Feb 2029",
      gambar: imgCert1
    },
    {
      id: 2,
      nama: "Gemini Certified Student (Google)",
      skema: "Teknologi Google AI (Gemini)",
      periode: "Diterbitkan Aug 2026 · Berlaku s/d Aug 2029",
      gambar: imgCert2
    }
  ]);

  return (
    <div className ="portfolio-container">
      <nav className ="navbar">
         <div className="logo">PORTFOLIO</div>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#pendidikan">Pendidikan</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certification">Certification</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


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

        <section id="pendidikan" className="edu-dark-section">
        <div className="edu-dark-content">
          <p className="edu-tagline">Pendidikan</p>
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
      
      <footer className="footer-clean">
        <div className="footer-content">
          {/* Sisi Kiri: Hak Cipta */}
          <p className="footer-copyright">
            &copy; 2026 {biodata.nama}. 
          </p>
          <a href="#beranda" className="footer-back-to-top">
            Kembali ke atas &uarr;
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
  
