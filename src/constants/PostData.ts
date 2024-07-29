import TheresaImage from '../assets/Ellipse 2.png'
import MarvinImage from '../assets/Ellipse 3.png'
import HeyImage from '../assets/Group(Hi).png'
import SadImage from '../assets/Group(sad).png'

interface UserProfile {
    name: string;
    image: string;
    text: string;
    textImg: string;
    comment: string;
    time: string;
  }


export const PostData:UserProfile[] = [
    {
      name: "Theresa Webb",
      image: TheresaImage,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      textImg:HeyImage,
      comment: "24 comments",
      time: "5mins ago",
    },
    {
      name: "Marvin McKinney",
      image: MarvinImage,
      textImg:SadImage,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comment: "18 comments",
      time: "8mins ago Edited",
    },
  ];