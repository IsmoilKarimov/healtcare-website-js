
const toggleModal = () => {
    document.querySelector('.modalBox').classList.toggle('active')
}

let sectionN = 1
let titles = ['', 'Shaxsiy ma’lumotlar', 'Tibbiy ma’lumotlar', 'Tashrif ma’lumotlari', 'Kasallik tarixi'] 
let mStep = document.querySelector('.modal__step')
let mTitle = document.querySelector('.private__info')

const nextSection = (e) => {
    document.querySelector(`.section.section-${sectionN++}`).style.display = 'none'
    document.querySelector(`.section.section-${sectionN}`).style.display = 'flex'
    mStep.textContent = sectionN                                  
    mTitle.textContent = titles[sectionN] 
    if (sectionN == 4){
        e.target.textContent = 'Yakunlash'
        return false
    }    
}
