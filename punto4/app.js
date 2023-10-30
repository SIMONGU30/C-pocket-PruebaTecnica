const form =document.getElementById('formAddAplications')
const nameInput = document.getElementById('nameInput')
const categoryNameInput=document.getElementById('categoryNameInput')
const tableBody=document.getElementById('tableBody')

let data= JSON.parse(localStorage.getItem('formData'))||[]

form.addEventListener('submit', function(event){
    event.preventDefault()

    const name=nameInput.value
    const categoryName=categoryNameInput.value
    
    if(name && categoryName){
        const newData={name,categoryName}
        data.push(newData)
        saveDataToLocalStorage()
        renderTable()
        form.reset()
    }else{
        alert('Todos los datos son obligatorios')
    }
})

function saveDataToLocalStorage(){
    localStorage.setItem('formData',JSON.stringify(data))
}

function renderTable(){
    tableBody.innerHTML=''

    data.forEach(function(item, index){
        const row=document.createElement('tr')
        const nameCell=document.createElement('td')
        const categoryNameCell=document.createElement('td')
        const actionCell=document.createElement('td')
        const editButton=document.createElement('button')
        const deleteButton=document.createElement('button')

        nameCell.textContent=item.name
        categoryNameCell.textContent=item.categoryName
        editButton.textContent='Edit'
        deleteButton.textContent='Delete'

        editButton.classList.add('button', 'button--secondary')
        deleteButton.classList.add('button', 'button--tertiary')

        editButton.addEventListener('click',function(){
            editData(index)
        })

        deleteButton.addEventListener('click',function(){
            deleteData(index)
        })
        actionCell.appendChild(editButton)
        actionCell.appendChild(deleteButton)
        row.appendChild(nameCell)
        row.appendChild(categoryNameCell)
        row.appendChild(actionCell)
        tableBody.appendChild(row)
    })
}


function editData(index){
    const item =data[index]
    nameInput.value=item.name
    categoryNameInput.value=item.categoryName
    data.splice(index,1)
    saveDataToLocalStorage()
    renderTable()
}

function deleteData(index){
    data.splice(index,1)
    saveDataToLocalStorage()
    renderTable()
}
renderTable()