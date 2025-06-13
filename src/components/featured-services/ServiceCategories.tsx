
import React from "react";
import { ServiceGroupCard } from "./ServiceGroupCard";
import { serviceGroups } from "./serviceGroupsData";

export function ServiceCategories() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {serviceGroups.map((group, index) => (
        <ServiceGroupCard key={index} group={group} index={index} />
      ))}
    </div>
  );
}
