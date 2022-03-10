const ativoClass = 'ativo';
const windosMetade = window.innerHeight * 0.6;
function initTab() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');


    if (tabMenu && tabContent != null) {
        tabContent[0].classList.add(ativoClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(ativoClass);
            });
            tabContent[index].classList.add(ativoClass);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    };
};

function initAcc() {
    const listItem = document.querySelectorAll('.js-accordion dt');
    if (listItem.length) {
        listItem[0].classList.add(ativoClass)
        listItem[0].nextElementSibling.classList.add(ativoClass)

        function activityAccord() {
            this.classList.toggle(ativoClass);
            this.nextElementSibling.classList.toggle(ativoClass);
        }
        listItem.forEach((item) => {
            item.addEventListener('click', activityAccord);
        })
    }
}
function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSect(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href);
        const topo =section.offsetTop
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        })
    }
    linksInternos.forEach((link)=>{
        link.addEventListener('click',scrollToSect);
    })
}

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){
        function animaScoll(){
            sections.forEach((section)=>{
                const secTop = section.getBoundingClientRect().top;
                const inSectVisiable = (secTop - windosMetade) < 0
                if(inSectVisiable)
                section.classList.add(ativoClass)
            })
        }
        window.addEventListener('scroll',animaScoll)
        animaScoll();
    }   
}

initTab();
initAcc();
initScrollSuave();
initAnimacaoScroll();