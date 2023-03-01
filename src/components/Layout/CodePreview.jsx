import { useState, useEffect } from 'react';
import classNames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodePreview = ({ projectName }) => {
  const [code, setCode] = useState('');
  const [css, setCss] = useState('');
  const [selected, setSelected] = useState('jsx');

  useEffect(() => {
    async function fetchCode() {
      const jsResponse = await fetch(`collections/${projectName}/index.jsx`);
      const cssResponse = await fetch(`collections/${projectName}/style.module.scss`);
      const jsText = await jsResponse.text();
      const cssText = await cssResponse.text();
      setCode(jsText);
      setCss(cssText);
    }
    fetchCode();
  }, [projectName]);

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
              customStyle={{ width: '100%' }}
              language="javascript"
              style={dark}
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
        {selected === 'scss' && (
          <div className="w-full h-full absolute overflow-y-auto">
            <SyntaxHighlighter
              customStyle={{ width: '100%' }}
              language="css"
              style={dark}
              showLineNumbers
            >
              {css}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;
