const firstName = document.querySelector("#name")
const lastName = document.querySelector("#last_name")
const email = document.querySelector("#email")
const phone = document.querySelector("phone")
const submitBtn = document.querySelector("#sent")

submitBtn.addEventListener("click", () => {
  Cookies.set("firstName", firstName.value,{expires:365})
})

function setCookie(name, value, daysToLive){
  const date = new Date()
  date.setTime(date.getTime() + (daysToLive * 24 *60))


}

///https://www.youtube.com/watch?v=i7oL_K_FmM8&t=570s