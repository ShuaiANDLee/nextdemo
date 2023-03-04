import { useState, useRef } from "react";

export default function Home() {
  const refField = useRef<any>(null);
  const [fh, saveFile] = useState<any>(null);

  const create = async () => {
    let file = await (window as any).showSaveFilePicker();
    saveFile(file);
    return file;
  }

  const open = async () => {
    let file = await (window as any).showOpenFilePicker();
    saveFile(file);
    let textFile = await file[0].getFile();
    console.log(textFile);
    refField.current.value = await textFile.text();
  }

  const save = async (handle: any) => {
    if (!handle) {
      return;
    }
    const stream = await handle[0].createWritable();
    await stream.write(refField.current.value);
    await stream.close();
  }

  const save_as = (isSave: boolean) => {
    return async (e: any) => {
      e.preventDefault();
      const filehandle = (isSave && !!fh) ? fh : await create();
      save(filehandle);
    }
  }

  return <main>
    <h1>file action</h1>
    <textarea ref={refField} name="" id=""></textarea><br />
    <button onClick={create}>create</button>
    <button onClick={open}>open</button>
    <button onClick={save_as(true)}>save</button>
    <button onClick={save_as(false)}>save as</button>
    <style>
      {`
      textarea{
        width:300px;
        height:200px;
        color:white;
      }
        button{
          padding: 5px 10px;
          margin:10px;
        }
      `}
    </style>
  </main>;
}