import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import classNames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodePreview = () => {
  const [selected, setSelected] = useState('jsx');

  const { jsResult, cssResult } = useLoaderData();

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[200px] h-fit relative flex">
        <div
          className={classNames(
            'w-1/2 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-200',
            { 'text-primary': selected === 'jsx' }
          )}
          onClick={() => {
            setSelected('jsx');
          }}
        >
          Jsx
        </div>
        <div
          className={classNames(
            'w-1/2 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-200',
            { 'text-primary': selected === 'scss' }
          )}
          onClick={() => {
            setSelected('scss');
          }}
        >
          Scss
        </div>
        <div
          className={classNames('h-1 w-1/2 absolute bottom-0 bg-primary', {
            'left-0': selected === 'jsx',
            'right-0': selected === 'scss',
          })}
        />
      </div>
      <div className="w-full h-full relative">
        {selected === 'jsx' && (
          <div className="w-full h-full absolute overflow-y-auto">
            <SyntaxHighlighter
              customStyle={{ width: '100%', height: '100%' }}
              language="javascript"
              style={dark}
              showLineNumbers
            >
              {atob(jsResult?.content)}
            </SyntaxHighlighter>
          </div>
        )}
        {selected === 'scss' && (
          <div className="w-full h-full absolute overflow-y-auto">
            <SyntaxHighlighter
              customStyle={{ width: '100%', height: '100%' }}
              language="css"
              style={dark}
              showLineNumbers
            >
              {atob(cssResult?.content)}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;
