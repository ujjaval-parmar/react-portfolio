import React, { useEffect, useRef, useState } from 'react'

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);

  const footerRef = useRef();

  useEffect(() => {

      const observer = new IntersectionObserver((entries) => {
          // console.log(entries[0].isIntersecting)

          setIsVisible(entries[0].isIntersecting);

      }, {
          root: null,
          rootMargin: '0px',
          threshold: 0.3
      });

      if (footerRef.current)
          observer.observe(footerRef.current);

      // console.log(observer);

      return () => observer.unobserve(footerRef.current);

  }, [])

  // console.log(isVisible)



  return (
    <footer className={`footer ${isVisible ? 'active-section' : ''}`} ref={footerRef}>

      <div className="footer-text">
        <p>Copyright &copy; 2023 by Codehal || All Rights Reserved.
        <span className="animate scroll" style={{ "--i": 1 }}></span>

        </p>
      </div>

      <div className="footer-icontop">
        <a href="#home"><i className="fa-solid fa-arrow-up"></i></a>
        <span className="animate scroll" style={{ "--i": 2 }}></span>
      </div>

    </footer>
  )
}

export default Footer