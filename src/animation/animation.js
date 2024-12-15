import gsap from "gsap"
import { ScrollTrigger,ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin,ScrollTrigger);

const slideINtop = (elem , delay , duratio) =>{
    gsap.fromTo(
        elem,
        {
            opacity:0,
            y: -40
        },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: elem,
                start: "top bottom",
                end: "bottom center"
            }
        },
    )
}

const slideINtopSlow = (elem , delay , duratio) =>{
    gsap.fromTo(
        elem,
        {
            opacity:0,
            y: -80
        },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: elem,
                start: "top 75%",
                end: "bottom center",
                // scrub: true,
            }
        },
    )
}
const slideINleft = (elem , delay , duratio) =>{
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            x: -100
        },
        {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: elem,
                start: "top bottom",
                end: "bottom center"
            }
        },
    )
}
const slideInRight = (elem , delay , duratio) =>{
    gsap.fromTo(
        elem,
        {
            opacity:0,
            x: 40
        },
        {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "bottom center"
            }
        },
    )
}
const undeux = (elem , delay , duratio) =>{
    gsap.timeline().fromTo(
        elem,
        {
            opacity: 0,
            y: -100
        },
        {
            opacity: 1,
            y: 0,
            stagger:0.33,
            delay:0.7,
        }
    )
}
export {slideINleft, slideINtop,undeux ,slideInRight , slideINtopSlow}