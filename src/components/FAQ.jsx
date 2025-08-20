import React from "react";
import "../styles.css";

const faqs = [
  { q: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", a: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." },
  { q: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", a: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." },
  { q: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", a: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." },
  { q: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", a: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." },

  ];

export default function FAQ() {
  const [open, setOpen] = React.useState(null);

  const toggle = (idx) => {
    setOpen(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <ul className="faq-list">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            const btnId = `faq-q-${idx}`;
            const panelId = `faq-a-${idx}`;

            return (
              <li key={idx} className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
                <button
                  id={btnId}
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(idx)}
                >
                  <span className={`faq-question__text ${isOpen ? "is-open" : ""}`}>
                    {item.q}
                  </span>
                  <span className="faq-toggle" aria-hidden="true">
                    {isOpen ? (
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="faq-answer-wrapper"
                  >
                    <p className="faq-answer">{item.a}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
