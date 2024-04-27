import { useEffect, useRef, useState } from "react";

function InputVacancy() {
  const textAreaRef = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <textarea
      data-testid="uploader"
      ref={textAreaRef}
      className="p-1 bg-blue-100 active:outline-none rounded m-5 min-h-20 max-h-[300px] w-11/12 h-20"
      placeholder="Введите текст, Pdf или ссылку на вакансию"
      value={text}
      onChange={handleChange}
      rows="1"
    />
  );
}

export default InputVacancy;
