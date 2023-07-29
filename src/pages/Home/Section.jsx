import React from 'react';
import classNames from 'classnames';

export default function Section({ children, className, title, id }) {
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
