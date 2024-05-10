function onReload() {
  if (
    localStorage.getItem("email") == null &&
    localStorage.getItem("password") == null
  ) {
    window.location.href = "login.html";
  }
}

onReload();
function logout() {
  localStorage.clear();
  location.reload();
  window.location.href = "login.html";
}
       
const firstCard = document.getElementById("firstcard");
const secondCard = document.getElementById("secondcard");
function getprofile() {
  if (firstCard.style.display == "block") {
    firstCard.style.display = "none";
  } else {
    firstCard.style.display = "block";
    document.getElementById("username").innerHTML =
      localStorage.getItem("username");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
    document.getElementById("mnumber").innerHTML =
      localStorage.getItem("mobilenumber");
    document.getElementById("birthdate").innerHTML =
      localStorage.getItem("dob");
    document.getElementById("gender").innerHTML =
      localStorage.getItem("gender");
  }
}

function toggleCards() {
  if (firstCard.style.display === "none") {
    firstCard.style.display = "block";
    secondCard.style.display = "none";
  } else {
    firstCard.style.display = "none";
    secondCard.style.display = "block";
  }
}

function toggle() {
  firstCard.style.display = "none";
}

function change() {
  const name = document.getElementById("usernamechange").value;
  const email = document.getElementById("emailchange").value;
  const mnumber = document.getElementById("mnuberchange").value;

  const dob = document.getElementById("dobchange").value;
  const gender = document.getElementById("genderchange").value;

  localStorage.setItem("username", name);
  localStorage.setItem("email", email);
  localStorage.setItem("mnumber", mnumber);
  localStorage.setItem("dob", dob);
  localStorage.setItem("gender", gender);
  toggleCards();
  getprofile();
}

const d = document.getElementById("weather");
const get = async () => {
  const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=ahmedabad";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4a6a6a2640msh5ddbdb94fd718d6p1a2a73jsnbbfdc3d35d17",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    d.innerHTML = " temperature :" + result.current.temp_c + " °C";
  } catch (error) {
    console.error(error);
  }
};

get();

const settime = () => {
  const now = new Date();

  const currentDateTime = now.toLocaleString();
  document.getElementById("time").innerHTML = currentDateTime;
};

setInterval(settime, 1000);

const getgif = async () => {
  const search_url =
    "https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8";
  const response = await fetch(search_url);
  const response_objects = await response.json();
  const top_10_gifs = response_objects["results"];
  let m = Math.floor(Math.random() * 7);

  document.getElementById("image").src =
    top_10_gifs[m]["media"][0]["nanogif"]["url"];
};
getgif();
setInterval(getgif, 4000);

let i = 0;
const usertask = {};

const container = document.getElementById("tablecontainer");
const tablee = document.createElement("table");
tablee.id = "me1";
const tablebody = document.createElement("tbody");
const thead = document.createElement("thead");
container.appendChild(tablee);
tablee.appendChild(thead);
tablee.appendChild(tablebody);
tablee.style.border = "1px solid black";
const rowhead = document.createElement("tr");
const colhead1 = document.createElement("th");
const colhead2 = document.createElement("th");
const colhead3 = document.createElement("th");
const colhead4 = document.createElement("th");
const colhead5 = document.createElement("th");
thead.appendChild(rowhead);
rowhead.appendChild(colhead1);
rowhead.appendChild(colhead2);
rowhead.appendChild(colhead3);
rowhead.appendChild(colhead4);
rowhead.appendChild(colhead5);
colhead1.textContent = "Mark/Unmark";
colhead2.textContent = "TASK LIST";
colhead3.textContent = "UPDATE TASK";
colhead4.textContent = "DELETE TASK";
colhead5.textContent = "STATUS";

let tasks = [];
let checkedtask = [];
let getRow;

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    tasks = storedTasks;
    tasks.forEach((task) => {
      createtable(task);
    });
  }
  const storedckeckedstatus = JSON.parse(localStorage.getItem("checkedtask"));
  if (storedckeckedstatus) {
    checkedtask = storedckeckedstatus;
    storedTasks.forEach((task, index) => {
      checkedtask.forEach((task1, index1) => {
        if (
          getRow.parentElement.children[index].children[1].firstChild
            .innerText == task1
        ) {
          getRow.parentElement.children[
            index
          ].firstChild.firstChild.checked = true;
          getRow.parentElement.children[index].lastChild.innerText =
            "completed";
        }
      });
    });
  }
  document.getElementById("completetask").innerHTML = checkedtask.length;
  document.getElementById("pendingtask").innerHTML =
    storedTasks.length - checkedtask.length;
}

