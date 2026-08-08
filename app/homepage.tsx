"use client"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleCheck, faGripHorizontal, faGripLines, faLineChart, faLinesLeaning, faList, faListNumeric, faListOl, faMasksTheater, faMessage, faNetworkWired, faPlaneCircleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import { RefObject, useEffect } from "react";
import { useIntersectionObserver } from "./intersectionObs"
import { ReviewCard } from "./review"
import { Wendy_One } from 'next/font/google';
import Link from "next/link";

const wendyOne = Wendy_One({
  weight: '400',       // Wendy One only supports regular (400) weight
  subsets: ['latin'],
  display: 'swap',
});

export function HOMEPAGE(){
    const {ref: headerRef, isIntersecting:isHeaderVisible} = useIntersectionObserver({
        freezeOnceVisible:true
    }) 
    const {ref: headerRef1, isIntersecting:isHeaderVisible1} = useIntersectionObserver({
        freezeOnceVisible:true
    })
    const {ref: newHeaderRef, isIntersecting:isNewHeaderRef} = useIntersectionObserver({
        freezeOnceVisible:true
    })
    const {ref: headerRef3, isIntersecting:isHeaderVisible3} = useIntersectionObserver({
        freezeOnceVisible:true
    })
   
    const first_intro = [
        {
            heda:"data analytics",
        },
        {
            heda: "report summary",
        },
        {
            heda: "document creation",
        },
        {
            heda: "form url",
        },
        {
            heda: "email analysis",
        },
    ]

    function switchHidSlide(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
        const isMobileView = window.matchMedia("only screen and (max-width: 600px)").matches;
        const slides = document.querySelectorAll(".hidSlide");

        const dataclicked = e.target as HTMLElement;
        const computedStyles = window.getComputedStyle(dataclicked);
        const altComputedStyles = window.getComputedStyle(dataclicked.parentElement as HTMLDivElement);
        const lastElement = window.getComputedStyle(slides[slides.length -1]);

        

        if(isMobileView){
            const act_element= computedStyles.left === "auto"? dataclicked.parentElement as HTMLDivElement : dataclicked ;
            for(let i=0; i < slides.length ;i++){
                if(slides[i] == act_element){
                    const act_value= computedStyles.left === "auto"? altComputedStyles.left : computedStyles.left;
                    dataclicked.style.left=`${lastElement.left}`;
                    const lastelem = slides[slides.length -1] as HTMLDivElement;
                    lastelem.style.left=`${act_value}`

                    if(slides[i].parentNode != null){
                        slides[i].parentNode?.replaceChild(slides[slides.length -1], slides[i])
                        slides[slides.length-1].parentNode?.appendChild(act_element)
                        // slides[slides.length-1].parentNode?.replaceChild(act_element)
                    }
                }
            }

            
        }
    }

    const rev= {
        id: "1",
        author: "javovic",
        avatarUrl: "/logo1.png",
        rating: 4,
        date: "",
        title: "I Love this Platform",
        content: "they really helped me simplify my workflow, I love this platform and cant get enough of it",
        verified: true,
        helpfulCount: 3,
    }

    useEffect(()=>{
        const questions = document.querySelectorAll('.faq-question');
        const open = document.getElementById("open");
        const close = document.getElementById("close");
        const clicks =[open,close]
        const menu = document.getElementById("menu");

        questions.forEach((question) => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                if(item != null){
                    item.classList.toggle('active');
                }
            });
        });

        clicks.forEach(elem=>{
            elem?.addEventListener("click",(e)=>{
                const target = e.target as (HTMLOrSVGImageElement| HTMLButtonElement);
                let compare = target.getAttribute("data-icon");

                if(target.getAttribute("fill") != null && (menu as HTMLDivElement).style.display =="none"){
                    compare="bars";
                }
                
                if(compare === "bars" || target === open){
                    (open as HTMLDivElement).style.display="none";
                    (menu as HTMLDivElement).style.display="block";
                    (close as HTMLDivElement).style.display="block";
                }else{
                    (open as HTMLDivElement).style.display="block";
                    (menu as HTMLDivElement).style.display="none";
                    (close as HTMLDivElement).style.display="none";
                }
            })
        })
    },[])
    return (
        <div>
            <div className="h-13 fixed top-0 w-full bg-amber-200 p-2 flex border-b z-10">
                <Link href={"/"}>
                    <div className="flex">
                        <span>🍇</span>
                        <span className="text-blue-600 font-bold text-3xl flex-1"> In </span>
                        <span className="text-white text-3xl font-bold"> Docs </span>
                    </div>
                </Link>
                <div className="block lg:hidden w-full absolute left-[76%] text-3xl mr-50">
                    <button id="open" className="w-10 h-10 overflow-hidden absolute cursor-pointer"> <FontAwesomeIcon className="w-full h-full" icon={faBars}/></button>
                    <button id="close" className="w-10 h-10 absolute cursor-pointer text-[1.5rem] hidden"> <FontAwesomeIcon className="w-full h-full" icon={faX}/></button>
                </div>

                <div className="hidden lg:flex w-full justify-end text-3xl mr-50">
                    <Link href={"/login"} className="cursor-pointer font-bold text-black rounded-[15px] text-nowrap text-sm pl-2 pr-2 tracking-widest"> log in  →</Link>
                </div>
                <div id="menu" className="hidden lg:hidden absolute left-[76%] bg-white p-2 h-fit w-23 right-40 top-10 shadow">
                    <Link href={"/login"} className="cursor-pointer font-bold text-black rounded-[15px] text-nowrap text-sm pl-2 pr-2 tracking-widest"> log in  →</Link>
                </div>
            </div>

            {/* END OF HEADER START OF INTRO */}
            <div className="h-fit w-full mt-10">
                <div className="absolute top-0 left-0-translate-x-1/2 -translate-y-1/2 w-70 h-56 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex justify-center z-5 p-[20px 20px 0px 20px]">
                    <div className="text-center pt-12 pl-4 pr-4 md:pl-10 md:pr-10">
                         <p ref={headerRef} className={`${wendyOne.className} text-center text-2xl md:text-[5rem] lg:font-bold bg-linear-to-bl from-purple-700 to-green-500 bg-clip-text text-transparent transition-all duration-500 ease-in
                            ${isHeaderVisible? "ml-0" : "-ml-500"}`}> 
                            GET ALL YOUR →
                        </p>
                        <p ref={headerRef}
                            className={`${wendyOne.className} -mt-3 md:-mt-9 text-nowrap text-center text-2xl md:text-[4rem] lg:font-bold bg-linear-to-bl from-purple-700 to-green-500 bg-clip-text text-transparent transition-all duration-1000 ease-in
                            ${isHeaderVisible? "ml-0" : "-ml-500"}`}> 
                            PAPER WORK DONE
                        </p>
                        <p className="text-[1.2rem] md:text-[3rem] text-center font-extrabold text-black"> IN ONE PLACE </p>
                        <p className="text-sm mt-5 tracking-wide text-shadow-2xs"> get tools that help you automate your workflow, these includes working with documents, reundant emails, HR forms and surveys</p>
                        <div className="flex justify-center bg-green-400 border border-white hover:bg-orange-500 w-full p-2 mt-5 rounded-md">
                            <button className="text-white tracking-widest w-fit"> Get Started ↵ </button>
                        </div>
                        
                        <div className="w-full flex justify-center">
                            <div className="w-50 md:w-100 overflow-hidden corasel-con">
                                <div className="mt-10 flex gap-2 courasel justify-center">
                                    {first_intro.map((dt,index)=>
                                        <button key={index} className="border text-nowrap text-[0.8rem] rounded-sm tracking-wide p-1 border-black text-black">
                                            {dt.heda}
                                        </button>
                                    )}
                                    {first_intro.map((dt,index)=>
                                        <button key={index} className="border text-nowrap  text-[0.8rem] rounded-sm tracking-wide p-1 border-black text-black">
                                            {dt.heda}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <Image
                                src={"/anime.gif"}
                                alt=""
                                width={"150"}
                                height={"150"}
                                loading="eager"
                                unoptimized>
                            </Image>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 -mt-50 w-46 h-46 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>
            </div>
            <div className="bg-amber-200 h-135 w-full p-10  lg:block">
                <div onClick={(e)=>{switchHidSlide(e)}} className={`hidSlide transition-all duration-500 ease-in m-2 absolute left-1 lg:left-70 h-110 w-45 md:w-70 pt-5 pl-10 pr-10 bg-linear-to-bl from-amber-700 to-amber-200 rounded-[20px] shadow-2xl`}>
                    <FontAwesomeIcon className="border text-[1.3rem] p-2 rounded-[40px]"
                       icon={faNetworkWired}>
                    </FontAwesomeIcon>
                    <p className="w-28 text-white text-2xl font-bold "> Workflow in one place </p>
                    <p className="text-sm tracking-wide font-normal mt-4 w-28"> get all your office work done with a single app that uses AI to automate and simpify workflow, you can easily generate documents, analyse existing document and much more </p>
                </div>
                <div onClick={(e)=>{switchHidSlide(e)}} className={`hidSlide transition-all duration-500 ease-in m-2 absolute left-8 lg:left-110 h-110 w-45 md:w-70 pt-5 pl-10 pr-10 bg-linear-to-bl from-amber-700 to-amber-200 rounded-[20px] shadow-2xl`}>
                    <FontAwesomeIcon className="border text-[1.3rem] p-2 rounded-[40px]"
                      icon={faGripHorizontal} >
                    </FontAwesomeIcon>
                    <p className="w-28 text-white text-2xl font-bold ">Advanced Analytics</p>
                    <p className="text-sm tracking-wide font-normal mt-4 w-28">get advanced data analysis to discover key KPI from your data with just prompting our model, you can even go ahead and create advanced dashboards</p>
                </div> 
                <div onClick={(e)=>{switchHidSlide(e)}} className={`hidSlide transition-all duration-500 ease-in m-2 absolute left-15 lg:left-150 h-110 w-45 md:w-70 pt-5 pl-10 pr-10 bg-linear-to-bl from-amber-700 to-amber-200 rounded-[20px] shadow-2xl`}>
                    <FontAwesomeIcon className="border text-[1.3rem] p-2 rounded-[40px]"
                      icon={faPlaneCircleExclamation}>
                    </FontAwesomeIcon>
                    <p className="w-28 text-white text-2xl font-bold ">Automate your workflow</p>
                    <p className="text-sm tracking-wide font-normal mt-4 w-28">we help you automate certain workflow like reading through  thousand of irrelevant emails or even reading all survey response gotten from your forms</p>
                </div> 
                <div onClick={(e)=>{switchHidSlide(e)}} className={`hidSlide transition-all duration-500 ease-in m-2 absolute left-22 lg:left-190 h-110 w-45 md:w-70 pt-5 pl-10 pr-10 bg-linear-to-bl from-amber-700 to-amber-200 rounded-[20px] shadow-2xl`}>
                    <FontAwesomeIcon className="border text-[1.3rem] p-2 rounded-[40px]"
                      icon={faMasksTheater}>
                    </FontAwesomeIcon>
                    <p className="w-28 text-white text-2xl font-bold "> Free daily API request </p>
                    <p className="text-sm tracking-wide font-normal mt-4 w-28"> we help you automate certain workflow like reading through  thousand of irrelevant emails or even reading all survey response gotten from your forms </p>
                </div> 
            </div>

            <div className="flex flex-wrap lg:flex-nowrap lg:gap-5">
                <div className="absolute left-50 -translate-x-1/2 -translate-y-1/2 w-70 h-56 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>
                <div className="w-140 h-auto">
                    <Image
                        src={"/comp.gif"}
                        alt=""
                        width={"500"}
                        height={"300"}
                        loading="eager"
                        unoptimized>
                    </Image>
                </div>

                <div className="p-6 lg:p-15">
                    <p className={` text-2xl lg:text-4xl w-fit lg:w-100 font-bold tracking-widest`}>
                        INSTANT DATA ANALYTICS USING <span className={`${wendyOne.className} text-orange-500 text-[2rem] lg:text-[3rem]`}>ARTIFICIAL INTELLIGENCE</span>
                    </p>
                </div>
                 <div className="p-5 text-sm">
                    <ul className="connected-list">
                        <li>
                           <span> analyse excel document to get insight using our custom AI solution </span>
                        </li>
                        <li>
                           <span> create instant dashboard  with url links you can share with your team to visit your dashboard </span>
                        </li>
                        <li>
                           <span> save data in your workspace so you can revisit them later and start from where you stopped </span>
                        </li>
                        <li>
                           <span> interact with our AI Assitant model like you hired a real data analyst </span>
                        </li>
                        <li>
                           <span>  save editted document as an excel file  </span>
                        </li>
                    </ul>
                    
                </div>
            </div>
            {/* WORK WITH VARIOUS FILES */}
            <div className="bg-amber-700 pt-10">
               <div className="w-full flex justify-center flex-wrap gap-5">
                    <div className="p-5 text-left max-h-50 overflow-hidden">
                        <p ref={headerRef1} className={`text-white tracking-wide font-bold text-2xl lg:text-3xl transition-all duration-1000 ease-in
                            ${isHeaderVisible1 ? "mt-0" : "-mt-13"}`}>
                                WORK WITH VARIOUS FILE FORMATS 
                        </p>
                       <ul className="connected-list">
                            <li> download your AI response in any file format </li>
                            <li> generate reports from large documents in minutes </li>
                       </ul>
                    </div>
                    <Image
                        src={"/filesformat.png"}
                        alt=""
                        height={1200}
                        width={600}>
                    </Image>
               </div>
            </div>

            {/* COLLABORATIVE EDITING */}
            <div  className="h-fit bg-amber-100 p-5 flex justify-center flex-wrap gap-4">
                <div>     
                    <Image
                        src={"/collabops.png"}
                        alt=""
                        height={500}
                        width={500}>
                    </Image>
                </div>
                <Image
                    src={"/collab.gif"}
                    alt=""
                    height={600}
                    width={600}
                    unoptimized>
                </Image>
            </div>
            <div className="h-fit text-center pl-4 pr-4">
                <p ref={newHeaderRef} className={`h-18 text-2xl lg:text-3xl font-bold transition-all duration-1000 ease-in ${isNewHeaderRef? "mt-10" : "-mt-20"}`}> CREATE FORMS AND SHARE URL </p>
                <p className="text-shadow-2xs mb-5"> customise your form for surveys and HR recruitment 
                    and get your response inside eah form or as an excel file  
                </p>
                <div className="flex justify-center">
                    <Image
                       src= {"/formsuri.png"}
                       alt=""
                       width={400}
                       height={400}>
                    </Image>
                </div>
            </div>
            <div  className="h-fit flex w-full flex-wrap lg:gap-10 bg-amber-100 p-10">
                <div>
                    <p className="lg:w-[50%] lg:pt-15 text-3xl font-bold"> AUTOMATE EMAIL CHECKS AND RESPONSES </p>
                    <p className="lg:w-140 pb-6"> Create rules that our AI model will use to check mails
                        and respond to email that meet your criterial, it can also peerform actions like forward certain emails to your 
                        personal account or drop you a <FontAwesomeIcon className="text-green-900" icon={faMessage} /> whatsapp message
                    </p>
                </div>
                <Image
                    src={"/emailpic.png"}
                    alt=""
                    height={500}
                    width={500}>
                </Image>
            </div>
            <div  className="h-fit bg-amber-200 p-4 md:p-20">
                <p className="text-2xl lg:text-3xl text-left text-white pb-5 font-bold"> FREQUENTLY ASKED <span className="text-green-500">QUESTIONS</span> </p>
                <div className="faq-section w-full">
                    <div className="faq-item border border-black rounded-[15px] mb-2">
                        <button className="faq-question text-black w-full text-left p-3 font-bold cursor-pointer flex justify-between align-middle">What is your return policy? <span className="icon">+</span></button>
                        <div className="faq-answer transition-all duration-300 ease-in-out h-0 overflow-hidden pl-3">
                            <p className="text-zinc-800 text-sm p-1">You can return any item within 30 days of purchase for a full refund.</p>
                        </div>
                    </div>
                    <div className="faq-item border border-black rounded-[15px]">
                        <button className="faq-question text-black w-full text-left p-3 font-bold cursor-pointer flex justify-between align-middle">How long does shipping take? <span className="icon">+</span></button>
                        <div className="faq-answer transition-all duration-300 ease-in-out h-0 overflow-hidden pl-3">
                        <p className="text-zinc-800 text-sm p-1">Standard shipping takes 3 to 5 business days.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-1 md:p-15 block md:flex justify-center md:overflow-x-auto border-b mb-2">
                <ReviewCard review={rev} />
                <ReviewCard review={rev} />
                <ReviewCard review={rev} />
       
            </div>
            <div className="p-10 h-fit flex flex-wrap">
                <Image
                    src={"/partners.png"}
                    alt=""
                    height={500}
                    width={500}>
                </Image>
                <div className="lg:ml-50 lg:mt-20 mt-10">
                    <div className="flex gap-2">
                        <p ref={headerRef3} className={`text-3xl h-18 overflow-hidden font-bold transition-all duration-1000 ease-in ${isHeaderVisible3? "mt-0": "-mt-20"}`}> PATNER WITH US </p>     
                    </div>
                    <p className="w-full lg:w-100 mt-3 text-sm"> We are open to intellectual and financial partnership, to be part of this innovation, contact us today </p>
                    <button className="flex gap-2 p-2 bg-amber-700 pt-2 rounded-2xl text-white font-bold border-2 border-gray-800">
                        START NOW 
                         <Image
                            src={"/leggos.png"}
                            alt=""
                            height={20}
                            width={20}>
                        </Image>
                    </button>
                </div>
                <div className="absolute right-0   w-70 h-56 bg-indigo-500/30 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
            </div>

            
            <div className="p-10 h-fit bg-black">
                <div className="flex w-10">
                    <span>🍇</span>
                    <span className="text-blue-600 font-bold text-3xl flex-1">In</span>
                    <span className="text-white text-3xl font-bold">Docs</span>
                </div>
                <p className="text-sm text-white mt-3"> contact us </p>
                <p className="text-sm text-white mt-3"> partnership </p>
                <div className="faq-item w-fit mt-3">
                        <button className="faq-question text-white w-21 text-left cursor-pointer flex justify-between align-middle"> services <span className="icon">+</span></button>
                        <div className="faq-answer transition-all duration-300 ease-in-out h-0 overflow-hidden pl-3">
                            <p className="text-zinc-300 text-nowrap text-sm p-1"> AI document generation </p>
                            <p className="text-zinc-300 text-nowrap text-sm p-1"> advanced data analytics with AI </p>
                            <p className="text-zinc-300 text-nowrap text-sm p-1"> collaborative editing </p>
                            <p className="text-zinc-300 text-nowrap text-sm p-1"> forms and url </p>
                        </div>
                </div>
                <p className="text-sm text-white mt-3"> policy </p>
                <p className="text-sm text-white mt-3"> legal reports </p>
            </div>
        </div>
    )
}
