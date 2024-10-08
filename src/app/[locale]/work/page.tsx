import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Blockquote } from "../components/Blockquote";
import { Border } from "../components/Border";
import { Button } from "../components/Button";
import { ContactSection } from "../components/ContactSection";
import { Container } from "../components/Container";
import { FadeIn, FadeInStagger } from "../components/FadeIn";
import { PageIntro } from "../components/PageIntro";
import { formatDate } from "@/lib/formatDate";
import { type CaseStudy, type MDXEntry, loadCaseStudies } from "@/lib/mdx";
import { StylizedImage } from "../components/StylizedImage";
import imageLaptop from "@/images/services/welding.jpg";
import imageMeeting from "@/images/services/production.jpg";
import imageWhiteboard from "@/images/services/warehouse.jpg";
import imageHospitality from "@/images/services/hospitality.jpg";
import imageAgriculture from "@/images/services/farm.jpg";
import { TagList, TagListItem } from "../components/TagList";
import { SectionIntro } from "../components/SectionIntro";
import { GridList, GridListItem } from "../components/GridList";
import { GridPattern } from "../components/GridPattern";
import { useTranslations } from "next-intl";
import { List, ListItem } from "../components/List";

// function CaseStudies({
//   caseStudies,
// }: {
//   caseStudies: Array<MDXEntry<CaseStudy>>;
// }) {
//   return (
//     <Container className="mt-40">
//       <FadeIn>
//         <h2 className="font-display text-2xl font-semibold text-neutral-950">
//           Case studies
//         </h2>
//       </FadeIn>
//       <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
//         {caseStudies.map((caseStudy) => (
//           <FadeIn key={caseStudy.client}>
//             <article>
//               <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
//                 <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
//                   <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
//                     <Image
//                       src={caseStudy.logo}
//                       alt=""
//                       className="h-16 w-16 flex-none"
//                       unoptimized
//                     />
//                     <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
//                       {caseStudy.client}
//                     </h3>
//                   </div>
//                   <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
//                     <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
//                       {caseStudy.service}
//                     </p>
//                     <p className="text-sm text-neutral-950 lg:mt-2">
//                       <time dateTime={caseStudy.date}>
//                         {formatDate(caseStudy.date)}
//                       </time>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
//                   <p className="font-display text-4xl font-medium text-neutral-950">
//                     <Link href={caseStudy.href}>{caseStudy.title}</Link>
//                   </p>
//                   <div className="mt-6 space-y-6 text-base text-neutral-600">
//                     {caseStudy.summary.map((paragraph) => (
//                       <p key={paragraph}>{paragraph}</p>
//                     ))}
//                   </div>
//                   <div className="mt-8 flex">
//                     <Button
//                       href={caseStudy.href}
//                       aria-label={`Read case study: ${caseStudy.client}`}
//                     >
//                       Read case study
//                     </Button>
//                   </div>
//                   {caseStudy.testimonial && (
//                     <Blockquote
//                       author={caseStudy.testimonial.author}
//                       className="mt-12"
//                     >
//                       {caseStudy.testimonial.content}
//                     </Blockquote>
//                   )}
//                 </div>
//               </Border>
//             </article>
//           </FadeIn>
//         ))}
//       </div>
//     </Container>
//   );
// }

