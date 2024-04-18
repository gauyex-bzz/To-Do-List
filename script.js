function addEventListeners(newP, newEdit, newBtn, newdiv, taskOutput) {
    newEdit.onclick = () => {
        let newTask = window.prompt("Change");
        if (newTask !== null) {
            newP.innerText = newTask;
            // Update the localStorage when a task is edited
            localStorage.setItem('entries', taskOutput.innerHTML);
        }
    }

    newBtn.onclick = () => {
        newdiv.remove();
        // Delay the update to ensure that the innerHTML is updated
        setTimeout(() => {
            // Remove the task from localStorage when it's deleted
            localStorage.setItem('entries', taskOutput.innerHTML);
        }, 0);
    }
}

window.onload = function () {
    const taskOutput = document.getElementById('taskOutput');
    if (localStorage.getItem('entries')) {
        taskOutput.innerHTML = localStorage.getItem('entries');
        // Add event listeners to existing tasks
        Array.from(taskOutput.getElementsByClassName('task')).forEach(task => {
            const newP = task.getElementsByTagName('p')[0];
            const newEdit = task.getElementsByTagName('button')[0];
            const newBtn = task.getElementsByTagName('button')[1];
            addEventListeners(newP, newEdit, newBtn, task, taskOutput);
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const taskOutput = document.getElementById('taskOutput');
    document.forms.userinput.addEventListener("submit", function (event) {
        event.preventDefault();
        const data = new FormData(event.target)

        let newdiv = document.createElement("div")
        let newP = document.createElement("p")
        let newBtn = document.createElement("button")
        let newEdit = document.createElement('button')
        let newInput = document.createElement("input")

        newInput.setAttribute("type","checkbox")
        newInput.setAttribute("name","checkbox")
        newInput.setAttribute("id","checkbox")
        newdiv.classList.add('task')
        newEdit.setAttribute("id", "prompt")
        newP.innerText = data.get('task')
        newEdit.innerText = 'Edit Task'
        newBtn.innerText = 'Delete Task'

        addEventListeners(newP, newEdit, newBtn, newdiv, taskOutput);

        newdiv.appendChild(newP)
        newdiv.appendChild(newInput)
        newdiv.appendChild(newEdit)
        newdiv.appendChild(newBtn)
        taskOutput.appendChild(newdiv)

        // Save the new task to localStorage
        localStorage.setItem('entries', taskOutput.innerHTML);
    });
});