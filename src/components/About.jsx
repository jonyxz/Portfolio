import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {RiJavascriptLine} from "react-icons/ri"
import {SiPhp} from "react-icons/si";
import {RiReactjsLine} from "react-icons/ri"

import aboutImg from '../assets/about.jpg'
import {ABOUT_TEXT_1, ABOUT_TEXT_2} from '../constants'

const About = () => {
    return (
        <div className="pb-4 lg:mb-44">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500 m-2">
                    Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl' src={aboutImg} alt="about"/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 mt-6">
                            {ABOUT_TEXT_1}<br/><br/>{ABOUT_TEXT_2}
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-start gap-4">
                        <div className="rounded-2xl border-4 border-neutral-500 p-4">
                            <FaHtml5 className="text-4xl"/>
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-500 p-4">
                            <FaCss3Alt className="text-4xl"/>
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-500 p-4">
                            <RiJavascriptLine className="text-4xl"/>
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-500 p-4">
                            <SiPhp className="text-4xl"/>
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-500 p-4">
                            <RiReactjsLine className="text-4xl"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About