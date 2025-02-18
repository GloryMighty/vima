import { About2 } from "@/components/About";
import { Home2Banner } from "@/components/Banner";
import { Blog2 } from "@/components/Blog";
<<<<<<< HEAD
import Pricing from "@/components/Pricing";
import Counters from "@/components/Counters";
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
import { Experiance2 } from "@/components/Experiance";
import { Portfolio2 } from "@/components/Portfolio";
import { Service2 } from "@/components/Service";
import { Skills2 } from "@/components/Skills";
import { Testimonial2 } from "@/components/Testomonial";
import IstiLayout from "@/layout/IstiLayout";
const page = () => {
  return (
    <IstiLayout onePage footer={2}>
      <Home2Banner />
      <About2 />
      <Skills2 />
      <Portfolio2 />
      <Counters />
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
      <Service2 />
      <Testimonial2 />
      <Experiance2 />
      <Blog2 />
    </IstiLayout>
  );
};
export default page;
