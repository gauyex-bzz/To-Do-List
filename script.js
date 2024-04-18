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

        newEdit.onclick = () => {
            let newTask = window.prompt("Change");
            if (newTask !== null) {
                newP.innerText = newTask;
            }
        }

        newBtn.onclick = () => {
            newdiv.remove()
        }

        newdiv.appendChild(newP)
        newdiv.appendChild(newInput)
        newdiv.appendChild(newEdit)
        newdiv.appendChild(newBtn)
        taskOutput.appendChild(newdiv)
    });
});