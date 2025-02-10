
import Jacket1 from "../public/images/jacket1.jpg";
import Jacket2 from "../public/images/jacket2.jpg";
import Jacket3 from "../public/images/jacket3.jpg";
import Jeans1 from "../public/images/jeans1.jpg";
import Jeans2 from "../public/images/jeans2.jpg";
import Jeans3 from "../public/images/jeans3.jpg";

export const slides = [
    {
        id: "jacket1",  // ✅ String id for consistency
        src: [Jacket1, Jacket2 , Jeans1 , Jeans3],
        title: "Slide Title Open",
        disc: "Jacket1",
        category :"Man"
    },
    {
        id: "jacket2",  
        src: [Jacket2, Jeans1, Jeans2, Jacket1],
        title: "Slide Title Open",
        disc: "Jacket2",
        category :"Man"
    },
    {
        id: "jacket3",  
        src: [Jacket3, Jeans2],
        title: "Slide Title Open",
        disc: "Jacket3",
        category :"Man"
    },
    {
        id: "jeans1",  // ✅ Added missing id
        src: [Jeans1, Jacket1 , Jacket3 , Jeans3],
        title: "Slide Title Open",
        disc: "Jeans1",
        category :"Man"
    },
    {
        id: "jeans2",  
        src: [Jeans2, Jacket2 , Jeans1 , Jacket1],
        title: "Slide Title Open",
        disc: "Jeans2",
        category :"Man"
    },
    {
        id: "jeans3",  
        src: [Jeans3, Jacket3, Jacket2 , Jacket1],
        title: "Slide Title Open",
        disc: "Jeans3",
        category :"Man"
    },

    // Woman Category
    {
        id: "jacket01",  // ✅ String id for consistency
        src: [Jeans2, Jacket2 , Jeans1 , Jeans3],
        title: "Slide Title Open",
        disc: "Jacket1",
        category :"Woman"
    },
    {
        id: "jacket02",  // ✅ String id for consistency
        src: [Jacket1, Jacket2 , Jeans1 , Jeans3],
        title: "Slide Title Open",
        disc: "Jacket1",
        category :"Woman"
    },

    // Kids Category

    {
        id: "jacket001",  // ✅ String id for consistency
        src: [Jacket3, Jacket2 , Jeans1 , Jeans3],
        title: "Slide Title Open",
        disc: "Jacket1",
        category :"Kids"
    },
    {
        id: "jeans002",  // ✅ String id for consistency
        src: [Jeans3, Jacket2 , Jeans1 , Jeans3],
        title: "Slide Title Open",
        disc: "Jacket1",
        category :"Kids"
    },


    
]