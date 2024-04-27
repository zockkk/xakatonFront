function RequestButton(callBack) {
  return (
    <button
      className="h-10 w-20 bg-slate-700 rounded-lg"
      {...callBack}
    ></button>
  );
}

export default RequestButton;
