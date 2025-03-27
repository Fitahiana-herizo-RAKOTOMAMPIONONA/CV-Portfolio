import { BiLogIn } from "react-icons/bi"
import { BsProjectorFill } from "react-icons/bs"
import { FaBlog, FaHome, FaInfoCircle } from "react-icons/fa"
import { FcAbout } from "react-icons/fc"
import { FiMail } from "react-icons/fi"
import { GrContact } from "react-icons/gr"
import { MdHome, MdWork ,MdArticle} from "react-icons/md"

const navListe = [
    {
        icone : <FaHome className="size-5"/>,
        nom : "Accueil",
    },
    {
        icone : <FaInfoCircle className="size-5"/>,
        nom : "About"
    },

    {
        icone : <MdWork className="size-5"/>,
        nom : "Work",
    },
    {
        icone : <MdArticle className="size-5"/>,
        nom : "blog",
    },
    {
        icone : <FiMail className="size-5"/>,
        nom : "contact",
    },
]

export {navListe}