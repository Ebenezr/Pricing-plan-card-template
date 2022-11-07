import React from "react";
import { pricingPlans } from "./data";
import { BsCheckLg } from "react-icons/bs";

export const Card = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl py-24 px-4 sm:px-6 lg:px-8 ">
      {pricingPlans.map((plan) => (
        <div
          key={plan.title}
          className="border border-slate-200 p-8 shadow-lg rounded-2xl bg-white relative flex flex-col"
        >
          <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
          {/* most popular */}
          {plan.mostPopular && (
            <p className="absolute top-0 -translate-y-1/2 bg-cyan-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md">
              Most Popular
            </p>
          )}
          <p className="text-sm leading-6 text-slate-700 mt-4">
            {plan.description}
          </p>
          {/* price */}
          <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6 ">
            <p className="text-sm font-semibold text-slate-500 flex items-center">
              <span>{plan.currency}</span>
              <span className="text-4xl text-slate-900 ml-3">
                ${plan.price}
              </span>
              <span className="ml-1.5">{plan.frequency}</span>
            </p>
          </div>
          <ul className="mt-6 space-y-4 flex-1">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="text-sm text-slate-700 leading-6 flex"
              >
                <BsCheckLg className="text-cyan-500 shrink-0 mt-1.5" />
                <span className="ml-3">{feature}</span>
              </li>
            ))}
          </ul>
          {/* cta */}
          <a
            href="#"
            className={` mt-8 block  px-4 py-4 text-sm font-semibold leading-4 text-center rounded-lg 
        ${
          plan.mostPopular
            ? "text-white bg-cyan-500 hover:bg-cyan-600 shadow-md"
            : " text-cyan-700 bg-cyan-50 hover:bg-cyan-100"
        }`}
          >
            {plan.cta}
          </a>
        </div>
      ))}
    </div>
  );
};
