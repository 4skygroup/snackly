import Footer from "../components/Footer/Footer";
import Input from "../components/Inputs/Input";
import Select from "../components/Inputs/Select";
import Textarea from "../components/Inputs/Textarea";
import Logo from "../components/Logo/Logo";
import Navbar from "../components/NavBar/NavBar";
import { options } from "../utils/constants/options";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";

export default function Contact() {
  return (
    <div className="bg-snackly-purple text-white flex flex-col items-center ">
      <Navbar />
      <div className="flex flex-col items-center gap-y-17.5 max-mdpp:gap-y-0 max-mdpp:pt-10">
        <span className="text-h6">Contact us</span>
        <div className="flex justify-between items-center py-12.5 w-fit lgp:max-xxl:gap-12 xxl:gap-x-40">
          <div className="max-mdpp:hidden">
            <Logo format="wide" />
          </div>
          <form className="text-white flex flex-col gap-6.25 w-fit py-7.5 max-mdpp:py-0">
            <span className="text-t2 max-mdpp:text-center">
              Let's start your strategy !
            </span>
            <div className="flex flex-wrap gap-5 mdpp:w-155 mdpp:max-lgp:w-105 max-xs:w-75 xs:max-mdpp:w-105">
              <Input
                label="Nom"
                placeholder="Dupond"
                style="border border-white border-solid py-1.5 px-3.25 placeholder:text-placeholder-color rounded-r4 placeholder:text-t4 w-75 outline-none text-white xs:w-75 xs:max-lgp:w-50"
                labelStyle="text-t4"
              />
              <Input
                label="Prénom"
                placeholder="Arnold"
                style="border border-white border-solid py-1.5 px-3.25 placeholder:text-placeholder-color rounded-r4 placeholder:text-t4 w-75 outline-none text-white xs:w-75 xs:max-lgp:w-50"
                labelStyle="text-t4"
              />
              <Input
                label="Adresse email"
                placeholder="Arnolddupond@gmail.com"
                style="border border-white border-solid py-1.5 px-3.25 placeholder:text-placeholder-color rounded-r4 placeholder:text-t4 w-75 outline-none text-white xs:w-75 xs:max-lgp:w-50"
                labelStyle="text-t4"
                type="email"
              />
              <Input
                label="Nom de l'entreprise"
                placeholder="SNCF Connect"
                style="border border-white border-solid py-1.5 px-3.25 placeholder:text-placeholder-color rounded-r4 placeholder:text-t4 w-75 outline-none text-white xs:w-75 xs:max-lgp:w-50"
                labelStyle="text-t4"
              />
              <Input
                label="Numéro de téléphone"
                placeholder="06 12 34 56 78"
                style="border border-white border-solid py-1.5 px-3.25 placeholder:text-placeholder-color rounded-r4 placeholder:text-t4 w-75 outline-none text-white xs:w-75 xs:max-lgp:w-50"
                labelStyle="text-t4"
              />
              <Select
                options={options}
                label="Sujet"
                labelStyle="text-t4"
                style="border text-white border-white border-solid py-1.5 px-3.25 placeholder:text-placeholder-color rounded-r4 placeholder:text-t4 w-75 outline-none xs:w-75 xs:max-lgp:w-50"
              />
              <Textarea
                label="Votre message"
                placeholder="Message"
                style="border border-white border-solid py-1.5 px-3.25 placeholder:text-placeholder-color rounded-r4 placeholder:text-t4 w-full h-40 outline-none text-white"
                labelStyle="text-t4"
              />
            </div>
            <button
              onSubmit={(e) => e.preventDefault()}
              className="text-t3 rounded-r5 text-black bg-white w-fit py-2.5 px-7.5 self-center"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer policy={policy} services={services} />
    </div>
  );
}
