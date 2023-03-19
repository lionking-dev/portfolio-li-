
import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import { FaInternetExplorer, FaChalkboardTeacher, FaCameraRetro, FaPinterest, FaVideo, FaTabletAlt, FaRegNewspaper } from "react-icons/fa";

export const serviceIcons = (service) => {
    const serviceID = service.toLowerCase();
    switch (serviceID) {
        case 'marketing':
            return <BiShoppingBag />;
        case 'content writing':
            return <BiPencil />;
        case 'email marketing':
            return <AiOutlineMail />;
        case 'internet research':
            return <FaInternetExplorer />;
        case 'tutoring':
            return <FaChalkboardTeacher />;
        case 'web design':
            return <BsCodeSlash />;
        case 'photography':
            return <FaCameraRetro />;
        case 'pinterest virtual assistant':
            return <FaPinterest />;
        case 'video editing':
            return <FaVideo />;
        case 'data entry':
            return <BsClipboardData />;
        case 'ebook writing':
            return <FaTabletAlt />;
        case 'audio transcription':
            return <AiFillAudio />;
        case 'blog posting':
            return <FaRegNewspaper />;
    }
}