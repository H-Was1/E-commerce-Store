import React from "react";

const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
});

const Currency = ({ value }: { value?: string | number }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
