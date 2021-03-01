import React from 'react'

const Footer = () => {
    return (
        <footer className="row tm-row">
          <hr className="col-12" />
          <div className="col-md-6 col-12 tm-color-gray">
            Design:{" "}
            <a
              rel="nofollow"
              target="_parent"
              href="/"
              className="tm-external-link"
            >
              SplashMy
            </a>
          </div>
          <div className="col-md-6 col-12 tm-color-gray tm-copyright">
            Copyright 2020 Blogg! Company Co. Ltd.
          </div>
        </footer>
    )
}

export default Footer
