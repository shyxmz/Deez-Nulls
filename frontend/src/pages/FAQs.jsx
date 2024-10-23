import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'; // Import icons

const FAQSection = () => {
  const faqData = [
    {
      question: "What makes StartHub different from other startup management platforms?",
      answer: "StartHub isn't just another tool – it's your startup ecosystem's secret weapon. We offer an all-in-one solution that combines KYC, progress tracking, report management, and grant administration. No more juggling multiple platforms or losing track of critical data!",
    },
    {
      question: "How secure is my startup's data on StartHub?",
      answer: "We take security seriously. StartHub uses state-of-the-art JWT authentication and follows industry best practices to keep your data fort-knox secure. Your startup's information is safe with us.",
    },
    {
      question: "Can StartHub handle my startup's growth from seed to scale-up?",
      answer: "Absolutely! StartHub is designed to grow with your startups. Our flexible platform adapts to your needs, whether you're managing a handful of early-stage startups or a bustling ecosystem of scale-ups.",
    },
    {
      question: "How does StartHub streamline the monthly reporting process?",
      answer: "Say goodbye to chasing startups for reports! StartHub makes monthly reporting a breeze with customizable templates, automated reminders, and an easy-to-use submission interface. Startups can upload files or input text directly, making compliance effortless.",
    },
    {
      question: "What kind of insights can I gain from StartHub's progress tracking feature?",
      answer: "Our progress tracking feature is like a crystal ball for your startup ecosystem. Get real-time updates on key metrics, visualize growth trends, and identify potential issues before they become problems. It's not just tracking – it's predictive intelligence for your startups.",
    },
    {
      question: "How does StartHub's EIR and Grants management system work?",
      answer: "From application to fund disbursement, StartHub has you covered. Our system allows for easy submission of applications, streamlined review processes, and transparent tracking of selection status and fund distribution. It's grant management on autopilot!",
    },
    {
      question: "Can I customize StartHub to fit my specific ecosystem needs?",
      answer: "Customization is our middle name! StartHub offers flexible fields, customizable reporting templates, and adaptable workflows. Your ecosystem is unique, and your management platform should be too.",
    },
    {
      question: "How does StartHub facilitate communication between admins and startups?",
      answer: "Our push notification system ensures that no startup misses a beat. Broadcast important updates, send personalized messages, or share ecosystem-wide news with just a few clicks. It's like having a direct line to every startup in your portfolio.",
    },
    {
      question: "Is StartHub suitable for accelerators and incubators of all sizes?",
      answer: "Whether you're nurturing a small cohort or managing a vast network of startups, StartHub scales to your needs. Our platform is designed to be intuitive for small teams and robust enough for large organizations.",
    },
    {
      question: "How quickly can we get StartHub up and running in our ecosystem?",
      answer: "We've designed StartHub for rapid deployment. With our streamlined onboarding process and intuitive interface, you can have your ecosystem humming on StartHub in no time. And our dedicated support team is always here to ensure a smooth takeoff!",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null); // Track the currently open question

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the answer visibility
  };

  return (
    <div className="faq-section p-5">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
        StartHub FAQ: Everything You Need to Know
      </h2>
      <div className="faq-questions grid grid-cols-1 gap-6">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item border-b pb-4 mb-4">
            <div className="faq-question flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
              <h3 className="text-xl font-semibold text-white">{item.question}</h3>
              <button className="text-xl text-white">
                {openIndex === index ? <AiOutlineUp /> : <AiOutlineDown />} {/* Use icon for dropdown */}
              </button>
            </div>
            {openIndex === index && (
              <div className="faq-answer mt-2 text-white">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/10/23/08/20241023085748-2LQFIG7G.js"></script>
    </div>
  );
};

export default FAQSection;
