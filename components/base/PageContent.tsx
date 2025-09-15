"use client";

import { PropsWithChildren } from "react";

const PageContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex max-w-4xl min-w-128 mx-auto px-16 py-3 pt-16 justify-center ">
      {children}
    </div>
  );
};

export default PageContent;
