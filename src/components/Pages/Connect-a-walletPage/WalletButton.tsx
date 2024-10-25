// WalletButton.js
import Image from "next/image";
import React from "react";

const WalletButton = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <button className="flex items-center justify-start gap-3 px-10 py-4 bg-backgroundSecondary text-white rounded-lg w-full lg:max-w-[250px] border border-btnColor">
      <Image
        src={icon}
        alt={`${label} Icon`}
        className="w-6 h-6 object-cover border-none outline-none"
        height={6}
        width={6}
        quality={100}
      />
      <span>{label}</span>
    </button>
  );
};

export default WalletButton;
