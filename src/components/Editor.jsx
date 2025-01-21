// // import { $getRoot, $getSelection } from "lexical";
// // import { useEffect } from "react";

// // import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
// // import { LexicalComposer } from "@lexical/react/LexicalComposer";
// // import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
// // import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// // import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// // import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

// // // function Editor() {
// // //     return (
// // //       <div>Editor</div>
// // //     )
// // //   }

// // //   export default Editor
// // function textEditor(){
// //     return(
// //         const theme = {
// //             // Theme styling goes here
// //             //...
// //           };

// //           // Catch any errors that occur during Lexical updates and log them
// //           // or throw them as needed. If you don't throw them, Lexical will
// //           // try to recover gracefully without losing user data.
// //           function onError(error) {
// //             console.error(error);
// //           }

// //           function Editor() {
// //             const initialConfig = {
// //               namespace: "MyEditor",
// //               theme,
// //               onError,
// //             };

// //             return (
// //               <LexicalComposer initialConfig={initialConfig}>
// //                 <RichTextPlugin
// //                   contentEditable={<ContentEditable />}
// //                   placeholder={<div>Enter some text...</div>}
// //                   ErrorBoundary={LexicalErrorBoundary}
// //                 />
// //                 <HistoryPlugin />
// //                 <AutoFocusPlugin />
// //               </LexicalComposer>
// //             );
// //           }

// //     )
// // }
// // export default textEditor;

// import React from "react";
// import { useForm, useFieldArray, Controller } from "react-hook-form";

// function App() {
//   const { register, control, handleSubmit, reset, trigger, setError } = useForm(
//     {
//       // defaultValues: {}; you can populate the fields by this attribute
//     }
//   );
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "test",
//   });

//   return (
//     <form onSubmit={handleSubmit((data) => console.log(data))}>
//       <ul>
//         {fields.map((item, index) => (
//           <li key={item.id}>
//             <input {...register(`test.${index}.firstName`)} />
//             <Controller
//               render={({ field }) => <input {...field} />}
//               name={`test.${index}.lastName`}
//               control={control}
//             />
//             <button type="button" onClick={() => remove(index)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button
//         type="button"
//         onClick={() => append({ firstName: "bill", lastName: "luo" })}
//       >
//         append
//       </button>
//       <input type="submit" />
//     </form>
//   );
// }
// export default App;
