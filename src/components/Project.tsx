import { lazy, Suspense } from "react";
import Loading from "./Loading";
import DocumentTitle from "./DocumentTitle";
import CodePreview from "./CodePreview";

type ProjectProps = {
  projectName: string;
};

const Project = ({ projectName }: ProjectProps) => {
  const LazyElement = lazy(() => import(`@/pages/collections/${projectName}/index.jsx`));
  return (
    <Suspense fallback={<Loading />}>
      <DocumentTitle title={projectName}>
        <div className='w-full h-full flex flex-col  lg:flex-row'>
          <div className='w-full h-full overflow-y-auto'>
            <LazyElement />
          </div>
          <CodePreview />
        </div>
      </DocumentTitle>
    </Suspense>
  );
};

export default Project;
