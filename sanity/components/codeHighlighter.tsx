import SyntaxHighlighter from 'react-syntax-highlighter';
import highlightTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark';

const codeHighlighter = ({ value }: { value: { language?: string; code?: string } }) => {
  if (value?.language && value?.code) {
    return (
      <div className="my-10">
        <SyntaxHighlighter showLineNumbers language={value.language} style={highlightTheme}>
          {value.code}
        </SyntaxHighlighter>
      </div>
    );
  }
  return <></>;
};

export default codeHighlighter;
