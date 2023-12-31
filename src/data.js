import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'


export const pageLinks = [
    {id:'1', href:'#home', text:'Home'},
    {id:'2', href:'#about', text:'About'},
    {id:'3', href:'#services', text:'Services'},
    {id:'4', href:'#tours', text:'Tours'},

]

export const socialLinks = [

    {id:1, href:'https://www.twitter.com', icon:'fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon:'fa-twitter'},
    {id:3, href:'https://www.twitter.com', icon:'fa-squarespace'},

]

export const services =[
    {id:1, icon:'fas fa-wallet fa-fw',title:'saving money',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:2, icon:'fas fa-tree fa-fw',title:'endless hiking',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:3, icon:'fas fa-socks fa-fw',title:'amazing comfort',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},

]

export const tours =[

    {
        id:1,
        image: tour1,
        tourdate:'august 26th, 2020',
        tourtitle:'Tibet Adventure',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        country:'china',
        duration:'6 days',
        price:'From $1400'

    },
    {
        id:2,
        image: tour2,
        tourdate:'august 20 2023',
        tourtitle:'Best of Java',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        country:'Indonasia',
        duration:'11 days',
        price:'From $1800'

    },
    {
        id:3,
        image:tour3,
        tourdate:'september 06th, 2023',
        tourtitle:'Explore Hongkong',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        country:'China',
        duration:'5 days',
        price:'From $2000'

    },
    {
        id:4,
        image:tour4,
        tourdate:'December 06th, 2023',
        tourtitle:'Kenya Safaris',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        country:'Kenya',
        duration:'15 days',
        price:'From $30000'

    }




]