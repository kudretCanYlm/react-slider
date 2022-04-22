import { createContext } from "react";

const persons = [
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpdh_pMhmOzZYOzBQwJ45vrOwSevrYZkSEw&usqp=CAU",
        name: "Kudret Can1",
        subname: "Regular Guy",
        text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpdh_pMhmOzZYOzBQwJ45vrOwSevrYZkSEw&usqp=CAU",
        name: "Kudret Can2",
        subname: "Regular Guy",
        text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpdh_pMhmOzZYOzBQwJ45vrOwSevrYZkSEw&usqp=CAU",
        name: "Kudret Can3",
        subname: "Regular Guy",
        text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpdh_pMhmOzZYOzBQwJ45vrOwSevrYZkSEw&usqp=CAU",
        name: "Kudret Can4",
        subname: "Regular Guy",
        text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
    }, {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpdh_pMhmOzZYOzBQwJ45vrOwSevrYZkSEw&usqp=CAU",
        name: "Kudret Can5",
        subname: "Regular Guy",
        text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
    }
]

let PersonContext = createContext();

export { PersonContext,persons }