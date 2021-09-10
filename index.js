//Story Boxes
const sideBoxOne = document.getElementById('side-box1')
const sideBoxTwo = document.getElementById('side-box2')
const sideBoxP = document.getElementById('side-box-p')
const sideBoxP2 = document.getElementById('side-box-p2')
const story1 = document.getElementById('story1')
const story2 = document.getElementById('story2')
const nameChange = document.getElementById('name')

//Skills
const htmlSkill = document.getElementById('html')
const cssSkill = document.getElementById('css')
const jsSkill = document.getElementById('javascript')
const postgreSkill = document.getElementById('postgres')
const gitSkill = document.getElementById('git')
const nodeSkill = document.getElementById('node')

const contact = document.getElementById('contact')
const headerTwo = document.getElementById('header2')
const navTwo = document.getElementById('nav2')


contact.addEventListener('click', (e) => {
    e.preventDefault()
    headerTwo.style.display = 'block'
})

document.getElementById('project-box-list').addEventListener('mouseover', () => {
    headerTwo.style.display = 'none'
})


//Project Lists
const projectLinkOne = document.getElementById('project-one')
const backgroundOne = document.getElementById('background1')

const projectLinkTwo = document.getElementById('project-two')
const backgroundTwo = document.getElementById('background2')

const projectLinkThree = document.getElementById('project-three')
const backgroundThree = document.getElementById('background3')

const projectLinkFour = document.getElementById('project-four')
const backgroundFour = document.getElementById('background4')





//Project Link 1
projectLinkOne.addEventListener('mouseover', () => {
    backgroundOne.classList.add('new-background1')

})

projectLinkOne.addEventListener('mouseout', () => {
    backgroundOne.classList.remove('new-background1')
})

//Project Link 2
projectLinkTwo.addEventListener('mouseover', () => {
    backgroundTwo.classList.add('new-background2')
})

projectLinkTwo.addEventListener('mouseout', () => {
    backgroundTwo.classList.remove('new-background2')
})

//Project Link 3
projectLinkThree.addEventListener('mouseover', () => {
    backgroundThree.classList.add('new-background3')
})

projectLinkThree.addEventListener('mouseout', () => {
    backgroundThree.classList.remove('new-background3')
})

//Project Link 4
projectLinkFour.addEventListener('mouseover', () => {
    backgroundFour.classList.add('new-background4')
})

projectLinkFour.addEventListener('mouseout', () => {
    backgroundFour.classList.remove('new-background4')
})






//Name Changer
nameChange.addEventListener('mouseover', () => {
    nameChange.textContent = 'Jake Alexander'
})


nameChange.addEventListener('mouseout', () => {
    nameChange.textContent = 'JA'
})


//Story Box 1
sideBoxOne.addEventListener('mouseover', () => {
    story1.style.display = 'none'
    sideBoxOne.classList.remove('side-box1')
    sideBoxOne.classList.add('side-box-new')
    sideBoxP.style.display = 'flex'
})
sideBoxOne.addEventListener('mouseout', () => {
    sideBoxOne.classList.add('side-box1')
    sideBoxOne.classList.remove('side-box-new')
    sideBoxP.style.display = 'none'
    story1.style.display = 'flex'
})


//Story Box 2
sideBoxTwo.addEventListener('mouseover', () => {
    story2.style.display = 'none'
    sideBoxTwo.classList.remove('side-box1')
    sideBoxTwo.classList.add('side-box-new')
    sideBoxP2.style.display = 'flex'
})
sideBoxTwo.addEventListener('mouseout', () => {
    sideBoxTwo.classList.add('side-box1')
    sideBoxTwo.classList.remove('side-box-new')
    sideBoxP2.style.display = 'none'
    story2.style.display = 'flex'
})



//Skill mouseovers
htmlSkill.addEventListener('mouseover', () => {
    htmlSkill.textContent = 'HTML'
})

htmlSkill.addEventListener('mouseout', () => {
    htmlSkill.textContent = 'HT'
})

cssSkill.addEventListener('mouseover', () => {
    cssSkill.textContent = 'CSS'
})

cssSkill.addEventListener('mouseout', () => {
    cssSkill.textContent = 'CS'
})

jsSkill.addEventListener('mouseover', () => {
    jsSkill.textContent = 'JavaScript'
})

jsSkill.addEventListener('mouseout', () => {
    jsSkill.textContent = 'JS'
})

postgreSkill.addEventListener('mouseover', () => {
    postgreSkill.textContent = 'Postgres'
})

postgreSkill.addEventListener('mouseout', () => {
    postgreSkill.textContent = 'PG'
})

gitSkill.addEventListener('mouseover', () => {
    gitSkill.textContent = 'Git'
})

gitSkill.addEventListener('mouseout', () => {
    gitSkill.textContent = 'GT'
})

nodeSkill.addEventListener('mouseover', () => {
    nodeSkill.textContent = 'Node'
})

nodeSkill.addEventListener('mouseout', () => {
    nodeSkill.textContent = 'ND'
})



