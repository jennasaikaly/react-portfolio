import React from 'react';
import linkedIn from '../../assets/images/logos/primary/linkedin-3-48.png'
import github from '../../assets/images/logos/primary/github-8-48.png'
import FCC from '../../assets/images/logos/primary/free-code-camp-logo-PRIMARY-2.png'
function Footer() {
    return (
        <footer>
            <div className='img-footer'>
            <a href="https://www.linkedin.com/in/jenna-saikaly/"><img className="img-linked-logo" src={linkedIn} alt="linked In"></img></a>
            <a href="https://github.com/jennasaikaly"><img className="img-github-logo" src={github} alt="github"></img></a>
            <a href="https://www.freecodecamp.org/jennasaikaly"><img className="img-fcc-logo" src={FCC} alt="stack overflow"></img></a>
            </div>
            <div><p>© 2022 by Jenna Saikaly</p></div>
        </footer>
    );
}

export default Footer;