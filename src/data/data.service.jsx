import { GiPhotoCamera } from "react-icons/gi"
import { MdOutlineBrandingWatermark } from "react-icons/md"
import { FaMobileScreen } from "react-icons/fa6"
import { BiPencil } from "react-icons/bi"

const dataservice =[
    {
        title : "photography",
        icone: <GiPhotoCamera className="text-2xl"/>
    },
    {
        title : "Web Design",
        icone: <BiPencil className="text-2xl"/>
    },
    {
        title : "branding",
        icone: <MdOutlineBrandingWatermark className="text-2xl"/>
    },
    {
        title : "development",
        icone: <FaMobileScreen className="text-2xl"/>
    },
]

export {dataservice}