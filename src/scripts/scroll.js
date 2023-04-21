const toUpButton = document.querySelector('.to_top')

export function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toUpButton.style.display = "block";
  } else {
    toUpButton.style.display = "none";
  }
}

export function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
