document.addEventListener('DOMContentLoaded', function () {
    const tasklist = [];
    const taskOutput = document.getElementById('taskOutput');
    document.forms.userinput.addEventListener("submit", function (event) {
        event.preventDefault();
        const data = new FormData(event.target)

        let newdiv = document.createElement("div")
        let newP = document.createElement("p")
        let newBtn = document.createElement("button")
        let newInput = document.createElement("input")
        newInput.setAttribute("type","checkbox")
        newInput.setAttribute("name","checkbox")
        newInput.setAttribute("id","checkbox")
        newdiv.classList.add('task')
        newBtn.setAttribute('disabled', 'true')

        newP.innerText = data.get('task')
        newBtn.innerText = 'Remove Task'

        newBtn.onclick = () => {
            newdiv.remove()
        }

        newInput.onchange = (event) => {
            if (event.target.value){
                newBtn.removeAttribute('disabled')
                newInput.setAttribute("disabled","")
            }
        }

        newdiv.appendChild(newP)
        newdiv.appendChild(newInput)
        newdiv.appendChild(newBtn)
        taskOutput.appendChild(newdiv)
    });
});