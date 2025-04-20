import { motion } from "framer-motion";
import { textVariant2, textContainer } from "../utils/utils"; // Asegúrate de tener estos imports

// Definir las propiedades del componente
interface TypingTextProps {
  title: string;
  textStyles?: string; // `textStyles` es opcional
}

const TypingText: React.FC<TypingTextProps> = ({ title, textStyles = "" }) => {
  return (
    <motion.p
      variants={textContainer}
      className={` text-[16px] font-poppins text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;
