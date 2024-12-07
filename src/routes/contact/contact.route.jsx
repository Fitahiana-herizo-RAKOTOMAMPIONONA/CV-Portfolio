import { BsInstagram, BsSendArrowUp } from "react-icons/bs"
import BoxContact from "../../components/card/box.contact"
import { datacontact } from "../../data/data.contact"
import { FaFacebook } from "react-icons/fa"
import { LiaLinkedinIn } from "react-icons/lia"

export default function Contact (props){
    return <div className="block  lg:flex gap-5">
        <div className=" p-6 rounded-2xl sm:flex-1">
            <div>
                <div className="uppercase text-left text-sm font-semibold">
                    contact info
                </div>
                {
                    datacontact.map((item,key) =>{[]
                        return <BoxContact key={key} icone={item.icone} title={item.title} contact1={item.contact1} contact2={item.contact2} email1={item.email1} email2={item.email2}/>
                    })
                }
            </div>
            <div>
                <div className="uppercase text-left text-sm font-semibold">
                    Social media
                </div>
                <div className="flex gap-5 justify-start p-5 sm:gap-10 sm:justify-center">
                    <div className="h-[80px] w-[80px] bg-black pt-4  rounded-lg">
                        <FaFacebook className="text-[40px] m-auto"/>
                    </div>
                    <div className="h-[80px] w-[80px] bg-black pt-4  rounded-lg">
                        <LiaLinkedinIn className="text-[40px] m-auto"/>
                    </div>
                    <div className="h-[80px] w-[80px] bg-black pt-4  rounded-lg">
                        <BsInstagram className="text-[40px] m-auto"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden bg-black p-6 rounded-2xl sm:flex-1">
            <img src="./assets/image/icon2.png" alt="" srcSet="" className="absolute top-[-15px] right-3"/>
            <h2 className="text-2xl font-bold mb-4 mt-4">Let's work <span className="text-blue-800">together.</span></h2>
            <div className="block gap-3">
                <input type="text" name="" id="" className="w-full p-3 rounded-lg  mt-2 mb-2" placeholder="Votre nom"/>
                <input type="email" name="" id=""  className="w-full p-3 rounded-lg mt-2 mb-2" placeholder="exemple@gmail.com"/>
                <textarea name="" className="w-full mt-2 mb-2 p-3 h-[150px] rounded-lg" id="" placeholder="Message ..."></textarea>
                <button type="button" className="w-full p-3 flex justify-center gap-5 border-red-50">
                    <BsSendArrowUp className="font-bold text-lg"/>
                    <div className="capitalize">
                        send
                    </div>
                </button>
            </div>
        </div>
    </div>
}