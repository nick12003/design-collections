import { createBrowserRouter } from "react-router-dom";

import Layout from "@/Layout";
import NotFount from "@/components/NotFount";
import DocumentTitle from "@/components/DocumentTitle";
import Project from "@/components/Project";
import Home from "@/pages/Home";

const user = import.meta.env.VITE_GITHUB_USER;
const repo = import.meta.env.VITE_GITHUB_REPO;

const fetchSource = async (projectName: string, file: string) => {
  const response = await fetch(
    `https://api.github.com/repos/${user}/${repo}/contents/src/pages/collections/${projectName}/${file}`
  );
  const result = await response.json();
  return result;
};

const createDesignRouter = (projectName: string, page?: () => Promise<unknown>) => ({
  path: projectName,
  element: (
    <Project
      projectName={projectName}
      page={page as () => Promise<{ default: React.ComponentType<any> }>}
    />
  ),
  loader: async () => {
    const [jsResult, cssResult] = await Promise.all([
      fetchSource(projectName, "index.jsx"),
      fetchSource(projectName, "style.module.scss"),
    ]);
    return { jsResult, cssResult };
  },
  index: false,
});

export const config = {
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: (
        <DocumentTitle title='design-collections'>
          <Home />
        </DocumentTitle>
      ),
    },
    ...Object.entries(import.meta.glob("@/pages/collections/*/index.jsx")).map(([path, module]) =>
      createDesignRouter(path.match(/\/([^/]+)\/index\.jsx/)?.[1] as string, module)
    ),
    {
      index: false,
      path: "*",
      element: <NotFount />,
    },
  ],
};

const router = createBrowserRouter([config]);

export default router;
