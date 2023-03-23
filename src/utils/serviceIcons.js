
import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData, } from "react-icons/bs";
import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import { DiRuby, DiAws, DiDjango, DiJavascript, DiWebplatform } from "react-icons/di";
import { FaHtml5, FaReact, FaVuejs, FaPython, FaWordpress, FaInternetExplorer, FaChalkboardTeacher, FaCameraRetro, FaPinterest, FaVideo, FaTabletAlt, FaRegNewspaper } from "react-icons/fa";

export const serviceIcons = (service) => {
    const serviceID = service.toLowerCase();
    switch (serviceID) {
        case 'html':
            return <FaHtml5 />;
        case 'react':
            return <FaReact />;
        case 'email marketing':
            return <AiOutlineMail />;
        case 'ruby on rails':
            return <DiRuby />;
        case 'vue':
            return <FaVuejs />;
        case 'python':
            return <FaPython />;
        case 'aws':
            return <DiAws />;
        case 'django':
            return <DiDjango />;
        case 'javascript':
            return <DiJavascript />;
        case 'chaptgpt':
            return <BsClipboardData />;
        case 'ebook writing':
            return <FaTabletAlt />;
        case 'wordpress':
            return <FaWordpress />;
        case 'webflow':
            return <DiWebplatform />;
    }
}