import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/about/styles/about.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';

function About() {
  const isMobile = useIsMobile();
  const rootRef = useRef();
  const animatedImageRef = useRef();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      gsap.set(animatedImageRef.current, { top: !isMobile ? '-20vw' : '0' });
      if (!isMobile) {
        gsap.to(animatedImageRef.current, {
          top: '20vw',
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            scroller: document?.querySelector('main'),
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation();
    return () => ctx.kill();
  }, [isMobile]);

  const renderImageContainer = () => (
    <div className={styles.imageContainer} style={{ display: 'none' }}>
      <Image priority src="/BrewWeb/front.webp" sizes="100%" fill alt="BrewWeb" />
    </div>
  );

  return (
    <section ref={rootRef} className={styles.root}>
      <div className={clsx(styles.nameContainer, 'layout-block-inner')}>
        <AppearTitle>
          <h1 className={clsx('h1', 'medium')}>Web & app development</h1>
          <h1 className={clsx('h1', 'medium')}>for startups and businesses</h1>
        </AppearTitle>
      </div>

      <div className={clsx(styles.container, 'layout-grid-inner')}>
        {isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapper)} ref={animatedImageRef}>
          <AppearTitle>
            <div className="p-l">We build production-ready applications,</div>
            <div className="p-l">landing pages, and AI-backed tools with</div>
            <div className="p-l">clean UI and reliable execution</div>
          </AppearTitle>
        </div>
        {!isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapperBottom)}>
          {!isMobile ? (
            <AppearTitle key="desktop-descWrapperBottom">
              <h6 className="h6">BrewWeb is a web and app development agency based in</h6>
              <h6 className="h6">Kolkata. We help startups, cafes, small businesses, and</h6>
              <h6 className="h6">early-stage companies build digital products that work.</h6>
              <h6 className="h6">Developer-led delivery with clear focus on performance</h6>
              <h6 className="h6">and usability.</h6>
            </AppearTitle>
          ) : (
            <AppearTitle key="mobile-descWrapperBottom">
              <h6 className="h6">BrewWeb is a web and app development agency based in Kolkata.</h6>
              <h6 className="h6">We help startups, cafes, small businesses, and early-stage companies</h6>
              <h6 className="h6">build digital products that work. Developer-led delivery with clear</h6>
              <h6 className="h6">focus on performance and usability.</h6>
            </AppearTitle>
          )}
          <div className={clsx(styles.buttonContainer)}>
            <ButtonLink href="/about" label="ABOUT US" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
