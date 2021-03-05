import './Footer.css'

import React from 'react'

const Footer: React.FC = () =>
    <footer className="footer">
        <span>
            Design desenvolvido com <i className="fa fa-heart text-danger" /> por 
            <strong> Cod<span className="text-danger">3</span>r</strong>
        </span>
    </footer>

export default React.memo(Footer)