const id = ['id:1','id:2','id:3','id:4','id:5','id:6']
const url = ['http://reqres.in/img/faces/1-image.jpg','http://reqres.in/img/faces/2-image.jpg','http://reqres.in/img/faces/3-image.jpg','http://reqres.in/img/faces/4-image.jpg','http://reqres.in/img/faces/5-image.jpg','http://reqres.in/img/faces/6-image.jpg']
const firstName = ['first Name:George','first Name:Janet', 'first Name:Emma', 'first Name:Eve', 'first Name:Charles','first Name:Tracey']
const lastName =['Last Name:Bluth','Last Name:Weaver','Last Name:Wong','Last Name:Holt','Last Name:Morris','Last Name:Ramos']
const emails = ['email Id:george.bluth@reqres.in','email Id:janet.weaver@reqres.in','email Id:emma.wong@reqres.in','email Id:eve.holt@reqres.in','email Id:charles.morris@reqres.in','email Id:tracey.ramos@reqres.in']

const classNames = ['one','two','three','four','five','six']


for(let i= 0;i<firstName.length;i++){
    const newElement1 = document.createElement('p')
    newElement1.innerHTML = `
      <h2>${id[i]}</h2>
      <img src="${url[i]}" />
      <h3>${firstName[i]}</h3>
      <h3>${lastName[i]}</h3>
      <h3>${emails[i]}</h3>
    `
    newElement1.classList.add('details', classNames[i])
    const main = document.querySelector('h1')
    main.appendChild(newElement1)
}