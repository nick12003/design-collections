import React from 'react';
import classNames from 'classnames';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
};

export default function Section({ children, className, title, id }: SectionProps) {
  return (
    <section
      className={classNames('w-full min-w-[600px] max-w-[1280px] p-10 lg:p-20', className)}
      id={id}
    >
      {title && (
        <h1 className="w-full text-4xl font-black text-center md:text-left text-primary">
          {title}
        </h1>
      )}
      {children}
    </section>
  );
}
