import { h, useState, useRef } from "preact/hooks";

import Editor from "@monaco-editor/react";
import "./app.css";

const files = {
  "script.py": {
    name: "script.py",
    language: "python",
    value: "Here is some python text",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<div> </div>",
  },
};

function App() {
  const [fileName, setFileName] = useState("script.py");
  const editorRef = useRef(null);
  const file = files[fileName];
  function handleEditor(editor, monaco) {
    editorRef.current = editor;
  }
  function getEditorValue() {
    alert(editorRef.current.getValue());
  }
  return (
    <div className="App">
      <button onClick={() => setFileName("index.html")}>
        Switch to index.html
      </button>
      <button onClick={() => setFieldName("script.py")}>
        Switch toscript.py
      </button>
      <button onClick={() => getEditorValue()}>Get editor value</button>
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        onMount={handleEditor}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  );
}
export default App;
