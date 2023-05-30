import { FiPhone, FiMail } from "react-icons/fi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-col items-center p-8 bg-slate-500 mt-[75px]"
    >
      <p className="text-3xl tett-bold py-4 font-bold">Contact</p>
      <div className="flex w-full justify-center flex-wrap py-4 gap-2 md:gap-0">
        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <FiMail />
            <a className="font-bold" href="mailto:lorena.echeverry@hotmail.com">
              lorena.echeverry@hotmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <FiPhone />
            <a className="font-bold" href="073-5173049">
              073-5173049
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <IoShareSocialOutline />
            <p className="flex gap-2 h-full items-center">
              <BsLinkedin>
                <a
                  href="www.linkedin.com/in/
lorena-e-3b24a5220
"
                ></a>
              </BsLinkedin>
              <BsGithub />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
