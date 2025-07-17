const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function attachEvents(li) {
    const span = li.querySelector("span");
    const deleteBtn = li.querySelector("button");

    span.addEventListener("click", () => {
        span.classList.toggle("task-done");
    });

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });
}


document.querySelectorAll("#task-list li").forEach(attachEvents);

addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span> <button>🗑️</button>`;
    attachEvents(li);
    taskList.appendChild(li);
    input.value = "";
});
