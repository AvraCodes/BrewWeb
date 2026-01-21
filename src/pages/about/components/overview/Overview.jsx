import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">A developer-led agency</h3>
            <h3 className="h3">
              focused on <span className="medium">reliable</span>
            </h3>
            <h3 className="h3">
              <span className="medium">execution,</span> clear communication,
            </h3>
            <h3 className="h3">
              and <span className="medium">production-ready</span> solutions.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">A developer-led agency focused on</h3>
            <h3 className="h3">
              <span className="medium">reliable execution,</span> clear communication,
            </h3>
            <h3 className="h3">
              and <span className="medium">production-ready</span> solutions.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>About the founders</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">BrewWeb is a web and app development agency based in Kolkata, founded by</h6>
            <h6 className="h6">full-stack developers Avra Paul and Nomesh Singh. We build production-ready</h6>
            <h6 className="h6">applications, landing pages, and dashboards for startups, cafes, small</h6>
            <h6 className="h6">businesses, and early-stage companies.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Avra Paul is a full-stack developer with experience building web applications,</h6>
            <h6 className="h6">landing pages, and AI-integrated systems. He focuses on clean architecture,</h6>
            <h6 className="h6">user experience, and delivery.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Nomesh Singh is a full-stack developer specializing in production-ready</h6>
            <h6 className="h6">applications, dashboards, and backend systems. He prioritizes performance,</h6>
            <h6 className="h6">scalability, and maintainable code.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Together, we deliver developer-led solutions with clear communication</h6>
            <h6 className="h6">and a focus on business outcomes.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Our work:</h6>
            <h6 className="h6">• Noir Cafe - A specialty café website showcasing premium imported</h6>
            <h6 className="h6">coffee beans, menu, and location with a mobile-friendly design</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>• Datawise - A data analytics platform with real-time dashboards,</h6>
            <h6 className="h6">custom reporting, and seamless business system integration</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">BrewWeb is a web and app development agency based in Kolkata,</h6>
            <h6 className="h6">founded by full-stack developers Avra Paul and Nomesh Singh.</h6>
            <h6 className="h6">We build production-ready applications, landing pages, and</h6>
            <h6 className="h6">dashboards for startups, cafes, small businesses, and early-stage companies.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Avra Paul is a full-stack developer with experience building web</h6>
            <h6 className="h6">applications, landing pages, and AI-integrated systems. He focuses</h6>
            <h6 className="h6">on clean architecture, user experience, and delivery.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Nomesh Singh is a full-stack developer specializing in</h6>
            <h6 className="h6">production-ready applications, dashboards, and backend systems.</h6>
            <h6 className="h6">He prioritizes performance, scalability, and maintainable code.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Together, we deliver developer-led solutions with clear</h6>
            <h6 className="h6">communication and a focus on business outcomes.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Our work:</h6>
            <h6 className="h6">• Noir Cafe - A specialty café website showcasing premium</h6>
            <h6 className="h6">imported coffee beans, menu, and location with a mobile-friendly design</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>• Datawise - A data analytics platform with real-time</h6>
            <h6 className="h6">dashboards, custom reporting, and seamless business system integration</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
