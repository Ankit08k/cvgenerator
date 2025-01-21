// import { useState } from "react";
// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";

// function onError(error) {
//   console.error(error);
// }

// export default function Editor() {
//   const initialConfig = {
//     namespace: "MyEditor",
//     onError,
//   };

//   const [editorState, setEditorState] = useState();
//   function onChange(editorState) {
//     const editorStateJSON = editorState.toJSON();
//     setEditorState(JSON.stringify(editorStateJSON));
//   }

//   console.log("EDITOR STATE", editorState);
//   return (
//     <LexicalComposer initialConfig={initialConfig}>
//       <RichTextPlugin
//         contentEditable={<ContentEditable />}
//         placeholder={<div>Enter some text...</div>}
//         ErrorBoundary={LexicalErrorBoundary}
//       />
//       <HistoryPlugin />
//       <AutoFocusPlugin />
//       <OnChangePlugin onChange={onChange} />
//     </LexicalComposer>
//   );
// }
