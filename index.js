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
// projectLinkOne.addEventListener('mouseover', () => {
//     backgroundOne.classList.add('new-background1')

// })

// projectLinkOne.addEventListener('mouseout', () => {
//     backgroundOne.classList.remove('new-background1')
// })

//Project Link 2
projectLinkTwo.addEventListener('mouseover', () => {
    backgroundOne.style.display = 'none'
    backgroundTwo.classList.add('new-background2')
})

projectLinkTwo.addEventListener('mouseout', () => {
    backgroundTwo.classList.remove('new-background2')
    backgroundOne.style.display = 'flex'

})

//Project Link 3
projectLinkThree.addEventListener('mouseover', () => {
    backgroundOne.style.display = 'none'
    backgroundThree.classList.add('new-background3')
})

projectLinkThree.addEventListener('mouseout', () => {
    backgroundThree.classList.remove('new-background3')
    backgroundOne.style.display = 'flex'
})

//Project Link 4
projectLinkFour.addEventListener('mouseover', () => {
    backgroundOne.style.display = 'none'
    backgroundFour.classList.add('new-background4')
})

projectLinkFour.addEventListener('mouseout', () => {
    backgroundFour.classList.remove('new-background4')
    backgroundOne.style.display = 'flex'
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
    htmlSkill.classList.add('skills-background-new')
    htmlSkill.textContent = 'HTML'
})

htmlSkill.addEventListener('mouseout', () => {
    htmlSkill.classList.remove('skills-background-new')
    htmlSkill.textContent = 'HT'
})

cssSkill.addEventListener('mouseover', () => {
    cssSkill.classList.add('skills-background-new')
    cssSkill.textContent = 'CSS'
})

cssSkill.addEventListener('mouseout', () => {
    cssSkill.classList.remove('skills-background-new')
    cssSkill.textContent = 'CS'
})

jsSkill.addEventListener('mouseover', () => {
    jsSkill.classList.add('skills-background-new')
    jsSkill.textContent = 'JavaScript'
})

jsSkill.addEventListener('mouseout', () => {
    jsSkill.classList.remove('skills-background-new')
    jsSkill.textContent = 'JS'
})

postgreSkill.addEventListener('mouseover', () => {
    postgreSkill.classList.add('skills-background-new')
    postgreSkill.textContent = 'Postgres'
})

postgreSkill.addEventListener('mouseout', () => {
    postgreSkill.classList.remove('skills-background-new')
    postgreSkill.textContent = 'PG'
})

gitSkill.addEventListener('mouseover', () => {
    gitSkill.classList.add('skills-background-new')
    gitSkill.textContent = 'Git'
})

gitSkill.addEventListener('mouseout', () => {
    gitSkill.classList.remove('skills-background-new')
    gitSkill.textContent = 'GT'
})

nodeSkill.addEventListener('mouseover', () => {
    nodeSkill.classList.add('skills-background-new')
    nodeSkill.textContent = 'Node'
})

nodeSkill.addEventListener('mouseout', () => {
    nodeSkill.classList.remove('skills-background-new')
    nodeSkill.textContent = 'ND'
})



