
function reveal() {
    const reveals = document.querySelectorAll(".reveal, .reveal2, .reveal3, .reveal1");
    reveals.forEach((item, i, arr) => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const elementVisible = 40;
        if (elementTop < windowHeight - elementVisible) {
            if (item.classList.contains("reveal")) {
                arr[i].classList.add("active");
            }

            else if (item.classList.contains("reveal1")) {
                arr[i].classList.add("active1");
            }

            else if (item.classList.contains("reveal2")) {
                arr[i].classList.add("active2");
            }

            else if (item.classList.contains("reveal3")) {
                arr[i].classList.add("active3");
            }
            
        }
    })
}

window.addEventListener("scroll", reveal);


function mobileExperienceDate () {
    const job1 = document.querySelector("#jobTitle1");
    job1.textContent = 'Software Developer Intern | 01/21 - 04/21'; 

    const job2 = document.querySelector("#jobTitle2");
    job2.textContent = 'Tax - Technology Enablement & Innovation Intern | 01/22 - 04/22';

    const job3 = document.querySelector("#jobTitle3");
    job3.textContent = 'Business Finance Intern | 01/23 - 04/23';
}

function changeBackmobileExperienceDate () {
    const job1 = document.querySelector("#jobTitle1");
    job1.textContent = 'Software Developer Intern'; 

    const job2 = document.querySelector("#jobTitle2");
    job2.textContent = 'Tax - Technology Enablement & Innovation Intern';

    const job3 = document.querySelector("#jobTitle3");
    job3.textContent = 'Business Finance Intern';
}

let isResponsiveNavshowing = false;

function removeResponsiveNav () {
    document.querySelector("#responsiveNav").remove();
    isResponsiveNavshowing = isResponsiveNavshowing? false : true;
}

function addResponsiveNav() {
    const responsiveNav = document.createElement("div");
    responsiveNav.setAttribute("id", "responsiveNav");

    const home = document.createElement("div");
    home.setAttribute("class", "responsiveNavContainer");
    const homelink = document.createElement("a");
    homelink.setAttribute("href", "#Home");
    homelink.innerHTML = "HOME";
    homelink.addEventListener("click", removeResponsiveNav);
    home.appendChild(homelink);
    responsiveNav.appendChild(home);

    const about = document.createElement("div");
    about.setAttribute("class", "responsiveNavContainer");
    const aboutlink = document.createElement("a");
    aboutlink.setAttribute("href", "#AboutMe");
    aboutlink.innerHTML = "ABOUT"
    aboutlink.addEventListener("click", removeResponsiveNav);
    about.appendChild(aboutlink);
    responsiveNav.appendChild(about);

    const experience = document.createElement("div");
    experience.setAttribute("class", "responsiveNavContainer");
    const experiencelink = document.createElement("a");
    experiencelink.setAttribute("href", "#WorkExperience");
    experiencelink.innerHTML = "EXPERIENCE";
    experiencelink.addEventListener("click", removeResponsiveNav);
    experience.appendChild(experiencelink);
    responsiveNav.appendChild(experience);

    const projects = document.createElement("div");
    projects.setAttribute("class", "responsiveNavContainer");
    const projectslink = document.createElement("a");
    projectslink.setAttribute("href", "#Projects");
    projectslink.innerHTML = "PROJECTS";
    projectslink.addEventListener("click", removeResponsiveNav);
    projects.appendChild(projectslink);
    responsiveNav.appendChild(projects);

    const contact = document.createElement("div");
    contact.setAttribute("class", "responsiveNavContainer");
    const contactlink = document.createElement("a");
    contactlink.setAttribute("href", "#ReachOut");
    contactlink.innerHTML = "CONTACT";
    contactlink.addEventListener("click", removeResponsiveNav);
    contact.appendChild(contactlink);
    responsiveNav.appendChild(contact);

    document.querySelector("nav").appendChild(responsiveNav);
    
    isResponsiveNavshowing = isResponsiveNavshowing? false : true;
}

if (window.innerWidth <= 1270) {
    mobileExperienceDate();
    document.querySelector("#homeimgContainer").remove();


    document.querySelector("#regularNav a").remove();
    document.querySelector("#regularNav a").remove();
    document.querySelector("#regularNav a").remove();
    document.querySelector("#regularNav a").remove();
    document.querySelector("#regularNav a").remove();
    

    const regularNav = document.querySelector("#regularNav");
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    
    iconSvg.setAttribute('viewBox', "0 0 448 512");
    iconPath.setAttribute('d', "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");

    iconSvg.addEventListener("click", () => {
        if(isResponsiveNavshowing) {
            removeResponsiveNav();
        }
        else {
            addResponsiveNav();
        }
        
    });

    iconSvg.appendChild(iconPath);
    regularNav.appendChild(iconSvg);
}




window.addEventListener("resize", () => {
    if (window.innerWidth <= 1270) {
        mobileExperienceDate();
        if(document.querySelector("#homeimgContainer")) {
            document.querySelector("#homeimgContainer").remove();
        }

        if(document.querySelector("#regularNav a")) {
            document.querySelector("#regularNav a").remove();
            document.querySelector("#regularNav a").remove();
            document.querySelector("#regularNav a").remove();
            document.querySelector("#regularNav a").remove();
            document.querySelector("#regularNav a").remove();
            

            const regularNav = document.querySelector("#regularNav");
            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            iconSvg.setAttribute('viewBox', "0 0 448 512");
            iconPath.setAttribute('d', "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");

            iconSvg.addEventListener("click", () => {
                if(isResponsiveNavshowing) {
                    removeResponsiveNav();
                }
                else {
                    addResponsiveNav();
                }
            });

            iconSvg.appendChild(iconPath);
            regularNav.appendChild(iconSvg);
        }

        
    }


    else {
        changeBackmobileExperienceDate ();
        if(document.querySelector("#homeimgContainer")) {
            return;
        }
        const imgContainer = document.createElement("div");
        imgContainer.setAttribute('id', 'homeimgContainer');

        const homeImg = document.createElement("img");
        homeImg.setAttribute('src', "assets/workspace.jpg");
        homeImg.setAttribute('alt', "Workspace of a software developer");

        imgContainer.appendChild(homeImg);

        document.querySelector("#Home").insertBefore(imgContainer, document.querySelector("#half"));


    }

    if(window.innerWidth > 1270 && document.querySelector("#regularNav svg")) {
        const regularNav = document.querySelector("#regularNav");

        document.querySelector("#regularNav svg").remove();

        const home = document.createElement("a");
        home.innerHTML = "HOME";
        home.setAttribute("href", "#Home");
        regularNav.appendChild(home);

        const about = document.createElement("a");
        about.innerHTML = "ABOUT";
        about.setAttribute("href", "#AboutMe");
        regularNav.appendChild(about);

        const experience = document.createElement("a");
        experience.innerHTML = "EXPERIENCE";
        experience.setAttribute("href", "#WorkExperience");
        regularNav.appendChild(experience);

        const projects = document.createElement("a");
        projects.innerHTML = "PROJECTS";
        projects.setAttribute("href", "#Projects");
        regularNav.appendChild(projects);

        const contact = document.createElement("a");
        contact.innerHTML = "CONTACT";
        contact.setAttribute("href", "#ReachOut");
        regularNav.appendChild(contact);

    }
});


