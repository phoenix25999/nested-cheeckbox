import React from 'react';

import "./Accordion.scss";

const Accordion = ({ children, label, accordionId }) => {
  return (
    <div class="tab">
      <input className="accordion-checkbox" type="checkbox" id={accordionId} />
      <span class="checkmark accordion-checkmark"></span>
      <label class="tab-label accordion-label" for={accordionId}>{label}</label>
      <div class="tab-content">
        <div className="border"></div>
        {children}
      </div>
    </div>
  );
};

export default Accordion;

