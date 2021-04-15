const html5 = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617844514/Test/html5_kt9kol.svg'
const css3 = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617844514/Test/css3_degk7j.svg'
const javascript = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617839889/Test/logo-javascript_ipm3za.svg'
const bootstrap = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617833898/Test/bootstrap-4_lgpmht.svg'
const react = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617833898/Test/react-2_z8tmub.svg'
// const figma = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617839889/Test/figma-1_ael2as.svg'
const materialUI = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617839889/Test/material-ui-1_khpiqs.svg'
const nodeJs = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617844514/Test/nodejs-icon_vpzqco.svg'
const mongoDB = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617844514/Test/mongodb-icon-1_yd86rk.svg'


export const SvgLogos = [
    {
        name: 'HTML5',
        alt: 'Html5 logo',
        url: html5
    },
    {
        name: 'CSS3',
        alt: 'CSS3 UI logo',
        url: css3
    },
    {   
        name: 'Javascript',
        alt: 'Javascript logo',
        url: javascript
    },
    {   
        name: 'Bootstrap',
        alt: 'Bootstrap logo',
        url: bootstrap,
    },
    {
        name: 'Node Js',
        alt: 'Node Js logo',
        url: nodeJs
    },
    {
        name: 'Mongo DB',
        alt: 'Mongo DB logo',
        url: mongoDB
    },
    
    {
        name: 'React',
        alt: 'React logo',
        url: react
    },
    {
        name: 'Material UI',
        alt: 'Material UI logo',
        url: materialUI
    },
    // {
    //     name: 'Figma',
    //     alt: 'Figma logo',
    //     url: figma
    // },
    
       
]

export const Projects = [
    {
        title: 'Yelpcamp',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cumque quos corporis accusantium explicabo tenetur, mollitia optio in incidunt possimus!',
        usedTech: [
            html5,
            css3,
            javascript,
            mongoDB,
            bootstrap,
            nodeJs
        ],
        image: 'https://res.cloudinary.com/emanueltejada/image/upload/v1618423385/Test/Home_tir3yy.png',
        github: 'https://github.com/EmanuelTejada032/yelp',
        deployed: 'https://protected-badlands-88004.herokuapp.com/'
    },
    {
        title: 'Shopping Cart',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cumque quos corporis accusantium explicabo tenetur, mollitia optio in incidunt possimus!',
        usedTech: [
            html5,
            css3,
            javascript,
            react,
            materialUI,
            
        ],
        image: 'https://res.cloudinary.com/emanueltejada/image/upload/v1618505015/Test/Screenshot_1_hhzfok.png',
        github: 'https://github.com/EmanuelTejada032/commercejs',
        deployed: 'https://simple-front-store.netlify.app/'
    },
    {
        title: 'FakeFlix',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cumque quos corporis accusantium explicabo tenetur, mollitia optio in incidunt possimus!',
        usedTech: [
            html5,
            css3,
            javascript
        ],
        image: 'https://res.cloudinary.com/emanueltejada/image/upload/v1618505179/Test/Screenshot_2_ppirgk.png',
        github: 'https://github.com/EmanuelTejada032/fakenetflix',
        deployed: 'https://fakeflix-app.netlify.app/'
    }
]
