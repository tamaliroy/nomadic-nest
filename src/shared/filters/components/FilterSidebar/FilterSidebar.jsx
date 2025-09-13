import { useState } from "react";
import { FilterSection } from "../FilterSection/FilterSection";
import { PriceRangeFilter } from "../PriceRangeFilter/PriceRangeFilter";
import { CheckboxList } from "../CheckboxList/CheckboxList";
import { RatingFilter } from "../RatingFilter/RatingFilter";

export function FilterSidebar({ config, values, onChange }) {
    console.log('config', config);
  return (
    <div className="w-64 p-4 overflow-y-auto h-screen">
      {config.map(section => (
        <FilterSection key={section.key} title={section.label} defaultOpen>
            
          {section.type === "range" && (
            <PriceRangeFilter
              min={section.min}
              max={section.max}
            //   value={values[section.key]}
              onChange={val => onChange(section.key, val)}
            />
          )}

          {section.type === "checkbox" && (
            <CheckboxList
              options={section.options}
            //   value={values[section.key] || []}
              onChange={val => onChange(section.key, val)}
            />
          )}

          {section.type === "rating" && (
            <RatingFilter
              options={section.options}
            //   value={values[section.key] || []}
              onChange={val => onChange(section.key, val)}
            />
          )}
        </FilterSection>
      ))}
    </div>
  );
}
