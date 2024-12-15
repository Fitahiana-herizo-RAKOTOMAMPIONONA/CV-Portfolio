import { BsInstagram } from "react-icons/bs"
import { LiaLinkedinIn } from "react-icons/lia"
import { experience, formation } from "../../data/data.experience"
import { CredentialsComponent } from "../../components/card/card.credentials"
import { FaFacebook } from "react-icons/fa6"
import skills from "../../data/skills.data"
import { SkillsComponent } from "../../components/components.export"
import { useEffect } from "react"
import { slideINtop } from "../../animation/animation"

export default function Credentials (props){
    useEffect(()=>{
        slideINtop(".cardG")
    })
    return <div className="grid grid-cols-1 lg:grid-cols-3 cardG">
        <div className="backgroundPers p-6 m-auto w-full  rounded-3xl max-w-[500px]  lg:m-0 relative h-auto">
            <img src="./assets/image/profile.jpg" alt="" className="w-full max-w-[500px] h-[200px] object-cover rounded-2xl lg:h-auto"/>
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
        <div className="h-full lg:col-span-2 lg:p-8 ">
            <div className="p-6">
                <div className="uppercase font-semibold text-xl pt-4 pb-4">
                    ABOUT ME
                </div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro eius eaque atque, quasi nihil similique veniam saepe blanditiis doloribus omnis cumque, modi enim numquam et. Dignissimos earum labore ex.
                </div>
            </div>
            <CredentialsComponent title="experience" data={experience}/>
            <CredentialsComponent title="education" data={formation}/>
            <div className="p-6">
                <div className="uppercase font-semibold text-xl pt-4 pb-4">
                    Skills
                </div>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-4">
                    {
                        skills.map((item,key)=>{
                            return <SkillsComponent key={key} title={item.title} icone={item.icone} className={""}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}