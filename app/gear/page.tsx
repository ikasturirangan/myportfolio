import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
      <section className="antialiased flex flex-col mx-4 mt-8 lg:mx-auto">
        <div className="prose prose-neutral dark:prose-invert text-justify">
        <h2 className="mb-5 font-bold text-xl">Gear</h2>
          <p>
            Over the years, I have gathered a collection of tools and equipment that help me bring my projects to life. Here are some of the key items I use:
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
 {/* EDC */}
 
          <h2 className="font-semibold text-lg mb-1 tracking-tight">Laptop</h2>
          <Image className="p-5 mx-auto"
            src="/laptop.jpg"
            width={800}
            height={500}
            alt="Laptop"
          />
          <p>
            My daily driver is a Asus TUF FX517ZC equipped with an 12th Gen Intel(R) Core(TM) i5-12450H, 32GB DDR5 RAM, and a 2TB Samsung 990 Pro SSD. This laptop is essential for Part Designs, Renderings, coding, running simulations, and handling all my day-to-day tasks. Alongside the MX Master 3S my setup allows me to do everything I need and more.
          </p>
          <Link href="https://www.asus.com/in/laptops/for-gaming/tuf-gaming/asus-tuf-dash-f15-2022/">
          <Button variant={"link"} className="text-blue-300"> Asus TUF - FX517ZC <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <Link href="https://www.logitech.com/en-in/products/mice/mx-master-3s.html">
          <Button variant={"link"} className="text-blue-300"> Logitech MX Master 3S <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

          {/* Monitor */}
          <h2 className="font-semibold text-lg mb-1 tracking-tight">Monitor</h2>
          <Image className="p-5 mx-auto"
            src="/monitor.jpg"
            width={800}
            height={500}
            alt="Monitor"
          />
          <p>
            My setup includes a 27-inch LG Ultragear - 27GN650 that provides ample screen real estate for multitasking and detailed design work. It is great for reviewing CAD models and Gaming.
          </p>
          <Link href="https://www.lg.com/us/monitors/lg-27gn650-b-gaming-monitor">
          <Button variant={"link"} className="text-blue-300"> LG Ultragear Monitor <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

          {/* 3D Printers */}
          <h2 className="font-semibold text-lg mb-1 tracking-tight">3D Printers</h2>
          <Image className="p-5 mx-auto"
            src="/printers.png"
            width={800}
            height={500}
            alt="3D Printers"
          />
          <p>
            I own four 3D printers: two FDM printers and a SLA printer. I also have a Creality Ender 3 S1 Pro which I currently donot use and plan on modifying it to turn it into a laser engraver. These machines are invaluable for prototyping and creating custom parts for my projects. The precision and versatility they offer allow me to experiment with different materials and designs.
          </p>
          <Link href="https://www.creality.com/products/k1c-carbon-3d-printer">
          <Button variant={"link"} className="text-blue-300"> Creality K1C <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <Link href="https://store.bambulab.com/collections/3d-printer/products/x1-carbon-combo">
          <Button variant={"link"} className="text-blue-300"> Bambulabs X1C <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <Link href= "https://www.creality.com/products/creality-halot-mage-s?spm=..index.home_card_2_2024_1.1">
          <Button variant={"link"} className="text-blue-300"> Creality Halot-Mage-S <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <Link href= "https://www.creality.com/products/creality-ender-3-s1-pro-fdm-3d-printer">
          <Button variant={"link"} className="text-blue-300"> Ender 3 S1 Pro<ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          
         
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

          {/* Tools */}
          <h2 className="font-semibold text-lg mb-1 tracking-tight">Tools</h2>
        
          <p>
            My toolbox includes a variety of hand tools, power tools, and electronic measurement instruments. From soldering irons to digital calipers, these tools are essential for building and testing prototypes.
          </p>
          <Link href="https://themisto.in/products/themisto-th-m100-autorange-digital-multimeter-black-6000-counts">
          <Button variant={"link"} className="text-blue-300"> Thermisto Multimeter <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <Link href="https://themisto.in/products/themisto-th-m61-digital-vernier-calliper-0-150mm-6">
          <Button variant={"link"} className="text-blue-300"> Thermisto Digital Caliper <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

          {/* Software */}
          <h2 className="font-semibold text-lg mb-1 tracking-tight">Software</h2>
         
          <p>
            I rely on a range of software for my projects, including CAD software for design, MATLAB for simulations, and various coding environments for development. These tools enable me to create, test, and refine my ideas efficiently.
          </p>
          <Link href="https://github.com/SoftFever/OrcaSlicer">
          <Button variant={"link"} className="text-blue-300"> Orca Slicer <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <Link href="https://www.autodesk.in/products/fusion-360/personal">
          <Button variant={"link"} className="text-blue-300">Autodesk Fusion 360 <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <Link href="https://code.visualstudio.com/insiders/">
          <Button variant={"link"} className="text-blue-300"> Visual Studio Code <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
          <Link href="https://circuitmaker.com/">
          <Button variant={"link"} className="text-blue-300">Altium Circuit Maker <ArrowTopRightIcon className="ml-2 h-4 w-4"/> </Button>
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}
