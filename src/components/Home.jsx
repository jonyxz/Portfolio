import {HOME_CONTENT} from '../constants'
import profilPic from '../assets/joProfile.jpeg'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Home = () => {
    return (
        <div className="pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Krlssue
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Beginner Developer
                        </span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HOME_CONTENT}
                        </p>
                        <div className="flex gap-6 text-2xl">
                            <FaLinkedin/>
                            <FaGithub/>
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-4 ">
                    <div className="flex justify-center">
                        <img className=" rounded-full shadow-inner opacity-75" src={profilPic} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home