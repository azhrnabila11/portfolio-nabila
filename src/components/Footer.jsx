import { biodata } from '../data/portfolioData'

function Footer() {
    return(
        <footer className="footer-clean">
        <div className="footer-content">
          {/* Sisi Kiri: Hak Cipta */}
          <p className="footer-copyright">
            &copy; 2026 {biodata.nama}. 
          </p>
          <a href="#home" className="footer-back-to-top">
            Kembali ke atas &uarr;
          </a>
        </div>
      </footer>
    )
}

export default Footer