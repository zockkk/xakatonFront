/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import * as React from "react";

const FileInput = ({ fileList, onChange }) => {
  const inputRef = useRef(null);
  return (
    <input
      type="file"
      ref={inputRef}
      data-testid="uploader"
      onChange={(e) => {
        onChange(e.target.files);
      }}
    />
  );
};
export default FileInput;
