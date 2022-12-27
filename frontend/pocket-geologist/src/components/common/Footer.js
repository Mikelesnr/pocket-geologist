function Footer() {
    return (
        <div>
            <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-danger variant-danger">
                <span className="mb-3 mb-md-0 text-info">© 2022 Michael Mwanza.</span>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="footer-link text-info text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-mwanza-15630635/"><strong>LinkedIn</strong></a>
                    </li>
                    <li className="ms-3">
                        <a className="footer-link text-info text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://wa.link/wxswnn"><strong>WhatsApp</strong></a>
                    </li>
                    <li className="ms-3">
                        <a className="footer-link text-info text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/bno41q6dloyceuq/AABvO8BYxH3FP0jTftDVRWYRa?dl=0"><strong>Certifications</strong></a>
                    </li>
                </ul>

            </footer>
        </div>
        
    )
}

export default Footer;