import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-8">
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <Image
              src="/ikasturirangan.jpg"
              alt="Kasturirangan Iyengar"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="lg:w-3/4">
            <h1 className="font-bold text-xl mb-5 tracking-tighter">
              Hey, I am Kasturirangan 👋
            </h1>
            <div className="prose prose-neutral dark:prose-invert text-justify">
              <p>
                {`I'm a mechanical engineer, product manager, and startup builder. Currently, I am the Chief Product Officer at `}
                <span className="font-bold">Eyemote Vision</span>
                {`, where I lead the development of innovative hardware and software solutions focused on eye care. My role involves building MVPs, facilitating early-stage testing, and fostering a collaborative environment to align product development with our corporate strategy.`}
              </p>
              <p>
                Before Eyemote Vision, I worked as an Engineering Intern at Siemens LTD, where I engineered a High-Speed Current Detection circuit for Gas Insulated Switchgear (GIS). This innovation significantly aids maintenance teams by accurately localizing flashover events, enhancing maintenance efficiency, and reducing operational downtime by up to 70%.
              </p>
              <p>
                I also had the opportunity to work as a Research Intern at the Haptics and Telerobotic Laboratory, Toronto Metropolitan University in Canada, where I designed a novel finger force measurement device using motor control principles and conducted feasibility studies to enhance the product design.
              </p>
              <p>
                I hold a Bachelor of Technology in Mechanical Engineering from Mahatma Gandhi Missions Jawaharlal Nehru Engineering College, Aurangabad, and a Diploma in Mechanical Engineering from Mahatma Gandhi Missions Polytechnic, Aurangabad. Throughout my academic journey, I have led various projects and held positions of responsibility, such as the Student Head of the Industry Institute Interaction Cell and President of the Mechanical Engineering Students Association.
              </p>
              <p>
                I am passionate about creating educational content for developers, teaching web development, JavaScript, TypeScript, React, and Next.js. This content comes in various forms, including blog posts, videos, tweets, conference talks, and workshops.
              </p>
              <p>
                I have worked with and advised companies on developer marketing,{' '}
                <Link href="/blog/devrel-at-vercel">developer relations</Link>, building open-source communities, product-led growth, and more.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
