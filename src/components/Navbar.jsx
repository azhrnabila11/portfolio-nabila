function Navbar() {
  return (
    <nav className ="navbar">
        <div className="logo">PORTFOLIO</div>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certification">Certification</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
}

export default Navbar