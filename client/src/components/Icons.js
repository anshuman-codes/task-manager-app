import { FaGooglePlusG, FaTwitter, FaLinkedin, FaCircle } from "react-icons/fa";
// import { useRef } from "react";

const Icons = () => {
  //   const container1 = useRef(null);
  //   const container2 = useRef(null);
  //   const container3 = useRef(null);

  //   const handleHover = (containerNumber) => {
  //     console.log(container1);
  //   };

  return (
    <div className="icon-list">
      <span>
        <FaCircle
          className="icon-circle-svg"
          textAnchor="middle"
          alignmentBaseline="middle"
          style={{
            fontSize: "2.8rem",
          }}
          //   ref={container1}
        />
        <a href="#">
          <FaGooglePlusG
            // onMouseEnter={handleHover(1)}
            textAnchor="middle"
            alignmentBaseline="middle"
            style={{
              fontSize: "1.5rem",
              position: "absolute",
              left: ".5em",
              bottom: ".6em",
              zIndex: "2",
              color: "white",
            }}
          />
        </a>
      </span>
      <span>
        <FaCircle
          className="icon-circle-svg"
          textAnchor="middle"
          alignmentBaseline="middle"
          style={{
            fontSize: "2.8rem",
          }}
          //   ref={container2}
        />
        <a href="#">
          <FaTwitter
            // onMouseEnter={handleHover(2)}
            textAnchor="middle"
            alignmentBaseline="middle"
            style={{
              fontSize: "1.5rem",
              position: "absolute",
              left: ".5em",
              bottom: ".6em",
              zIndex: "2",
              color: "white",
            }}
          />
        </a>
      </span>
      <span>
        <FaCircle
          className="icon-circle-svg"
          textAnchor="middle"
          alignmentBaseline="middle"
          style={{
            fontSize: "2.8rem",
          }}
          //   ref={container3}
        />
        <a href="#">
          <FaLinkedin
            // onMouseEnter={handleHover(3)}
            textAnchor="middle"
            alignmentBaseline="middle"
            style={{
              fontSize: "1.5rem",
              position: "absolute",
              left: ".5em",
              bottom: ".6em",
              zIndex: "2",
              color: "white",
            }}
          />
        </a>
      </span>
    </div>
  );
};

export default Icons;
