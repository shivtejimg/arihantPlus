import { useEffect, useRef, useState } from "react";
import student1 from "../../assets/img/student1.png";
import student2 from "../../assets/img/student2.png";
import student3 from "../../assets/img/student3.png";
import circle from "../../assets/img/circle.png";

const ArihantPlusMasterClassAnimation = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let currentPosition = 0;

    function removeClasses(element, classes) {
      classes.forEach((cls) => element.classList.remove(cls));
    }

    function addClass(element, cls) {
      element.classList.add(cls);
    }

    function updatePositions() {
      currentPosition = (currentPosition % 3) + 1;

      for (let i = 1; i <= 3; i++) {
        let box = document.querySelector(`.anim-box-${i}`);
        let student = document.querySelector(`.anim-student-${i}`);

        if (box && student) {
          removeClasses(box, [
            `anim-box-${i}-position-1`,
            `anim-box-${i}-position-2`,
            `anim-box-${i}-position-3`,
          ]);
          addClass(box, `anim-box-${i}-position-${currentPosition}`);

          removeClasses(student, [
            `anim-student-${i}-position-1`,
            `anim-student-${i}-position-2`,
            `anim-student-${i}-position-3`,
          ]);
          addClass(student, `anim-student-${i}-position-${currentPosition}`);
        }
      }
    }

    let boxesAndCircles = document.querySelectorAll(
      ".anim-box-1, .anim-box-2, .anim-box-3, .anim-circle-1, .anim-circle-2"
    );
    boxesAndCircles.forEach((el) => {
      el.classList.add("anim-hidden");
    });

    if (isInView) {
      // Show student 2, student 3, circle 1, and circle 2 with delay
      const delayedElements = document.querySelectorAll(
        ".anim-student-2, .anim-student-3"
      );

      delayedElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.remove(`anim-hidden-behind-student-${index + 2}`);
          el.classList.add("anim-show");
        }, 400); // Delay each by 400ms
      });

      setTimeout(() => {
        let students = document.querySelectorAll(
          ".anim-student-1, .anim-student-2, .anim-student-3"
        );
        students.forEach((student, index) => {
          removeClasses(student, [`anim-student-${index + 1}-position-0`]);
          addClass(student, `anim-student-${index + 1}-position-1`);
        });

        boxesAndCircles.forEach((el) => {
          el.classList.remove("anim-hidden");
        });
        updatePositions();
        setInterval(updatePositions, 2200);
      }, 1600);
    }

    return () => {
      clearInterval(updatePositions);
    };
  }, [isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="container-fluid" ref={sectionRef}>
      <div className="row">
        <main className="col-12 my-5">
          <div className="anim-container">
            <img
              className="anim-p-absolute-transition anim-student-1 anim-student-1-position-1"
              src={student1}
            />
            <img
              className="anim-p-absolute-transition anim-student-2 anim-student-2-position-1 anim-hidden-behind-student-2"
              src={student2}
            />
            <img
              className="anim-p-absolute-transition anim-student-3 anim-student-3-position-1 anim-hidden-behind-student-3"
              src={student3}
            />
            <img
              className="anim-p-absolute-transition anim-circle-1 anim-circle-1-position"
              src={circle}
            />
            <img
              className="anim-p-absolute-transition anim-circle-2 anim-circle-2-position"
              src={circle}
            />
            <img
              className="anim-p-absolute-transition anim-box-1 anim-box-1-position-1"
              src="https://admin.examwitharihant.com/static/images/animation2/box-1.svg"
            />
            <img
              className="anim-p-absolute-transition anim-box-2 anim-box-2-position-1"
              src="https://admin.examwitharihant.com/static/images/animation2/box-2.svg"
            />
            <img
              className="anim-p-absolute-transition anim-box-3 anim-box-3-position-1"
              src="https://admin.examwitharihant.com/static/images/animation2/box-3.svg"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ArihantPlusMasterClassAnimation;
