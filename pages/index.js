import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Home() {
    const images = ["cows.jpeg", "tree.jpeg", "couple.jpeg", "index.jpeg"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="w-full h-full relative">
            <Header />
            {/* <div className="font-display text-5xl text-center pt-8">Allie Paradowski Photography</div> */}
            {/* <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
                <div className="w-screen h-screen grid grid-cols-2 gap-8 p-8">
                    <img src="cows.jpeg" className="h-[50vh] w-full object-cover" />
                    <img src="tree.jpeg" className="h-[50vh] w-full object-cover" />
                    <img src="couple.jpeg" className="h-[50vh] w-full object-cover" />
                    <img src="index.jpeg" className="h-[50vh] w-full object-cover" />
                </div>
            </div> */}
            
            <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
                <img src="tree.jpeg" className="h-full w-full object-cover brightness-75" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-[-1]">
                <div className="font-display text-9xl text-center tracking-widest">Allie Paradowski</div>
                <div className="uppercase font-thin text-sm font-regular font-thin tracking-[10px]">Photography</div>
            </div>
{/*         
            <div className="flex justify-between m-8">
                <img src="cows.jpeg" className="max-w-[500px] object-cover" />
                <img src="tree.jpeg" className="max-w-[500px] object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="couple.jpeg" className="max-w-[500px] object-cover" />
            </div> */}
        </div>
    )
}