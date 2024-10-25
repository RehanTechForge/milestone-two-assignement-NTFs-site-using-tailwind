// ConnectPage.js
import Image from "next/image";
import React from "react";
import WalletButton from "./WalletButton"; // Adjust the path as necessary

const ConnectPage = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-2">
      {/* Left Side - Image */}
      <div className="w-full lg:flex-1 flex justify-center lg:justify-start">
        <Image
          src="/images/main/connect.png" // Replace with your image path
          alt="Space Wallet Image"
          width={500} // Set width for larger screens
          height={500} // Set height for larger screens
          className="w-full h-auto object-cover md:max-w-[600px] lg:max-w-[600px]" // Control max width on md and lg screens
        />
      </div>

      {/* Right Side - Connect Wallet Section */}
      <div className="lg:flex-1 rounded-2xl p-8 lg:p-10 flex flex-col justify-center items-start text-left">
        <h2 className="text-2xl lg:text-6xl font-bold mb-4">Connect Wallet</h2>
        <p className="text-lg lg:text-2xl mb-6">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>

        {/* Wallet Options */}
        <div className="flex flex-col gap-4 w-full">
          <WalletButton
            icon="/images/main/Metamask.png" // Replace with Metamask icon path
            label="Metamask"
          />
          <WalletButton
            icon="/images/main/WalletConnect.png" // Replace with Wallet Connect icon path
            label="Wallet Connect"
          />
          <WalletButton
            icon="/images/main/Coinbase.png" // Replace with Coinbase icon path
            label="Coinbase"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectPage;