function saveTasks() {
 
  localStorage.setItem("tasks", JSON.stringify(tasks));

  localStorage.setItem("checkedtask", JSON.stringify(checkedtask));
}
window.onload = function () {
  loadTasks();
};

function createtable(taskText, index) {
  const y = taskText || document.getElementById("taskinput").value;

  const row = document.createElement("tr");
  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col2DIV = document.createElement("div");
  col2.appendChild(col2DIV);
  const col3 = document.createElement("td");
  const col4 = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkboxid";
  const text = document.createTextNode(y);
  const button1 = document.createElement("button");
  button1.type = "submit";
  const text1 = document.createTextNode("UPDATE");
  button1.appendChild(text1);
  const button2 = document.createElement("button");
  button2.type = "submit";
  button2.setAttribute("id", "deletebtn");
  const text2 = document.createTextNode("DELETE");
  const updatetextbox = document.createElement("input");
  updatetextbox.type = "text";
  updatetextbox.id = "textupdate";
  col1.style.border = "1px solid #ddd";
  col2.style.border = "1px solid #ddd";
  col3.style.border = "1px solid #ddd";
  col4.style.border = "1px solid #ddd";
  const status = document.createElement("td");
  status.textContent = "pending";
  tablebody.appendChild(row);
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(status);

  col1.appendChild(checkbox);
  col2.appendChild(col2DIV);
  col2DIV.appendChild(text);
  col3.appendChild(button1);
  col4.appendChild(button2);
  button1.appendChild(text1);
  button2.appendChild(text2);

  // usertask[i++] = y;
  // localStorage.setItem("task", JSON.stringify(usertask));

  button1.addEventListener("click", () => {
    if (col2DIV.style.display !== "none") {
      col2.appendChild(updatetextbox);
      col2DIV.style.display = "none";
      updatetextbox.value = col2DIV.innerText;
      updatetextbox.style.display = "block";
    } else {
      const textvalue = updatetextbox.value.trim();
      if (textvalue !== "") {
        updatetextbox.style.display = "none";
        col2DIV.style.display = "block";
        col2DIV.innerText = updatetextbox.value;

        const rowIndex = Array.from(row.parentElement.children).indexOf(row);
        tasks[rowIndex] = textvalue;

        if (
          row.parentElement.children[rowIndex].firstChild.firstChild.checked
        ) {
          checkedtask[rowIndex] = textvalue;
        }
        saveTasks();
      }
    }
  });

  button2.addEventListener("click", (event) => {
    const row = event.target.parentElement.parentElement;
    const rowIndex = Array.from(row.closest("tbody").children).indexOf(row);
    const isChecked = row.children[0].querySelector(
      "input[type=checkbox]"
    ).checked;

    if (isChecked) {
      const taskText = row.children[1].firstChild.innerText;
      const checkedIndex = checkedtask.indexOf(taskText);
      if (checkedIndex !== -1) {
        checkedtask.splice(checkedIndex, 1);
      }
    }

    tasks.splice(rowIndex, 1);
    row.remove();
    const completeCount = checkedtask.length;
    const pendingCount = tasks.length - completeCount;

    document.getElementById("completetask").innerHTML = completeCount;
    document.getElementById("pendingtask").innerHTML = pendingCount;

    if (tasks.length === 0) {
      document.getElementById("completetask").innerHTML = 0;
    }

    saveTasks();
  });

  checkbox.addEventListener("change", function () {
    const rowIndex = Array.from(row.parentElement.children).indexOf(row);

    if (this.checked) {
      checkedtask.push(tasks[rowIndex]);

      status.textContent = "completed";
    } else {
      const checkedIndex = checkedtask.indexOf(tasks[rowIndex]);
      if (checkedIndex != -1) {
        checkedtask.splice(checkedIndex, 1);
      }
      status.textContent = "pending";
    }
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    document.getElementById("completetask").innerHTML = checkedtask.length;
    document.getElementById("pendingtask").innerHTML =
      storedTasks.length - checkedtask.length;
      
    saveTasks();
  });

  getRow = row;
}

function addtasktable(e) {
  e.preventDefault();
  const taskInput = document.getElementById("taskinput").value;
  
    
    if (taskInput.trim() !== ""&& !tasks.includes(taskInput.trim())) {
      tasks.push(taskInput);
      createtable(taskInput);
      const pendingCount = tasks.length - checkedtask.length;
      document.getElementById("pendingtask").innerHTML = pendingCount;
      saveTasks();
    }
    document.getElementById("taskinput").value=""
  
}
