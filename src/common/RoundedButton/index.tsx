import React from "react";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "../Magnetic";
import cn from "../../utils/cn";

interface RoundedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  children: React.ReactNode;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  children,
  backgroundColor = "#222222",
  ...attributes
}) => {
  const circle = useRef(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit",
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    !!timeline?.current && timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      !!timeline?.current && timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={cn(
          "border-[rgb(136,136,136)] relative flex cursor-pointer items-center justify-center rounded-[3em] border p-[15px_60px_15px_60px]",
        )}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
};

export default RoundedButton;
