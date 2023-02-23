import {
  Animator,
  Fade,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
  MoveOut,
  StickyIn,
  FadeIn,
  ZoomIn,
  Move,
  MoveIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

const ReactMotion = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h2>Let me show you scroll animation😊</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <h2>Lets scroll out😎</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <h2>I'm FadeUp</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
        <div className="section-3">
          <h2>
            <Animator animation={MoveIn(-1000,0)}>Hello Guys✌️ </Animator>
            <Animator animation={MoveIn(1000, 0)}>How are you doing 😊 </Animator>
            <Animator animation={MoveOut(-1000, 0)}>Good night🥱 </Animator>
            <Animator animation={MoveOut(1000, 0)}>Bye😚 </Animator>
          </h2>
        </div>
      </ScrollPage>

      <ScrollPage page={3}>
        <Animator animation={batch(Fade(), Sticky())}>
            <h2>Done</h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default ReactMotion;
