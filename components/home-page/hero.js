import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.png"
          alt="My picture"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi, I'm Milos</h1>
      <p>
        I love blogs about web develepment - especialy frontend library like
        React.
      </p>
    </section>
  );
};

export default Hero;
