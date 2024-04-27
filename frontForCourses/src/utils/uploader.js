export const upload = (file, url, options) => {
  // Вытащили xhr из Promise, чтобы прокинуть abort
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  const onProgress = options?.onProgress;

  const promise = new Promise((resolve, reject) => {
    xhr.open("POST", url);

    xhr.upload.onprogress = (event) => {
      onProgress?.(Math.round((event.loaded / event.total) * 100));
    };

    xhr.onload = () => {
      if (xhr.status === 200) resolve(xhr.response);
      else reject(xhr.response);
    };

    const myData = new FormData();
    myData.append("my_file", file);

    xhr.send(myData);
  });

  // Присвоили свойство abort, которое прервет запрос
  promise.abort = () => xhr.abort();

  return promise;
};
