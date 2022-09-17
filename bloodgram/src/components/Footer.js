import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container grid grid--footer'>
        <div className='logo-col'>
          <a className='footer-logo'>
            <svg
              id='logo-14'
              width='73'
              height='49'
              viewBox='0 0 73 49'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z'
                fill='#68DBFF'
              ></path>
              <path
                d='M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z'
                fill='#FF7917'
              ></path>
              <path
                d='M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z'
                fill='#5D2C02'
              ></path>
            </svg>
            {/* <img className='logo' alt='Bloodgram logo' src='' /> */}
          </a>

          <ul className='social-links'>
            <li>
              <a className='footer-link'>
                <ion-icon
                  className='social-icon'
                  name='logo-instagram'
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className='footer-link'>
                <ion-icon
                  className='social-icon'
                  name='logo-facebook'
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className='footer-link'>
                <ion-icon
                  className='social-icon'
                  name='logo-twitter'
                ></ion-icon>
              </a>
            </li>
          </ul>

          <p className='copyright'>
            Copyright &copy; <span className='year'>2022</span> by Bloodgram,
            Inc. All rights reserved.
          </p>
        </div>

        <div className='address-col'>
          <p className='footer-heading'>Contact us</p>
          <address className='contacts'>
            <p className='address'>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className='footer-link' href='tel:415-201-6370'>
                415-201-6370
              </a>
              <br />
              <a className='footer-link' href='mailto:hello@bloodgram.com'>
                hello@bloodgram.com
              </a>
            </p>
          </address>
        </div>

        <nav className='nav-col'>
          <p className='footer-heading'>Account</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-link'>Create account</a>
            </li>
            <li>
              <a className='footer-link'>Sign in</a>
            </li>
            <li>
              <a className='footer-link'>iOS app</a>
            </li>
            <li>
              <a className='footer-link'>Android app</a>
            </li>
          </ul>
        </nav>

        <nav className='nav-col'>
          <p className='footer-heading'>Company</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-link'>About Bloodgram</a>
            </li>
            <li>
              <a className='footer-link'>For Business</a>
            </li>
            <li>
              <a className='footer-link'>Cooking partners</a>
            </li>
            <li>
              <a className='footer-link'>Careers</a>
            </li>
          </ul>
        </nav>

        <nav className='nav-col'>
          <p className='footer-heading'>Resources</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-link'>Recipe directory </a>
            </li>
            <li>
              <a className='footer-link'>Help center</a>
            </li>
            <li>
              <a className='footer-link'>Privacy & terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
