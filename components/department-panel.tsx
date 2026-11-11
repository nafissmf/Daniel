"use client";

import { useState } from "react";
import { departments } from "@/lib/content";

export function DepartmentPanel() {
  const [index, setIndex] = useState(0);
  const current = departments[index];

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Departemen">
        {departments.map((item, itemIndex) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            id={`dept-tab-${itemIndex}`}
            aria-selected={itemIndex === index}
            aria-controls="dept-panel"
            tabIndex={itemIndex === index ? 0 : -1}
            onClick={() => setIndex(itemIndex)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div
        key={current.title}
        className="card pane"
        role="tabpanel"
        id="dept-panel"
        aria-labelledby={`dept-tab-${index}`}
      >
        <div className="ic">{current.icon}</div>
        <div>
          <h3>{current.title}</h3>
          <p>{current.description}</p>
        </div>
        <div className="go" aria-hidden="true">
          →
        </div>
      </div>
    </>
  );
}
