import React from 'react';

export default function Navbar() {
  return (
    <>
      <style>
        {`
          @keyframes colorChange {
            0% { color: white; fill: white; }

            100% { color: white; fill: white; }
          }

          .flashy-text, .social-icon {
            animation: colorChange 0.5s infinite;
          }
        `}
      </style>
      <nav className="bg-fuchsia-600 py-4 font-stone">
        <div className="container mx-auto flex justify-between items-center px-4 xl:px-0">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="https://i.ibb.co/j6zJw2y/vj-QDv-Rcq-Abjs-YJpkh-Quuj-Kro0t-Efgc471-Mk-Wc-Bxv-Fv3j-H4-Mag-GCA7-Ftcc-R3-KU1-6-Cr-B-zl-Z5-EANV3-B.webp" alt="ZERO" className="h-12 mr-3" />
              <h2 className="text-2xl font-bold">$BOOGIE</h2>
            </a>
          </div>
          <div className="flex items-center">
            {/* Twitter Icon */}
            <a href="https://twitter.com/boogiesoltoken" target="_blank" rel="noopener noreferrer" className="px-3">
              <svg className="social-icon" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.486 2.048-2.573-.9.534-1.897.922-2.958 1.13-.848-.902-2.06-1.466-3.4-1.466-2.572 0-4.658 2.086-4.658 4.66 0 .365.042.72.121 1.062-3.873-.195-7.304-2.05-9.602-4.868-.401.688-.63 1.486-.63 2.34 0 1.615.823 3.043 2.072 3.878-.764-.024-1.482-.234-2.108-.583v.059c0 2.257 1.605 4.139 3.737 4.568-.391.106-.803.162-1.227.162-.3 0-.593-.029-.877-.083.593 1.85 2.313 3.195 4.352 3.232-1.595 1.033-3.604 1.648-5.785 1.648-.376 0-.747-.022-1.112-.065 2.179 1.396 4.768 2.212 7.548 2.212 9.142 0 14.143-7.721 14.143-14.417 0-.219-.005-.438-.014-.657.975-.703 1.821-1.58 2.491-2.581z"/>
              </svg>
            </a>
            {/* Telegram Icon */}
            <a href="https://t.me/boogiecult" target="_blank" rel="noopener noreferrer" className="px-3">
              <svg className="social-icon" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.994 15.474l-.397 1.897c.228.07 2.164-1.632 3.233-2.32l5.52-2.746c.96-.479-.215-.743-.478-.264l-6.92 4.64-2.963-1.343c-.96-.264-.96-.96.265-1.436l8.487-3.233c.96-.478 1.777.265 1.436 1.495l-1.436 5.25c-.478 1.495-.96 1.777-2.034 1.777s-2.056-.579-2.67-1.194l-.609-.609-1.436 1.078c-.215.164-.418.312-.609.312-.2 0-.4-.149-.4-.558 0-.4.2-.809.4-1.078l.809-1.495z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
