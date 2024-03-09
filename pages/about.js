import Header from "../components/Header";

export default function About() {
    return(
        <div className="w-full h-full">
            <Header />
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="font-regular text-white uppercase text-xs text-justify">Allie Paradowski is a film photographer based in Houston, Texas. A former nurse, Allie is wonderful at making people feel at ease. She works well with families and people of all ages, and strives to capture the joy of living in all photographic environments. Allie is available for portraits, weddings, events, and any occasion to capture the celebration of day-to-day life. </div>
            </div>
        </div>
    )
}