import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return <div className={`border-b ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className }) => {
  return <div className={`border-t ${className}`}>{children}</div>;
};
