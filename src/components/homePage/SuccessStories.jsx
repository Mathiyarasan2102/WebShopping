import React from "react";
import SectionGrid from "./SectionGrid";
import PetConsultation from '../../assets/SuccessStoriesImages/PetConsultation.png';
import AramNews from '../../assets/SuccessStoriesImages/AramNewsWebsite.png';
import LA from '../../assets/SuccessStoriesImages/LA.png';

const stories = [
  { img: PetConsultation, title: "Built. Scaled. Exited with LA: Pet consultation app" },
  { img: AramNews, title: "Built. Scaled. Exited with LA: Aram News website" },
  { img: LA, title: "Built. Scaled. Exited with LA: Least Action Academy" },
];

export default function SuccessStories() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-[clamp(1rem,3vw,2rem)] mt-[clamp(2.5rem,5vw,4rem)] mb-[clamp(1.5rem,3vw,2.5rem)]">
      <h2 className="font-bold mb-[clamp(0.25rem,0.5vw,0.5rem)] text-[clamp(1.4rem,2.5vw,1.8rem)]">Real Results, Real Stories:</h2>
      <p className="text-black mb-[clamp(0.75rem,1.5vw,1.25rem)] text-[clamp(1rem,1.5vw,1.25rem)]">See How Buyers and Sellers are Winning on Least action company</p>

      <SectionGrid heading={null} items={stories}>
        {(s) => (
          <div>
            <img className="w-full h-[clamp(160px,15vw,200px)] object-cover p-[clamp(0.5rem,0.8vw,0.75rem)] rounded-md" src={s.img} alt={s.title} />
            <p className="font-semibold text-gray-400 mt-[clamp(0.5rem,0.8vw,0.75rem)] text-[clamp(0.9rem,1.2vw,1.1rem)]">SUCCESS STORIES</p>
            <h3 className="font-medium text-[#0053E2] hover:underline cursor-pointer mt-0.5 w-[95%] text-[clamp(1rem,1.5vw,1.2rem)]">{s.title}</h3>
          </div>
        )}
      </SectionGrid>
    </div>
  );
}
