import styles from "./../styles/index.module.css";
import Link from "next/link";
function HomePage() {
  return (
    <div className={styles.root}>
      {/* <a href="/">
      <img
        className="navbar-logo"
        src="/static/media/logo-full.9c024bb5.svg"
        alt="joel"
      />
    </a> */}
      <nav className={styles.navbar}>
        <Link className="link" href="/">
          HOME
        </Link>
        <Link className="link" href="/projects">
          PROJECTS
        </Link>
        <Link className="link" href="/blogs">
          BLOG
        </Link>
        <Link className="link" href="/contact">
          CONTACT
        </Link>
      </nav>
      <div className={styles.Home_container}>
        <div className={styles.Home_profile}>
          <h1 className={styles.Home_profile__name}>Joel Antony Joy</h1>
          <h3 className={styles.Home_profile__role}>
            Software Engineer / Full Stack Developer
          </h3>
          <a
            className={styles.Home_profile__resume}
            download=""
            aria-label="Download Joel's Resume"
            href="/Resume/Joel_Antony_Joy_Resume.pdf"
            target="_blank"
          >
            Download Resume
          </a>
          <a
            className={styles.Home_profile__hireme}
            href="mailto:joelantonyjoy@gmail.com?Subject=Software Engineer opportunity at [ Your company ]&amp;body=Hi Joel,%0d%0a%0d%0aHope you are doing well 😊%0d%0a%0d%0aI would like to schedule a meeting to discuss opportunities at [ Your Company ] for the role of Software Engineer. %0d%0a%0d%0aRegards, %0d%0a[ Your good name ] "
          >
            Hire Me
          </a>
        </div>
        {/* <div className="Home_social_media__sSdZl">
      <a
        href="https://www.instagram.com/i.joel_antony_joy"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="insta" src="/static/media/instagram-logo.9bfeb37f.svg" />
      </a>
      <a
        href="https://www.linkedin.com/in/joelantonyjoy"
        rel="noreferrer"
        target="_blank"
      >
        <img
          alt="linkedin"
          src="/static/media/linkedin-logo.fc5495d1.svg"
        />
      </a>
      <a
        href="https://github.com/joelantonyjoy"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="github" src="/static/media/github-logo.e5e4711b.svg" />
      </a>
    </div> */}
      </div>
    </div>
  );
}

export default HomePage;
