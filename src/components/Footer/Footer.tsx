import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";
import Input from "../Input/Input";

const Footer = () => {
  return (
    <footer className="bg-backgroundSecondary px-4 sm:px-20 text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-captionText pb-5">
        {/* NFT Marketplace Info */}
        <div>
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/logo/logo.png"}
                alt="logo"
                width={250}
                height={35}
                className="object-cover"
              />
            </Link>
          </div>
          <p className=" text-[18px] my-5 text-captionText">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className=" text-[18px] mb-4 text-captionText">
            Join our community
          </p>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <Link
              href="https://github.com/rehanTechForge"
              aria-label="YouTube"
              className="hover:text-white"
            >
              <FaGithub size={28} />
            </Link>
            <Link
              href="https://linkedin.com/in/rehantechforge/"
              aria-label="Discord"
              className="hover:text-white"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link
              href="https://discord.com/"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaDiscord size={28} />
            </Link>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4  font-space-mono">
            Explore
          </h3>
          <ul className="space-y-6 text-captionText">
            <li>
              <Link
                href="/marketplace"
                className="hover:text-white font-work-sans"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="/ranking" className="hover:text-white">
                Rankings
              </Link>
            </li>
            <li>
              <Link href="/connect-a-wallet" className="hover:text-white">
                Connect a wallet
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="">
          <h3 className="text-white font-bold text-lg mb-4 font-space-mono">
            Join Our Weekly Digest
          </h3>
          <p className="text-sm mb-4 font-work-sans text-captionText text-[18px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <Input />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-[18px] text-captionText mt-10">
        © NFT Market. Use this template freely.
      </div>
    </footer>
  );
};

export default Footer;
