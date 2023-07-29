import React from "react";

type DocumentTitleProps = {
  children: React.ReactNode;
  title: string;
};

const DocumentTitle = ({ children, title }: DocumentTitleProps) => {
  document.title = title;
  return children;
};

export default DocumentTitle;
