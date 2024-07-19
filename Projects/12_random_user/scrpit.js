const url = "https://randomuser.me/api";

async function fetchData() {
  try {
    const data = await fetch(url);
    const res = await data.json();
    console.log(res.results[0]);
    let firstName = res.results[0] && res.results[0].name.first;
    let lastName = res.results[0] && res.results[0].name.last;
    let ms = res.results[0] && res.results[0].name.title;
    let fullName = `${ms} ${firstName} ${lastName}`;
    let picture = res.results[0] && res.results[0].picture.large;
    let email = res.results[0] && res.results[0].email;
    let phone = res.results[0] && res.results[0].phone;
    let age = res.results[0] && res.results[0].dob.age;
    return {
      fullName,
      picture,
      email,
      phone,
      age,
    };
  } catch (err) {
    console.log(err);
  }
}

async function display() {
  let data = await fetchData();
  console.log(data);
  let image = document.querySelector("img");
  image.setAttribute("src", data.picture);
  let heading = document.querySelector("h1");
  heading.innerHTML = data.fullName;

  let btnList = document.querySelectorAll("button");
  let subHeading = document.querySelector("h2");

    btnList.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            subHeading.innerHTML = '';
            let attr = btn.getAttribute("data-attr")
            if(attr === 'age'){
                subHeading.innerHTML = data.age;
            }else if(attr === 'email'){
                subHeading.innerHTML = data.email;
            }else if(attr === 'phone'){
                subHeading.innerHTML = data.phone;
            }
        })
    })
}

display();
