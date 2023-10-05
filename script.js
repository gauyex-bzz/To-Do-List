const tasklist = []
const taskOutput = document.getElementById('taskOutput');
document.forms.register.addEventListener("submit", function (event){
    event.preventDefault();


    const data = new FormData(event.target)
    console.log(data)

    taskOutput.innerText = data.get('task')
    document.getElementById('taskOutput').innerHTML = data.get('task')
})