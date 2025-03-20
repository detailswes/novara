"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data for FAQs
const faqItems = [
  {
    question: "Will my insurance cover treatment?",
    answer: (
      <div>
        <p className="mb-4">
        Most likely, yes. We work with most major commercial insurance providers to make treatment as affordable as possible—sometimes with little to no out-of-pocket cost. Call now, and we’ll verify your benefits in minutes.
        </p>
        <p className="mb-[18px]">
        Rehab Accepts Anthem InsuranceRehab Accepts Aetna InsuranceAccepts Cigna InsuranceAccepts Geha InsuranceAccepts Elevance InsuranceAccepts United Healthcare Insurance
        Don't see your insurance provider? Don't worry we probably work with them.
        </p>
      </div>
    ),
  },
  {
    question: "What addictions do you treat?",
    answer: "If it’s addictive, we treat it. Alcohol, opioids, benzos, stimulants, prescription medications, and more. But addiction isn’t just about substances—it’s about why. We also address trauma, anxiety, depression, and mental health conditions because real recovery means healing the root cause.",
  },
  {
    question: "How soon can I start?",
    answer: "Today. We offer same-day admissions because when you’re ready, waiting isn’t an option. Call now—we’ll take care of everything.",
  },
  {
    question: "How do I know I’m choosing the right treatment center?",
    answer: "Because we’re nationally accredited. Novara Recovery is Joint Commission (JCAHO) accredited and LegitScript certified, meaning we meet the highest standards of safety, care, and long-term recovery success.",
  },
  {
    question: "Can my family be involved in my recovery?",
    answer: "Absolutely. Addiction affects everyone—so healing should, too. We offer family therapy, education, and ongoing support to help you and your loved ones move forward together.",
  },
  {
    question: " What if I’ve tried treatment before and it didn’t work?",
    answer: "Then you haven’t had the right treatment. Recovery isn’t about willpower—it’s about having a system that works. Our evidence-based, personalized approach gives you a plan that’s built around you. This time can be different. Let’s make it work.",
  },
];

export default function Faq() {
  return (
    <>
      <div className="border-dashed border-t-2 border-[#E6D8CE] mt-10 md:my-20" />
      <section className="my-10 md:mt-[68px] md:mb-[90px]">
        <h2 className="text-4xl md:text-[56px] text-center font-normal bg-text-gradient text-transparent bg-clip-text font-Frank leading-[42px] md:leading-[62px] ">
          You Probably Have Questions. We Have Answers.
        </h2>
        <h5 className="text-4xl md:text-[20px] text-center font-normal bg-text-gradient text-transparent bg-clip-text font-Frank leading-[42px] md:leading-[62px] ">
           Your future shouldn’t be a guessing game. Here’s everything you need to take the first step with confidence.
        </h5>
        <div className="w-full max-w-[200px] h-[1px] mt-4 orb-gradient-line mx-auto"></div>

        <div className="mt-6 md:mt-[53px] mx-auto w-full max-w-[1200px] bg-[#FDF7F3] py-12 md:py-[87px] px-4 rounded-[20px]">
          <div className="w-full max-w-[896px] mx-auto">
            <Accordion type="single" defaultValue="item-1" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className={`mt-${
                    index > 0 ? 7 : 0
                  } transition-shadow  hover:shadow-lg hover:shadow-primary`}
                >
                  <AccordionTrigger className="font-normal font-Inter text-[#1F1168]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#1F1168] font-normal">
                    {typeof item.answer === "string" ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