function Section({
  title,
  image,
  children,
}: {
  title: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>;
  children: React.ReactNode;
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function Block1() {
  const t = useTranslations("work.block1")
  return (
    <Section
      title={t("title")}
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600" />
      {/* <p>
        Grupa Krayr&apos;s{" "}
        <strong className="font-semibold text-neutral-950">
          process outsourcing
        </strong>{" "}
        services are tailored for the{" "}
        <strong className="font-semibold text-neutral-950">
          welding sector
        </strong>
        . Our expert engineers collaborate with clients to understand their
        specific needs and deliver teams of{" "}
        <strong className="font-semibold text-neutral-950">
          qualified welders
        </strong>
        , coordinators, and helpers to complete projects efficiently. Our
        hands-on approach and continuous support ensure project success and
        client satisfaction.
      </p> */}
      <p>
        {t("description")}
      </p>

      {/* <p>
        Our welding teams are equipped with the latest tools and techniques to
        deliver high-quality work that meets industry standards. By
        outsourcing your welding projects to Grupa Krayr, you gain access to a
        pool of skilled professionals who can handle complex tasks with
        precision and expertise. We provide ongoing support throughout the
        project lifecycle, ensuring that your projects are completed on time
        and within budget.
      </p> */}
        <p>
        {t("weldingProject")}
      </p>
    
    <Blockquote
      author={{ name: "Debra Fiscal", role: "CEO of Alstom" }}
      className="mt-12"
    >
       {t("blockquoteText")}
      </Blockquote>
    </Section>
  );
}

function Block2() {
  const t = useTranslations("work.block2")
  const tagListItems = [
    t('tagListItems.0'),
    t('tagListItems.1'),
    t('tagListItems.2'),
    t('tagListItems.3'),
    t('tagListItems.4'),
  ];  

  return (
    <Section
      title={t("title")}
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        {/* <p>
          Our reputation for excellence in the production and manufacturing
          industries is built on providing reliable and skilled employees. Our focus on
          thorough vetting and training ensures that our employees contribute
          effectively to your{' '}<strong className="font-semibold text-neutral-950">
            production goals
          </strong>.
        </p> */}

        <p>
        {t("description")}
        </p>

        {/* <p>
          By leasing employees from Grupa Krayr, you benefit from a flexible
          workforce that can be adjusted to meet the demands of your production
          schedules. Our{' '}<strong className="font-semibold text-neutral-950">
           leasing model
          </strong>{" "}provides you with the manpower you need
          without the long-term commitment, allowing you to scale up or down
          based on your operational requirements. We take care of all{' '}
          <strong className="font-semibold text-neutral-950">
            administrative tasks
          </strong>, including payroll and compliance, so you can
          focus on what you do best – manufacturing quality products
        </p> */}
        <p>
          {t("solutionDeliveryText")}
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      {t("includedInThisPhaseTitle")}
        </h3>
        {/* <TagList className="mt-4">
        <TagListItem>Machine operators </TagListItem>
        <TagListItem>Assembly line workers</TagListItem>
        <TagListItem>Packers</TagListItem>
        <TagListItem>Production helpers</TagListItem>
        <TagListItem>Quality control inspectors</TagListItem>
      </TagList> */}

<TagList className="mt-4">
      {tagListItems.map((item, index) => (
        <TagListItem key={index}>{item}</TagListItem>
      ))}
    </TagList>
    </Section>
  );
}

function Block3() {
  const t = useTranslations("work.block3")
  const tagListItems = [
    t('tagListItems.0'),
    t('tagListItems.1'),
    t('tagListItems.2'),
    t('tagListItems.3'),
    t('tagListItems.4'),
    t('tagListItems.5'),
  ]; 
  return (
    <Section
      title={t("title")}
      image={{ src: imageWhiteboard }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        {/* <p>
          Efficiency and reliability are crucial in the logistics and warehouse
          sector. We understand the fast-paced nature of this industry and provide workers
          who can handle the demands with precision and dedication. Our team is
          adept at managing the complexities of logistics operations, ensuring
          your supply chain remains uninterrupted.{" "}
        </p> */}
        <p>
          {t("description")}
        </p>
        {/* <p>
          We pride ourselves on our ability to quickly adapt to your specific
          needs, providing you with a flexible workforce that can scale with
          your operations. Whether you need temporary or parmanent recuits or additional support during peak
          seasons or specialized skills for specific projects, Grupa Krayr has
          the resources to ensure your warehouse and logistics operations run
          smoothly.
        </p> */}
        {t("solutionDeliveryText")}
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      {t("includedInThisPhaseTitle")}
      </h3>
      {/* <TagList className="mt-4">
        <TagListItem>warehouse workers</TagListItem>
        <TagListItem>inventory managers</TagListItem>
        <TagListItem>Drivers</TagListItem>
        <TagListItem>logistics coordinators</TagListItem>
        <TagListItem>Forklift operators</TagListItem>
        <TagListItem>Loader/unloader</TagListItem>
      </TagList> */}

<TagList className="mt-4">
      {tagListItems.map((item, index) => (
        <TagListItem key={index}>{item}</TagListItem>
      ))}
    </TagList>
    </Section>
  );
}
function Block4() {
  const t = useTranslations("work.block4")
  return (
    <Section
      title={t("title")}
      image={{ src: imageHospitality, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        {/* <p>
          In the hospitality industry, delivering exceptional service is
          paramount. We provide highly trained hospitality staff who excel in
          roles such as hotel management, event coordination, and customer
          service. Our rigorous selection process ensures that only the most
          dedicated and professional candidates join your team, enhancing your
          guests&apos; experience and maintaining your establishment&apos;s reputation.
          Whether you need front-of-house staff, kitchen personnel, or
          housekeeping teams, Grupa Krayr has the expertise to meet your
          requirements.
        </p> */}
        <p>
        {t("description")}
        </p>
      </div>

      <Blockquote
        author={{ name: "John Doe", role: "HR Manager Hayatt Residency" }}
        className="mt-12"
      >
{t("blockquoteText")}
      </Blockquote>
    </Section>
  );
}

function Block5() {
  const t = useTranslations("work.block5")
    return (
      <Section
        title={t("title")}
        image={{ src: imageAgriculture, shape: 1 }}
      >
        <div className="space-y-6 text-base text-neutral-600">
          {/* <p>
          In the farm and agriculture sector, seasonal and temporary workers are essential. 
          Grupa Krayr supplies skilled farm laborers who are experienced in various agricultural tasks. 
          Our workers ensure that your farming operations run smoothly, regardless of the season. 
          From planting to harvesting, we provide reliable labor that meets the demands of agricultural cycles.
          </p>
          <p>
          We understand the unique challenges faced by the agricultural industry, including the need for timely 
          and efficient labor during critical periods. Our recruitment process focuses on 
          sourcing workers who are not only skilled but also adaptable to the ever-changing needs of farming operations. 
          By partnering with Grupa Krayr, you gain access to a dedicated workforce that can help increase productivity and ensure the success of your agricultural ventures.
          </p> */}
          <p>
          {t("description")}
          </p>
          <p>
          {t("agroProject")}
          </p>
        </div>
  
        <Blockquote
          author={{ name: "John Doe", role: "HR Manager Polona Fruits" }}
          className="mt-12"
        >
          {t("blockquoteText")}
        </Blockquote>
      </Section>
    );
  }

  function Price() {
    const t = useTranslations("pricingSection")
    return (
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
          <GridPattern
            className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-270}
          />
        </div>
  
        <SectionIntro
          eyebrow={t("eyebrow")}
          title={t("sectionTitle")}
        >
          <p>
          {t("intro")}
          </p>
        </SectionIntro>
  
        <Container className="mt-24">
          <GridList>
            <GridListItem title={t("flexible")}>
            {t("flexibledescription")}
            </GridListItem>
            <GridListItem title={t("customizable")}>
            {t("customizabledescription")}
            </GridListItem>
            <GridListItem title={t("feetitle")}>
            {t("feedescription")}
            </GridListItem>
          </GridList>
        </Container>
      </div>
    )
  }



export const metadata: Metadata = {
  title: "Our Work",
  description:
    "We believe in efficiency and maximizing our resources to provide the best value to our clients.",
};

export default  function Work() {
const t = useTranslations("work")



  return (
    <>
      <PageIntro
        eyebrow= {t("introEyebrow")}
        title= {t("introTitle")}
      >
        <p>
        {t("introText")}
        </p>
      </PageIntro>

      <Block1 />
      <Block2 />
      <Block3 />
      <Block4/>
      <Block5/>
      <Price/>
      <ContactSection />
    </>
  );
}
