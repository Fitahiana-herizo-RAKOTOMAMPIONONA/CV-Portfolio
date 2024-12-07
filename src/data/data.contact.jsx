import { BiPhoneCall, BiPhone, BiMailSend } from "react-icons/bi"
import { BsMailbox } from "react-icons/bs"
import { GrContact } from "react-icons/gr" 
BiMailSend
const datacontact = [
    {
        title : "mail us",
        icone : <BiMailSend  className="m-auto text-[35px]"/>,
        email1 : "fitahianaherizo10@gmail.com",
        email2 : "herizofitahianarakoto@gmail.com"
    },
    {
        title : "contact us",
        icone : <BiPhoneCall  className="m-auto text-[35px]"/>,
        contact1 : "+261381824169",
        contact2 : "+261 37 ** *** **"
    },
    {
        title : "location",
        icone : <BiPhone  className="m-auto text-[35px]"/>,
        contact1 : "AZ 60 K III Ankazotoho",
        contact2 : "Anosizato"
    },
]

export {datacontact}