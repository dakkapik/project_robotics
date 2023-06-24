import React from 'react';
import { BootstrapWrapper } from '../BootstrapWrapper/BootstrapWrapper';
import { Wrapper } from './AboutStyles';
import { Carousel, Button } from 'react-bootstrap';

function AboutBody() {
  return (
    <BootstrapWrapper>
      <Wrapper>
        <main>
          <Carousel id="myCarousel" className="mb-6">
            <Carousel.Item>
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                />
              </svg>
              <Carousel.Caption>
                <h1>Example headline.</h1>
                <p className="opacity-75">
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <Button variant="primary" size="lg" href="#">
                  Sign up today
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                />
              </svg>
              <Carousel.Caption>
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <Button variant="primary" size="lg" href="#">
                  Learn more
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                />
              </svg>
              <Carousel.Caption>
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <Button variant="primary" size="lg" href="#">
                  Browse gallery
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="container marketing">
            <div className="row">
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  />
                </svg>
                <h2 className="fw-normal">Heading</h2>
                <p>
                  Some representative placeholder content for the three columns
                  of text below the carousel. This is the first column.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#">
                    View details &raquo;
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  />
                </svg>
                <h2 className="fw-normal">Heading</h2>
                <p>
                  Another exciting bit of representative placeholder content.
                  This time, we've moved on to the second column.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#">
                    View details &raquo;
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  />
                </svg>
                <h2 className="fw-normal">Heading</h2>
                <p>
                  And lastly this, the third column of representative
                  placeholder content.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#">
                    View details &raquo;
                  </a>
                </p>
              </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                  First featurette heading.{' '}
                  <span className="text-body-secondary">
                    It’ll blow your mind.
                  </span>
                </h2>
                <p className="lead">
                  Some great placeholder content for the first featurette here.
                  Imagine some exciting prose here.
                </p>
              </div>
              <div className="col-md-5">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-bg)"
                  />
                  <text
                    x="50%"
                    y="50%"
                    fill="var(--bs-secondary-color)"
                    dy=".3em"
                  >
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">
                  Oh yeah, it's that good.{' '}
                  <span className="text-body-secondary">See for yourself.</span>
                </h2>
                <p className="lead">
                  Another featurette? Of course. More placeholder content here
                  to give you an idea of how this layout would work with some
                  actual real-world content in place.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-bg)"
                  />
                  <text
                    x="50%"
                    y="50%"
                    fill="var(--bs-secondary-color)"
                    dy=".3em"
                  >
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                  And lastly, this one.{' '}
                  <span className="text-body-secondary">Checkmate.</span>
                </h2>
                <p className="lead">
                  And yes, this is the last block of representative placeholder
                  content. Again, not really intended to be actually read,
                  simply here to give you a better view of what this would look
                  like with some actual content. Your content.
                </p>
              </div>
              <div className="col-md-5">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-bg)"
                  />
                  <text
                    x="50%"
                    y="50%"
                    fill="var(--bs-secondary-color)"
                    dy=".3em"
                  >
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider"></hr>
          </div>
          <script src="http://localhost:3000/assets/js/bootstrap.bundle.min.js"></script>
        </main>
      </Wrapper>
    </BootstrapWrapper>
  );
}

export default AboutBody;
