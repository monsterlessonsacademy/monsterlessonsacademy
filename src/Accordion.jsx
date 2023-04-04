import React, { useState } from "react";

const accordionStyles = {
  maxWidth: "600px",
};

const accordionTitleStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  cursor: "pointer",
  backgroundColor: "#21aeca",
  padding: "5px",
};

const accordionContent = {
  backgroundColor: "#39b9d2",
  padding: "5px",
};

const AccordionSection = ({
  sectionIndex,
  section,
  setActiveIndex,
  isActiveSection,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div key={sectionIndex}>
      <div style={accordionTitleStyles} onClick={toggleSection}>
        <div>{section.title}</div>
        <div>{isActiveSection ? "-" : "+"}</div>
      </div>
      {isActiveSection && <div style={accordionContent}>{section.content}</div>}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={accordionStyles}>
      {sections.map((section, sectionIndex) => (
        <AccordionSection
          key={sectionIndex}
          sectionIndex={sectionIndex}
          section={section}
          setActiveIndex={setActiveIndex}
          isActiveSection={sectionIndex === activeIndex}
        />
      ))}
    </div>
  );
};

export default Accordion;
