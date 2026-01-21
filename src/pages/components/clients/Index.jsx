import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Clients</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2024</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Datawise</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">A data analytics platform that helps businesses</div>
            <div className="p-l">make informed decisions through intelligent</div>
            <div className="p-l">data visualization and reporting. We developed</div>
            <div className="p-l">a responsive dashboard with real-time metrics,</div>
            <div className="p-l">custom reporting tools, and seamless integration</div>
            <div className="p-l">with existing business systems for streamlined</div>
            <div className="p-l">data management and insights.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Datawise</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">A data analytics platform that helps businesses</div>
              <div className="p-l">make informed decisions through intelligent</div>
              <div className="p-l">data visualization and reporting. We developed</div>
              <div className="p-l">a responsive dashboard with real-time metrics,</div>
              <div className="p-l">custom reporting tools, and seamless integration</div>
              <div className="p-l">with existing business systems for streamlined</div>
              <div className="p-l">data management and insights.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Noir Cafe</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">A specialty café focused on serving premium beverages</div>
            <div className="p-l">made from carefully sourced imported coffee beans.</div>
            <div className="p-l">The website highlights their menu, ambience, and</div>
            <div className="p-l">location while making it easy for customers to</div>
            <div className="p-l">discover the café, view offerings, and get directions</div>
            <div className="p-l">through a clean, mobile-friendly landing page</div>
            <div className="p-l">designed to drive walk-ins.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Noir Cafe</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">A specialty café focused on serving premium beverages</div>
              <div className="p-l">made from carefully sourced imported coffee beans.</div>
              <div className="p-l">The website highlights their menu, ambience, and</div>
              <div className="p-l">location while making it easy for customers to</div>
              <div className="p-l">discover the café, view offerings, and get directions</div>
              <div className="p-l">through a clean, mobile-friendly landing page</div>
              <div className="p-l">designed to drive walk-ins.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Company 3</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">A growing e-commerce brand that needed a modern</div>
            <div className="p-l">online storefront with optimized checkout flow.</div>
            <div className="p-l">We built a fully responsive platform with product</div>
            <div className="p-l">catalog management, secure payment integration,</div>
            <div className="p-l">and inventory tracking to help them scale their</div>
            <div className="p-l">online presence and increase conversion rates</div>
            <div className="p-l">through better user experience.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Company 3</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">A growing e-commerce brand that needed a modern</div>
              <div className="p-l">online storefront with optimized checkout flow.</div>
              <div className="p-l">We built a fully responsive platform with product</div>
              <div className="p-l">catalog management, secure payment integration,</div>
              <div className="p-l">and inventory tracking to help them scale their</div>
              <div className="p-l">online presence and increase conversion rates</div>
              <div className="p-l">through better user experience.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
