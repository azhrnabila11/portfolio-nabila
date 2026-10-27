import fotoProfil from '../assets/pas-foto.png'
import imgStemming from '../assets/project-stemming.png'
import imgPortfolio from '../assets/project-portfolio.png'
import imgSiplik from '../assets/project-Siplik.png'
import logoUniv from '../assets/unikom-logo.png' 
import logoSekolah from '../assets/sman21-logo.png' 
import imgCert1 from '../assets/imgCert1.jpeg' 
import imgCert2 from '../assets/imgCert2.jpeg'

export {fotoProfil}

export const biodata = {
    nama: "Az-Zahra Nabila",
    peran: "System Analyst dan Web Developer",
  }

export const keahlian = [
    "System Analysis", "Business Process Modeling", "Requirement Gathering", 
    "Functional Requirement Spesification (FRS)", "OOP", "SDLC", "UML Design", 
    "SQL", "Database Management", "Data Preprocessing", "Natural Language Processing (NLP)", 
    "Git", "Python", "Java", "HTML", "CSS", "JavaScript", "React.js", "Django", 
  ]

export const daftarProject = [
    {
      id: 1,
      nama:"Stemming Bahasa Sunda",
      deskripsi: "Membangun web pemroses teks, stemming, dan analisis keterbacaan naskah Bahasa Sunda berbasis Django. Mengimplementasikan modifikasi algoritma Enhanced Confix Stripping (ECS) yang disesuaikan dengan morfologi bahasa Sunda serta mengintegrasikan metode Gunning Fog Index (GFI) untuk mengukur tingkat keterbacaan dokumen secara otomatis.",
      linkProject: "https://stemming-bahasa-sunda.vercel.app/",
      gambar: imgStemming 
    },
    {
      id: 2,
      nama:"Sistem Informasi Pengaduan Lingkungan (SIPLIK)",
      deskripsi: "Merancang dokumen kebutuhan sistem untuk membangun website pengaduan lingkungan, sistem ini dirancang untuk menyediakan media pelaporan permasalahan lingkungan yang terstruktur dan terdokumentasi dengan baik. Kontribusi saya pada project ini yaitu dalam menyusun Software Requirements Specification (SRS).",
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
  ]

export const edulogos = [
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
  ]

export const daftarPengalaman = [
    {
      id: 1,
      perusahaan: "Balai Besar Pengujian Teknologi Mineral dan Batubara TekMIRA",
      posisi: "System Analyst Intern",
      durasi: "3 Bulan (2025)",
      deskripsi: "Berkontribusi dalam menganalisis kebutuhan bisnis dan proses bisnis untuk pengembangan sistem informasi penyewaan lapangan tenis serbaguna. Menyusun dokumen Software Requirements Specification (SRS), merancang diagram UML dan kebutuhan basis data, serta mendokumentasikan spesifikasi fungsional melalui kolaborasi dengan stakeholders untuk memastikan kebutuhan sistem sesuai dengan tujuan proyek."
    }
  ]

export const daftarSertifikasi = [
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
  ]