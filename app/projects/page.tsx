import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
          <div className="prose prose-neutral dark:prose-invert text-justify">
            <h2 className="mb-5 font-bold text-xl">Projects</h2>
            <p className="font-semibold">
              Throughout the years, I have been able to contribute to projects in multiple domains, which has helped me gain confidence in solving problems with novel solutions.
            </p>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

            {/* Siemens Energy Project */}
            <h2 className="font-bold text-md mb-1 tracking-tight">High Speed Current Detection Circuit for Gas Insulated Switchgear Flashover Detection</h2>
            <p className="text-neutral-400 font-medium dark:text-neutral-400 text-sm">Siemens Energyy Ltd.</p>
            <Image
            className="m-5"
              src="/gis.png"
              width={800}
              height={500}
              alt="Picture of the author"
            />
            <ul className="list-disc pl-5">
              <li>Development of a high-speed current detection circuit for GIS flashover detection.</li>
              <li>Designed and implemented a fast-response detection system to mitigate flashover effects.</li>
              <li>Improved operational efficiency and reduced downtime significantly.</li>
            </ul>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

            {/* Solar Ballast Mounting */}
            <h2 className="font-bold text-md mb-1 tracking-tight">Design and Analysis of Solar Ballast Mounting</h2>
            <p className="text-neutral-400 font-medium dark:text-neutral-400 text-sm">Structura Energy Pvt. Ltd.</p>
            <ul className="list-disc pl-5">
            <Image
            className="m-5"
              src="/solar.png"
              width={800}
              height={500}
              alt="Picture of the author"
            />
              <li>Led development of a robust and efficient solar ballast mounting structure.</li>
              <li>Designed cost-effective and durable solutions for flat rooftop installations.</li>
              <li>Utilized CAD modeling, 3D printing, and FEA for design and testing.</li>
            </ul>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

            {/* Bio Printer Project */}
            <h2 className="font-bold text-md mb-1 tracking-tight">Open Source Bio Printer Concept</h2>
            <p className="text-neutral-400 font-medium dark:text-neutral-400 text-sm">MGM University | Reverse Engineering and Additive Manufacturing Lab</p>
            <Image
            className="m-5"
              src="/bioprinter.png"
              width={800}
              height={500}
              alt="Picture of the author"
            />
            <ul className="list-disc pl-5">
              <li>Used a Voron V0 as the base design for the bio printer.</li>
              <li>Configured and modified the Voron V0 to function as a bio printer.</li>
              <li>Designed custom extrusion system for efficient and accurate bio-ink flow.</li>
              <li>Integrated specialized nozzles and bio-ink reservoirs for printing biological materials.</li>
              <li>Conducted extensive testing and validation to ensure precision and reliability in bio printing applications.</li>
            </ul>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

            {/* Finger Force Measurement Unit */}
            <h2 className="font-bold text-md mb-1 tracking-tight">Design and Evaluation of Novel Finger Force Measurement Unit</h2>
            <p className="text-neutral-400 font-medium dark:text-neutral-400 text-sm">Toronto Metropolitan University</p>
            <Image
            className="m-5"
              src="/bioprinter.png"
              width={800}
              height={500}
              alt="Picture of the author"
            />
            <ul className="list-disc pl-5">
              <li>Designed a novel finger force measurement device utilizing field oriented control principles.</li>
              <li>Applied design thinking methodology to develop the product from scratch.</li>
              <li>Conducted feasibility studies and developed experimental configurations for performance assessment.</li>
            </ul>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

            {/* Drone Project */}
            <h2 className="font-bold text-md mb-1 tracking-tight">Design and Fabrication of Light to Medium Payload Delivery Quadcopter</h2>
            <p className="text-neutral-800 font-medium dark:text-neutral-400 text-sm">MGM University | Reverse Engineering and Additive Manufacturing Lab + Advanced Autonomous Aerial Vehicles Lab</p>
            <Image
            className="m-5"
              src="/drone2.png"
              width={800}
              height={500}
              alt="Picture of the author"
            />
            <ul className="list-disc pl-5">
              <li>Led design and fabrication of a quadcopter for light to medium payload delivery.</li>
              <li>Engineered a lightweight yet durable frame using carbon fiber and 3D printed components.</li>
              <li>Optimized for efficiency and reliability with a robust flight control system.</li>
              <li>Achieved a flight time of 25 minutes, suitable for various delivery applications.</li>
            </ul>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

            {/* EV Conversion */}
            <h2 className="font-bold text-md mb-1 tracking-tight">Systematic Analysis of ICE Powertrain and Converted Electric Powertrain</h2>
            <p className="text-neutral-800 font-medium dark:text-neutral-400 text-sm">Mahatma Gandhi Missions Polytechnic, Aurangabad | Final Year Project</p>
            <Image
            className="m-5"
              src="/ev.png"
              width={800}
              height={500}
              alt="Picture of the author"
            />
            <ul className="list-disc pl-5">
              <li>Led the conversion of a 2011 TATA Nano from an ICE vehicle to an EV.</li>
              <li>Replaced combustion engine with a high-torque BLDC motor and 5 kWh lithium-ion battery pack.</li>
              <li>Developed custom adapter plates and an electronic throttle control system.</li>
              <li>Achieved a 50 km range and a top speed of 60 km/h, demonstrating practical and economic benefits.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
