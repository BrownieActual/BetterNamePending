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

// const Table = React.forwardRef<
//   HTMLTableElement,
//   React.HTMLAttributes<HTMLTableElement>
// >(({ className, ...props }, ref) => (
//   <div className="relative w-full overflow-auto">
//     <table
//       ref={ref}
//       className={cn("w-full caption-bottom text-sm", className)}
//       {...props}
//     />
//   </div>
// ));
