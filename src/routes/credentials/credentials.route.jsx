import { BsInstagram } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa6"
import { LiaLinkedinIn } from "react-icons/lia"

export default function Credentials (props){
    return <div>
        <div className="backgroundPers p-6 m-auto w-full  rounded-3xl max-w-[600px]">
            <img src="./assets/image/profile.jpg" alt="" className="w-full max-w-[600px] h-[200px] object-cover rounded-2xl"/>
            <div className="capitalize font-semibold text-xl text-center p-2 pt-4">Herizo fitahiana</div>
            <div className="capitalize text-lg text-center text-gray-600">@Zoufitahiana</div>
            <div className="backgroundPers flex gap-5 justify-center p-3 rounded-2xl sm:gap-10 sm:justify-center">
                <div className="h-[60px] w-[60px] backgroundPers pt-[10px]   rounded-full">
                    <FaFacebook className="text-[40px] m-auto"/>
                </div>
                <div className="h-[60px] w-[60px] backgroundPers pt-[10px]  rounded-full">
                    <LiaLinkedinIn className="text-[40px] m-auto"/>
                </div>
                <div className="h-[60px] w-[60px] backgroundPers pt-[10px]  rounded-full">
                    <BsInstagram className="text-[40px] m-auto"/>
                </div>
            </div>
        </div>
        <div className="p-6">
            <div className="uppercase font-semibold text-xl pt-4 pb-4">
                ABOUT ME
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro eius eaque atque, quasi nihil similique veniam saepe blanditiis doloribus omnis cumque, modi enim numquam et. Dignissimos earum labore ex.
            </div>
        </div>
    </div>
}
