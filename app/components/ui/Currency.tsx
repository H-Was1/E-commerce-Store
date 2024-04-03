import React from "react";

const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
});

const Currency = ({ value }: { value: string | number }) => {
  return (
    <span className="font-semibold">{formatter.format(Number(value))}</span>
  );
};

export default Currency;
