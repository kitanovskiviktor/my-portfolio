import indianMockup from '../../Assets/Images/indian-mockup.png';
import rikromMockup from '../../Assets/Images/rikrom-mockup.png';
import selectiveMockup from '../../Assets/Images/selective-mockup.png';
import alfaMockup from '../../Assets/Images/alfa-mockup.png';

import projectIndian from '../../Assets/Images/project_indian.png';
import projectRikrom from '../../Assets/Images/project_rikrom.png';
import projectSelective from '../../Assets/Images/project_selective.png';
import projectAlfa from '../../Assets/Images/project_alfa.png';

import reactLogo from '../../Assets/Images/react-logo.png';
import javascriptLogo from '../../Assets/Images/javascript-logo.png';
import javaLogo from '../../Assets/Images/java-logo.png';
import cLogo from '../../Assets/Images/c-logo.png';
import sqlLogo from '../../Assets/Images/sql-logo.png';

export const experienceData = [
    {
        id: 1,
        time: `2022`,
        job: `Front End developer`,
        desc: `Freelancer`
    },
]

export const educationData = [
    {
        id: 1,
        time: `2022`,
        job: `Computer Engineer Student`,
        desc: `Faculty of Computer Science & Engineering`
    },
]

export const skillsData = [
    {
        id: 1,
        name: 'React',
        image: reactLogo,
    },
    {
        id: 2,
        name: "Javascript",
        image: javascriptLogo,
    },
    {
        id: 3,
        name: "Java",
        image: javaLogo
    },
    {
        id: 4,
        name: "C++",
        image: cLogo
    },
    {
        id: 5,
        name: "SQL",
        image: sqlLogo
    }
]

export const achievementsData = [
    {
        id: 1,
        time: `December 2022`,
        title: 'HTML / CSS Certificate',
        desc: `Finished course for HTML & CSS @ iwec.mk`
    },
    {
        id: 2,
        time: `April 2023`,
        title: 'Javascript Certificate',
        desc: `Finished course for JavaScript @ iwec.mk`
    },
    {
        id: 3,
        time: `September 2023`,
        title: 'React Certificate',
        desc: `Finished course for React @ iwec.mk`
    },
]

export const projectsData = [
    {
        id: "1",
        desc: `Web Design and Development`,
        title: `Indian Motorcycle MK`,
        img: indianMockup,
        mainImage: projectIndian,
        description: `Indian Motorcycle Company has been in business since 1901. This organisation manufactures and sells motorcycles. My objective in this project was to boost their digital presence in Macedonia by developing a website showcasing their motorcycles and accessories. The usage of React as a technology provided the website with a solid core structure and look, resulting in an appealing user experience.`,
        tools: [
            {
                name: "React",
            },
            {
                name: "Bootstrap",
            },
            {
                name: "HTML / CSS",
            }
        ],
        year: "2023",
        client: "Indian Motorcycle",
        service: "Web Design and Development",
        link: "https://www.indianmotorcycle.mk"
    },
    {
        id: "2",
        desc: `Web Design and Development`,
        title: `Rikrom MK`,
        img: rikromMockup,
        mainImage: projectRikrom,
        description: `Rikrom is a food production and commerce enterprise with many years of experience.
        Their goal was to build a website where their wholesale customers could order merchandise. The customer gets complete access to his planned products for order by using the cart, which he can delete or update.
        With React as the dominant technology, all website capabilities and visibility are set.`,
        tools: [
            {
                name: "React",
            },
            {
                name: "Bootstrap",
            },
            {
                name: "HTML / CSS",
            }
        ],
        year: "2023",
        client: "Rikrom",
        service: "Web Design and Development",
        link: "https://www.rikrom.mk"
    },
    {
        id: "3",
        desc: `Web Design and Development`,
        title: `Selective Professional MK`,
        img: selectiveMockup,
        mainImage: projectSelective,
        description: `Selective Professional is a hairdressing salon as well as a provider of hairdressing products to other businesses.
        I exposed the organisation to the digital market by creating a visually beautiful and user-centric website with React. The site seeks to engage users and drive informed purchases by emphasising interactive displays and thorough product descriptions. `,
        tools: [
            {
                name: "React",
            },
            {
                name: "Bootstrap",
            },
            {
                name: "HTML / CSS",
            }
        ],
        year: "2023",
        client: "Selective Professional",
        service: "Web Design and Development",
        link: "https://www.selectiveprofessional.mk"
    },
    {
        id: "4",
        desc: `Web Design`,
        title: `Driving School Alfa`,
        img: alfaMockup,
        mainImage: projectAlfa,
        description: `Alfa is a driving school in Skopje that plans to go fully online with its own website where future drivers can learn about their services.
        The website offers excellent visibility in the competitive driving school industry by employing strategic SEO approaches, attracting a wide audience seeking quality driving education.`,
        tools: [
            {
                name: "Bootstrap"
            },
            {
                name: "HTML / CSS",
            }
        ],
        year: "2022",
        client: "Driving School Alfa",
        service: "Web Design",
        link: "https://www.avtoskolaalfa.mk"
    },

]