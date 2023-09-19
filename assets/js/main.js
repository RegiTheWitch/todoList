const inputEl =document.querySelector('.inputEl')
const buttonEl =document.querySelector('.btnEl')
const listsEl =document.querySelector('.lists')

// const notes =['Чебурек', 'Пельмень', 'Колбаса']

const notes=[
    {
        title:'Чебурек',
        action:false,
    },
    {
        title:'Пельмень',
        action:false,
    },
    {
        title:'Колбаса',
        action:true,
    }
]

function arrayNote(){
    // for(let note of notes){
    //     listsEl.insertAdjacentHTML('beforeend',getNote(note))
    // }

    listsEl.innerHTML=''

    if(notes.length===0){
        listsEl.innerHTML='<p class="option">Нет заметок</p>'
    }

    for (let i=0; i<notes.length; i++){
        listsEl.insertAdjacentHTML('beforeend',getNote(notes[i],[i]))
    }
    
}

arrayNote()



function getNote(note,index){
    return `
    <li class="list ${note.action ? 'active' : ''}">
						<p>${note.title}</p>
						<div class="actions">
							<button class="done ${note.action ? 'doneActive' : ''}" data-index = ${index} data-type="done">Выполнить</button>
							<button class="remove" data-index = ${index} data-type="remove">Удалить</button>
						</div>
					</li>
    
    
    `
}

buttonEl.onclick=function(event){
    if(inputEl.value.length===0){
        return
    }

    const inputNote={
        title:inputEl.value,
        action:false
    }

    // listsEl.insertAdjacentHTML('beforeend', getNote(inputNote))

    notes.push(inputNote)
    arrayNote()
    event.preventDefault()
    inputEl.value=''
}


listsEl.onclick=function(event){
    if(event.target.dataset.index){
        const index =Number(event.target.dataset.index)
        const type =event.target.dataset.type

        if(type === 'done'){
            notes[index].action= !notes[index].action
        }else if(type==='remove'){
            notes.splice(index,1)
        }

        arrayNote()
    }
}