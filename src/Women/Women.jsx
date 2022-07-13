import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa'

import { Container, Wrapper } from "./Women.styles";

// Images
import image1 from "../Images/Female/female BW 1.jpg";
import image2 from "../Images/Female/female bw 3.jpg";
import image3 from "../Images/Female/female colored 1.jpg";
import image4 from "../Images/Female/females colored 2.jpg";
import image5 from "../Images/Female/female bw 2.jpg";

const item = {
  initial: {
    y: 200,
    opacity: 0,
  },
  final: {
    y: 0,
    opacity: 1,
  },
};

function Women() {
  return (
    <Wrapper>
      <Container>
        <div className="box box__1">
          <div className="box__inner">
            <div className="text__container">
              <motion.span
                variants={item}
                initial="initial"
                animate="final"
                transition={{ duration: 0.95, delay: 0.2 }}
              >
                Be free
              </motion.span>
              <motion.span
                variants={item}
                initial="initial"
                animate="final"
                transition={{ duration: 0.95, delay: 0.2 }}
              >
                Have fun Time
              </motion.span>
            </div>
            <motion.div
              className="image__container"
              variants={item}
              initial="initial"
              animate="final"
              transition={{ duration: 0.95, delay: 0.575 }}
            >
              <img src={image1} alt="Female model" />
            </motion.div>
          </div>
        </div>
        <div className="box box__2">
          <div className="box__inner">
            <div className="text__container">
              <motion.span
                variants={item}
                initial="initial"
                animate="final"
                transition={{ duration: 1.2, delay: 0.35 }}
              >
                01
              </motion.span>
            </div>
            <motion.div
              className="image__container"
              variants={item}
              initial="initial"
              animate="final"
              transition={{ duration: 1.2, delay: 0.485 }}
            >
              <img src={image2} alt="Female model" />
            </motion.div>
            <div className="text__container2">
              <motion.span
                variants={item}
                initial="initial"
                animate="final"
                transition={{ duration: 1.2, delay: 0.645 }}
              >
                New
              </motion.span>
              <motion.span
                variants={item}
                initial="initial"
                animate="final"
                transition={{ duration: 1.2, delay: 0.7 }}
              >
                2018
              </motion.span>
            </div>
          </div>
        </div>
        <div className="box box__3">
          <div className="box__inner">
            <motion.div
              className="image__container"
              variants={item}
              initial="initial"
              animate="final"
              transition={{ duration: 1.4, delay: 0.475 }}
            >
              <img src={image3} alt="Female model" />
            </motion.div>
          </div>
        </div>
        <div className="box box__4">
          <div className="box__inner">
            <motion.div className="image__container"
              variants={item} initial="initial" animate="final"
              transition = {{
                duration: 1.2,
                delay: .915,
              }}
            >
              <img src={image4} alt="Female model" />
            </motion.div>
            <div className="text__container2">
              <motion.small
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.2, delay: 2}}
              >View full collection</motion.small>
              <motion.span
                variants={item}
                initial="initial"
                animate="final"
                transition={{
                  duration: 0.8,
                  delay: 1.215,
                }}
              >
                Party
              </motion.span>
              <motion.span
                variants={item}
                initial="initial"
                animate="final"
                transition={{
                  duration: 0.8,
                  delay: 1.325,
                }}
              >
                Collection
              </motion.span>
              <motion.span
                variants={item}
                initial="initial"
                animate="final"
                transition={{
                  duration: 0.8,
                  delay: 1.425,
                }}
              >
                For
              </motion.span>
              <motion.span
                variants={item}
                initial="initial"
                animate="final"
                transition={{
                  duration: 0.8,
                  delay: 1.525,
                }}
              >
                PunkRock
              </motion.span>
            </div>
          </div>
        </div>
        <div className="box box__5">
          <div className="box__inner">
            <div className="text__container">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3, delay: 2.425 }}
              >
                Collaboration with Tory Lanez
              </motion.span>
            </div>
            <motion.div
              className="image__container"
              variants={item}
              initial="initial"
              animate="final"
              transition={{ duration: 1.3, delay: 0.995 }}
            >
              <img src={image5} alt="Female model" />
            </motion.div>
          </div>
        </div>
        <motion.div className="view"
          initial={{x: 170, opacity: 0}}
          animate={{x: 0, y: 200, opacity: 1}}
          // transition={{durati}}
          whileHover={{scale: 1.15}}
        ><span>View all Collections</span><FaArrowRight /></motion.div>
      </Container>
    </Wrapper>
  );
}

export default Women;
