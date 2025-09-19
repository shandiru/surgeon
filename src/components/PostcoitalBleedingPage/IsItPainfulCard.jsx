import React from 'react';

const IsItPainfulCard = () => {
  return (
    <div className="max-w-6xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
        <div className="font-semibold text-2xl">Is It Painful?</div>
      </div>
      <div className="px-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <span
              data-slot="badge"
              className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 mb-2"
            >
              Usually Painless
            </span>
            <p>Postcoital bleeding is usually painless</p>
          </div>
          <div>
            <span
              data-slot="badge"
              className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground mb-2"
            >
              Statistics
            </span>
            <p>Only about 15% of women who experience it also report pain during sex</p>
          </div>
        </div>
        <p className="text-muted-foreground">
          About 30% of women who bleed during sex also have other abnormal bleeding outside their period.
        </p>
      </div>
    </div>
  );
};

export default IsItPainfulCard;
