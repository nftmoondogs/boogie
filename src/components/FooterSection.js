import React from 'react';

const FooterSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes textFlash {
            0%, 100% { color: white; }
            50% { color: 	#FF00FF; } /* Adjust the color to fit your design */
          }

          .flashy {
            animation: textFlash 0.5s infinite;
          }
        `}
      </style>
      <footer id="foundation" className="text-fuchsia-600 py-12 px-8 font-stone">
        <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Title */}
          <div>
            <img src="https://i.ibb.co/FbkFrcd/vj-QDv-Rcq-Abjs-YJpkh-Quuj-Kro0t-Efgc471-Mk-Wc-Bxv-Fv3j-H4-Mag-GCA7-Ftcc-R3-KU1-6-Cr-B-zl-Z5-EANV3-B.gif" alt="Logo" className="mx-auto mb-4 h-20 w-auto transition duration-300 ease-in-out hover:scale-105" />
            <h2 className="text-3xl font-bold ">$BOOGIE Token</h2> {/* Apply the flashy class here */}
          </div>
          
          {/* Description and Social Icons */}
          <div>
            <p className="leading-relaxed max-w-xl text-fuchsia-600 mx-auto text-lg mb-6">
              $BOOGIE: Well I’m BOOGIE. . . and you’re a shitcoin lover. ape first, research later type degen. . . so I guess we know each other now! 
            </p>
            <div className="flex justify-center space-x-4 mt-4 text-fuchsia-600">
              {/* Social media links */}
              <a href="https://twitter.com/boogiesoltoken" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition duration-300 ease-in-out hover:scale-125">
                <span>Twitter</span> {/* Consider replacing <span> with an actual icon */}
              </a>
              <a href="https://t.me/boogiecult" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition duration-300 ease-in-out hover:scale-125">
                <span>Telegram</span> {/* Consider replacing <span> with an actual icon */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
