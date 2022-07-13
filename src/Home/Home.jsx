import { motion } from "framer-motion";
import { Wrapper, Container } from "./Home.styles";
import HeroImg from "../Images/Hero/hero.jpg";

// const animationConfiguration = {
//   initial: {
//     initial: {opacity: 0}
//   },
//   final: {
//     opacity: 1,
//     transition: {
//       type: 'Spring',
//       delay: 0.5,
//     }
//   },
// };

const item = {
  initial: {
    x: 400,
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    
  },
};

function Home() {
  return (
    <Wrapper>
      <Container>
        <div className="hero__text">
          <motion.div className="hero__text-inner"
            // variants={animationConfiguration}
            // initial='initial'
            // animate='final'
          >
            <motion.span variants={item} initial="initial" animate="final"
              transition = {{
                duration: .8,
                delay: .215,
              }}
            >
              Collection
            </motion.span>
            <motion.span variants={item} initial="initial" animate="final"
              transition = {{
                duration: .8,
                delay: .315,
              }}
            >
              For
            </motion.span>
            <motion.span variants={item} initial="initial" animate="final"
              transition = {{
                duration: .8,
                delay: .415,
              }}
            >
              Children
            </motion.span>
            <motion.span variants={item} initial="initial" animate="final"
              transition = {{
                duration: .8,
                delay: .515,
              }}
            >
              And
            </motion.span>
            <motion.span variants={item} initial="initial" animate="final"
              transition = {{
                duration: .8,
                delay: .615,
              }}
            >
              Families
            </motion.span>
          </motion.div>
        </div>
        <div className="hero__image">
          <div className="hero__image-container">
            <motion.div
              className="blind"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 1 }}
            ></motion.div>
            <img src={HeroImg} alt="Hero" />
          </div>
        </div>
        <div className="hero__link">
          <div className="hero__link-container">
            <motion.span 
              initial={{y: 50, opacity: 0}}
              animate={{y:0, opacity: 1}}
              transition={{duration: 1}}
            >Shop all</motion.span>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Home;
