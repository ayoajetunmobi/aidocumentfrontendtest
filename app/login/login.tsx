"use client"
import React, { useEffect, useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { CreateAcc } from "./register"
import { ForgotPassword } from "./forgotten"
import Link from 'next/link';

export function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [slideState, setSlideState] = useState<number>(0);
    const [pageView, setPageView] = useState<number>(0);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempted with:', { email, password });
    };

    function AddCount(){
        const slide1 = document.querySelector(".logSlide1") as HTMLElement;
        const slide2 = document.querySelector(".logSlide2") as HTMLElement;
        const slide3 = document.querySelector(".logSlide3") as HTMLElement;

        if(slideState==0){
            slide1.classList.add("slideLogActive")
        }else if(slideState ==1){
            slide2.classList.add("slideLogActive")
        }else if (slideState ==2){
            slide3.classList.add("slideLogActive")
        }
    }

    useEffect(()=>{
        AddCount()
        const slide1 = document.querySelector(".logSlide1") as HTMLElement;
        const slide2 = document.querySelector(".logSlide2") as HTMLElement;
        const slide3 = document.querySelector(".logSlide3") as HTMLElement;

        const intervalId = setInterval(() => {
            if(slideState>=3){
                setSlideState(0)
                slide1.classList.remove("slideLogActive")
                slide2.classList.remove("slideLogActive")
                slide3.classList.remove("slideLogActive")
            }else{
                setSlideState(prev=>prev+1)
            }          
        }, 5000);
        
        return ()=>{
            clearInterval(intervalId);
        }
    },[slideState])

    return (
        <div className="absolute w-full min-h-screen overflow-hidden justify-center bg-orange-50 p-4">
            <div className="absolute top-0 left-0-translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>
            {/*  form */}
            <div className='flex justify-center'>
                <div className="flex justify-evenly pt-5 w-[90%] md:w-[85%] h-fit bg-white dark:bg-zinc-900 shadow-xl rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 transition-all duration-300">
                    <div className='hidden md:block -ml-11 mt-5.5 w-[50%] justify-start  dark:bg-zinc-900 shadow-xl border border-slate-300 h-[80vh] rounded-2xl overflow-hidden'>
                        <div className="sliderLog">
                            <div className="slide-track flex">
                                {
                                    (slideState==0?
                                        <div className='w-200 h-129'>
                                            <video className='w-[fit-container]'
                                                autoPlay
                                                loop
                                                preload="metadata"
                                                poster="/video-placeholder.jpg"
                                            >
                                                <source src="/loginRobotVid.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            <video className='w-[fit-container]'
                                                autoPlay
                                                loop
                                                preload="metadata"
                                                poster="/video-placeholder.jpg"
                                            >
                                                <source src="/loginRobotVid.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    :
                                    <>{slideState==1? <Image className=' w-200 h-129' src="/loginRobot2.jpg" alt="Slide 2" width={500} height={500}></Image> 
                                       :<Image className='w-200 h-129' src="/loginRobot1.jpg" alt="Slide 1" width={500} height={500}></Image>} </>
                                    )
                                }

                                {/* <video src="/loginRobotVid.mpt"></video> */}
                                
                            </div>
                            <div className='w-full flex gap-1 justify-center -mt-8 z-10'>
                                <div className='w-20 relative'>
                                    <div className='absolute w-20 h-2 bg-zinc-400'></div>
                                    <div className='logSlide1 absolute w-0 h-2 bg-blue-400'></div>
                                </div>
                                <div className='w-20 relative'>
                                    <div className='absolute w-20 h-2 bg-zinc-400'></div>
                                    <div className='logSlide2 absolute w-0 h-2 bg-blue-400'></div>
                                </div>
                                <div className='w-20 relative'>
                                    <div className='absolute w-20 h-2 bg-zinc-400'></div>
                                    <div className='logSlide3 absolute w-0 h-2 bg-blue-400'></div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    { /* Card Container */ }
                    <div className='mt-5'>    
                        {/* Header */}
                        <div className="p-3 text-center border-slate-100 dark:border-zinc-800">
                            <div className='w-full flex justify-center rounded-2xl bg-orange-950'>
                                <Link href={"/"}>
                                    <div className="flex">
                                        <span>🍇</span>
                                        <span className="text-blue-600 font-bold text-3xl flex-1"> In </span>
                                        <span className="text-white text-3xl font-bold"> Docs </span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Form */}
                        {
                            pageView==0?
                            <>
                                <p className="text-slate-500 dark:text-zinc-400 mt-3">Please enter your details to sign in</p>
                                <form onSubmit={handleSubmit} className="p-4 space-y-6">
                                    <div className="space-y-4">
                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700 dark:text-zinc-300 block">
                                                Email Address
                                            </label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                                                    <Mail size={18} />
                                                </div>
                                                <input 
                                                    type="email" 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="block w-full pl-10 pr-3 py-1.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
                                                    placeholder="name@company.com" 
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        {/* Password Field */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <label className="text-sm font-medium text-slate-700 dark:text-zinc-300 block">
                                                    Password
                                                </label>
                                                <button onClick={()=>{setPageView(2)}} className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                                                    Forgot password?
                                                </button>
                                            </div>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                                                    <Lock size={18} />
                                                </div>
                                                <input 
                                                    type={showPassword ? "text" : "password"} 
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="block w-full pl-10 pr-12 py-1.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
                                                    placeholder="••••••••" 
                                                    required 
                                                />
                                                <button 
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 transition-colors"
                                                >
                                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/30 transition-all active:scale-[0.98]"
                                    >
                                        <span>Sign In</span>
                                        <ArrowRight size={18} />
                                    </button>

                                </form>
                                <br />
                                <div>
                                    <button className="flex items-center justify-center gap-3 w-full px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500">
                                        {/* <!-- Google SVG Icon --> */}
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                                        </svg>
                                        <span>Sign in with Google</span>
                                    </button>

                                    <button className="flex items-center justify-center gap-3 mt-2 w-full px-4 py-2.5 bg-[#24292F] hover:bg-[#24292F]/90 text-white font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500">
                                        {/* <!-- GitHub SVG Icon --> */}
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                        </svg>
                                        <span>Sign in with GitHub</span>
                                    </button>
                                </div>
                                <br />
                                {/* Footer */}
                                <div className="p-6 bg-slate-50 dark:bg-zinc-800/50 text-center border-t border-slate-100 dark:border-zinc-800">
                                    <p className="text-sm text-slate-600 dark:text-zinc-400">
                                        Don't have an account?{' '}
                                        <button onClick={()=>{setPageView(1)}} className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                                            Create account
                                        </button>
                                    </p>
                                </div>
                            </>
                            : pageView == 1? <CreateAcc data={()=>{setPageView(0)}}/>:<ForgotPassword data={()=>{setPageView(0)}} />
                        }
                        
                    </div>
                </div>
            </div>
            <div className="absolute top-full left-[50%] -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
}
