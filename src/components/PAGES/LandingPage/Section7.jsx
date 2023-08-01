import React, { useEffect, useState } from "react";
import $ from "jquery";

const Section7 = () => {
  const [activeDiv, setActiveDiv] = useState(null);

  const handleRotate = (divId) => {
    if (divId === activeDiv) {
      setActiveDiv(null);
    } else {
      setActiveDiv(divId);
    }
  };
  //-----------------
  useEffect(() => {
    $(document).on("click", ".expandable-div", function (event) {
      const $this = $(this);
      const $content = $this.find(".expandable-div-content");

      // const $svg = $this.find(".rotate-svg");

      if ($this.hasClass("expanded")) {
        $content.slideUp(100);
        $this.removeClass("expanded");
      } else {
        $(".expanded .expandable-div-content").slideUp(100);
        $(".expanded").removeClass("expanded");
        // Expand the clicked div
        $content.slideToggle(100);
        $this.addClass("expanded");
        $this.addClass("rotate-svg");
      }

      event.stopPropagation();
    });

    // Clean up the event listener when the component unmounts
    return () => {
      $(document).off("click", ".expandable-div");
    };
  }, []);

  return (
    <div className="section-7-parts">
      <div className="head">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="mid">
        <div className="question">
          <div>
            <div
              className="expandable-div"
              onClick={() => handleRotate("div1")}
            >
              <div className="saperator">
                <h2>What is Netflix?</h2>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{
                      transform: `rotate(${activeDiv === "div1" ? 45 : 0}deg)`,
                    }}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="rotate-svg"
                    data-name="Plus"
                    alt=""
                    onClick={() => handleRotate("div1")}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className="expandable-div-content"
                style={{ display: "none" }}
              >
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.
                </p>
                <p>
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="question">
          <div>
            <div
              className="expandable-div"
              onClick={() => handleRotate("div2")}
            >
              <div className="saperator">
                <h2>How much does Netflix cost?</h2>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{
                      transform: `rotate(${activeDiv === "div2" ? 45 : 0}deg)`,
                    }}
                    onClick={() => handleRotate("div2")}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="rotate-svg"
                    data-name="Plus"
                    alt=""
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className="expandable-div-content"
                style={{ display: "none" }}
              >
                <p>This is the information that will be shown when expanded.</p>
                <p>You can add more content here as needed.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="question">
          <div>
            <div
              className="expandable-div"
              onClick={() => handleRotate("div3")}
            >
              <div className="saperator">
                <h2>Where can I watch?</h2>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{
                      transform: `rotate(${activeDiv === "div3" ? 45 : 0}deg)`,
                    }}
                    onClick={() => handleRotate("div3")}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="rotate-svg"
                    data-name="Plus"
                    alt=""
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className="expandable-div-content"
                style={{ display: "none" }}
              >
                <p>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </p>
                <p>
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="question">
          <div>
            <div
              className="expandable-div"
              onClick={() => handleRotate("div4")}
            >
              <div className="saperator">
                <h2>How do I cancel?</h2>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{
                      transform: `rotate(${activeDiv === "div4" ? 45 : 0}deg)`,
                    }}
                    onClick={() => handleRotate("div4")}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="rotate-svg"
                    data-name="Plus"
                    alt=""
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className="expandable-div-content"
                style={{ display: "none" }}
              >
                <p>
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="question">
          <div>
            <div
              className="expandable-div"
              onClick={() => handleRotate("div5")}
            >
              <div className="saperator">
                <h2>What can I watch on Netflix?</h2>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{
                      transform: `rotate(${activeDiv === "div5" ? 45 : 0}deg)`,
                    }}
                    onClick={() => handleRotate("div5")}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="rotate-svg"
                    data-name="Plus"
                    alt=""
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className="expandable-div-content"
                style={{ display: "none" }}
              >
                <p>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="question">
          <div>
            <div
              className="expandable-div"
              onClick={() => handleRotate("div6")}
            >
              <div className="saperator">
                <h2>Is Netflix good for kids?</h2>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{
                      transform: `rotate(${activeDiv === "div6" ? 45 : 0}deg)`,
                    }}
                    onClick={() => handleRotate("div6")}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="rotate-svg"
                    data-name="Plus"
                    alt=""
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className="expandable-div-content"
                style={{ display: "none" }}
              >
                <p>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.
                </p>
                <p>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="email-section">
          <div className="email">
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Email  address"
            />
          </div>
          <div className="btn">
            <button type="submit">
              <span>Get Started</span>
              <div className="arrow">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-mirrorinrtl="true"
                    class="default-ltr-cache-0 e1mhci4z1"
                    data-name="ChevronRight"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
