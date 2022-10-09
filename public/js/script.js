let search = document.querySelector(".search");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let course = document.querySelector(".course");
let result = document.querySelector(".grid-4");
const msg = document.querySelector(".msg");

search.addEventListener("click", (event) => {
  event.preventDefault();
  if (!name.value || !email.value || !course.value) {
    msg.setAttribute("class", "error");
    msg.textContent = "Input all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    console.log(course.value);
    result.innerHTML = "";
    fetch("json/groups.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // console.log(data);
        data.forEach((group) => {
          if (course.value == group.course) {
            const div = document.createElement("div");
            div.classList.add("result-style", "card");

            const groupName = document.createElement("h4");
            groupName.classList.add("groupName");
            groupName.innerHTML = `${group.name}`;

            const description = document.createElement("h4");
            description.classList.add("description");
            description.innerHTML = `Description: ${group.description}`;

            const course = document.createElement("h4");
            course.classList.add("course");
            course.innerHTML = `Course: ${group.course}`;

            const groupType = document.createElement("h4");
            groupType.classList.add("groupType");
            groupType.innerHTML = `Group Type: ${group.group_type}`;

            const inviteUrl = document.createElement("a");
            inviteUrl.classList.add("btn", "btn-result");
            inviteUrl.href = `${group.invite_url}`;
            inviteUrl.innerHTML = `Join Group`;

            div.appendChild(groupName);
            div.appendChild(description);
            div.appendChild(course);
            div.appendChild(groupType);
            div.appendChild(inviteUrl);

            result.appendChild(div);
          }
        });
      });
  }
});
