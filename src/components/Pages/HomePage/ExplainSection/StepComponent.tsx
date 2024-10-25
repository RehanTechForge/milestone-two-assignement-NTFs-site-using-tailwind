import Image from "next/image";

const steps = [
  {
    title: "Setup Your Wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    image: "/images/main/Icon.png",
  },
  {
    title: "Create Collection",
    description:
      "Upload your work and set up your collection. Add a description, social links, and floor price.",
    image: "/images/main/Icon.png",
  },
  {
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    image: "/images/main/Icon.png",
  },
];

const StepsComponent = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 my-[100px]">
      {steps.map((step, index) => (
        <div
          key={index}
          className="sm:min-w-[250px] md:flex-1 bg-backgroundSecondary rounded-2xl flex justify-center flex-col items-center px-4 py-5"
        >
          <Image src={step.image} alt="icon" width={300} height={400} />
          <h2 className="font-work-sans text-[20px] sm:text-[24px] font-semibold text-center">
            {step.title}
          </h2>
          <p className="font-work-sans text-center my-2">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StepsComponent;
