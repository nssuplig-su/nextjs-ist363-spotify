import Col from "../../layout/Col";
import Container from "../../layout/Container";
import Row from "../../layout/Row";

import styles from "./Showcase.module.scss";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <div className={styles.showcase__images}> Image goes here </div>
      <div className={styles.showcase__content}>
        <Container>
          <Row alignItems="flex-end" paddingBottom={2}>
            <Col md={1}>
              <span className={styles.showcase__counter}>01/10</span>
            </Col>
            <Col md={5}>
              <span className={styles.showcase__number}>1</span>
            </Col>

            <Col md={6}>
              <h2 className={styles.showcase__artist}>Taylor Swift</h2>
            </Col>
          </Row>
          <Row paddingBottom={2} paddingTop={2}>
            <Col md={1}>Controls</Col>
            <Col md={5}>Latest releases</Col>
            <Col md={6}>Call to action buttons</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Showcase;
