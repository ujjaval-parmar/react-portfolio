import React, { useEffect, useState } from 'react'


const SECTION_IDS = ["home", "about", "projects", "skills", "contact"];


const Navbar = ({ setActiveSection }) => {

    const [activeLink, setActiveLink] = useState('home');

    const [isScrolled, setIsScrolled] = useState(false);

    const [showNav, setShowNav] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            const element = document.getElementById(activeLink);

            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // console.log(element.getBoundingClientRect().top , element.getBoundingClientRect().bottom, window.scrollY);

            // console.log(element.getBoundingClientRect(), window.scrollY);

            for (let i = 0; i < SECTION_IDS.length; i++) {
                const sectionEle = document.getElementById(SECTION_IDS[i]);

                // let top = window.scrollY;
                // let offset = sectionEle.offsetTop - 100;
                // let height = sectionEle.offsetHeight;

                // console.log(top, offset, height)

                // if (top >= offset && top < offset + height) {
                //     setActiveLink(SECTION_IDS[i]);
                //     setActiveSection(SECTION_IDS[i])
                //     break;
                // }

                if (sectionEle) {
                    const rect = sectionEle.getBoundingClientRect();

                    // console.log(sectionEle, rect.top, rect.bottom);

                    if (rect.top <= 300 && rect.bottom >= 500) {
                        setActiveLink(SECTION_IDS[i]);
                        setActiveSection(SECTION_IDS[i])
                        break;
                    }
                }

            }


        }

        window.addEventListener('scroll', handleScroll);


        return () => window.removeEventListener('scroll', handleScroll);


    }, [activeLink])


    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>

            <a href="#home" className="logo">Ujjaval. <span className="animate" style={{ "--i": 1 }}></span></a>

            <i
                className={`fa-solid fa-${showNav ? 'x' : "bars"}`}
                onClick={() => setShowNav(!showNav)}
            >
                 <span className="animate" style={{ "--i": 2 }}></span>
            </i>

            <nav className={`navbar ${showNav ? 'showNav' : ''}`}>

                <ul>

                    {SECTION_IDS.map(sectionId => {
                        return (
                            <li key={sectionId}>
                                <a
                                    href={`#${sectionId}`}
                                    onClick={() => {
                                        setActiveLink(sectionId)
                                        setShowNav(false);
                                    }}
                                    className={(activeLink === sectionId) ? 'active-link ' : ''}
                                >{sectionId}</a>
                            </li>
                        )
                    })}

                    <span className="animate" style={{ "--i": 2 }}></span>
                </ul>

                <span className="active-nav"></span>


            </nav>


        </header>
    )
}

export default Navbar