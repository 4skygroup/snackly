// Faq.tsx
import { useState } from "react";
import FAQRow from "./FAQRow";
import { faqData } from "../../utils/constants/FAQData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full flex flex-col bg-white items-center px-6 py-16">
      <h2 className="font-glacial text-h7 text-snackly-purple mb-12 tracking-widest capitalize">
        Foire aux questions
      </h2>

      <div className="w-full max-w-2xl">
        {faqData.map((item, index) => (
          <FAQRow
            key={item.id}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
