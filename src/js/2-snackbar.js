import iziToast from "izitoast";

document.querySelector(".form").addEventListener("submit", e => {
  e.preventDefault();

  const form = e.currentTarget;
  const delay = Number(form.delay.value);
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(ms => {
      iziToast.success({
        title: "OK",
        message: `Fulfilled promise in ${ms}ms`,
        position: "topRight",
        timeout: 3000,
        color: "green",
      });
    })
    .catch(ms => {
      iziToast.error({
        title: "Error",
        message: `Rejected promise in ${ms}ms`,
        position: "topRight",
        timeout: 3000,
        color: "red",
      });
    });

  form.reset();
});
