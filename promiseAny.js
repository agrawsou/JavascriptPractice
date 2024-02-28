const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(reject, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Done quick");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.error("All promises rejected: ", error)
  })
  
  