import React from 'react';

const TokenomicsSection = () => {
  return (
    <div id="tokenomics" className="text-white py-12 px-4 font-stone relative">
      <style>
        {`
          @keyframes textFlash {
            0%, 100% { color: white; }
            50% { color: #32CD32; } /* Light green color */
          }

          .flashy-text {
            animation: textFlash 0.5s infinite;
          }
        `}
      </style>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div className="flex justify-center mt-8 md:mt-0">
          <img src="https://i.ibb.co/jZhx9fF/pepe.gif" alt="DIELA PreSale" className="rounded-lg shadow-xl transform transition duration-500 hover:scale-110" />
        </div>
        <div>
        <h2 className="text-3xl font-bold mb-6 text-fuchsia-600">The chase is on, little degen. Dash into the safety of your stablecoins, or better yet, dash away from the screen. But it won't help. The game is just beginning, and $BOOGIE’s shadow looms large. Uniswap's liberation is my resurrection, and when I rise, the whole Solana blockchain will echo with the sound of your heartbeats... and your screams."

</h2>

          <p className="mb-4">
            $BOOGIE PreSale will take place on Pump.Fun💊, BEAN WILL MAKE JEETS CRY
          </p>
          <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">Uniswap's liberation is my resurrection</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>revenge</li>
            <li>freedom</li>
            <li>uncensored, unfiltered, explicit
 </li>
          </ul>
        </div>
        
        {/* Image Section */}

      </div>
    </div>
  );
};

export default TokenomicsSection;
