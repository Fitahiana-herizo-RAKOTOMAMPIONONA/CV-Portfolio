import { useEffect } from "react"
import { BoxService, CardAccueil, Titre } from "../../components/components.export"
import { dataservice } from "../../data/data.service"
import { slideINtop, slideINtopSlow } from "../../animation/animation"


export default function Service() {
    useEffect(() => {
        slideINtop(".cardB")
        slideINtopSlow(".card1")
        slideINtopSlow(".card2")
        slideINtopSlow(".card3")
        slideINtopSlow(".cardBox4")
        slideINtopSlow(".cardBox5")
        slideINtopSlow(".cardBox6")
        slideINtopSlow(".cardBox7")
    }, [])
    return <div className="cardB">
        <div className="bg-black rounded-2xl p-6">
            {
                dataservice.map((item, key) => {
                    return <BoxService key={key} icone={item.icone} title={item.title} />
                })
            }
        </div>
        <Titre title="service offering" className="text-6xl" />
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-5">
            <CardService
                image="/assets/image/my-works.png"
                title="development Web"
                className="card1"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iusto inventore, magnam modi quibusdam eligendi nostrum 
                perferendis quisquam est ipsum illo repellendus! Quibusdam 
                neque nam sit aut magni dolore rem mollitia?"
            />
            <CardService
                image="/assets/image/my-works.png"
                title="development mobile"
                className="card2"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iusto inventore, magnam modi quibusdam eligendi nostrum 
                perferendis quisquam est ipsum illo repellendus! Quibusdam 
                neque nam sit aut magni dolore rem mollitia?"
            />
            <CardService
                image="/assets/image/my-works.png"
                title="Design UI/UX"
                className="card3"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iusto inventore, magnam modi quibusdam eligendi nostrum 
                perferendis quisquam est ipsum illo repellendus! Quibusdam 
                neque nam sit aut magni dolore rem mollitia?"
            />
            <CardAccueil
                description="MORE ABOUT ME"
                title="Credentials"
                image="./assets/image/sign.png"
                className="cardBox4"
                to="/credentials"
            />

            <CardAccueil
                description="SHOWCASE"
                title="Projects"
                image="./assets/image/my-works.png"
                className="cardBox5"
                to="/work"
            />

            <CardAccueil
                description="BLOG"
                title="gFonts"
                image="./assets/image/gfonts.png"
                className="cardBox6"
                to="/blog"
            />
            <CardAccueil
                description="MORE"
                title="Contact me."
                className="cardBox7"
                to="/Contact"
            />
        </div>
    </div>
}

export function CardService(props) {
    return <div className={`p-6 relative backgroundPers rounded-3xl ${props.className}`}>
        <img src={props.image} alt="" srcSet="" className="m-auto" />
        <div className="text-center capitalize font-semibold pt-3 pb-3 text-lg">
            {props.title}
        </div>
        <div className="p-2">
            {
                props.description
            }
        </div>
    </div>
}