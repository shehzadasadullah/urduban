import React from "react";

function WordSection() {
  const welcomeWords = [
    "Welcoming",
    "Well",
    "Wellness",
    "Welcomes",
    "Welcomed",
    "Welcome mat",
    "Welcoming",
    "Well",
    "Wellness",
    "Welcomes",
    "Welcomed",
    "Welcome mat",
  ];

  return (
    <>
      <div className="ws-wrapper">
        <div className="ws-div1">
          <div className="text-left-eng-heading">
            <div className="text-left-eng-heading-inner">Verb: welcome</div>
          </div>
          <div className="text-left-eng">
            <div className="text-left-eng-inner">
              greet, salute, receive, meet, embrace, fete, usher in, greet,
              salute, receive, meet, embrace, fete, usher in
            </div>
          </div>
          <div className="text-right-urdu">
            <div className="text-right-urdu-inner">
              سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا، آگہی
              کرنا، سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا،
              گلے لگانا، اندر داخل ہونا۔
            </div>
          </div>
          <div className="text-left-eng-heading">
            <div className="text-left-eng-heading-inner">
              Adjective: welcome
            </div>
          </div>
          <div className="text-left-eng">
            <div className="text-left-eng-inner">
              wanted, appreciated, popular, desireable, accepted, acceptable,
              pleasing, agreeable, gratifying, heartening, promising
            </div>
          </div>
          <div className="text-right-urdu">
            <div className="text-right-urdu-inner">
              چاہتا تھا، تعریف کی، مقبول، خواہش مند، قابل قبول، قابل قبول،
              خوشگوار، راضی، اطمینان بخش، حوصلہ افزائی، وعدہ
            </div>
          </div>
          <div className="text-left-eng-heading">
            <div className="text-left-eng-heading-inner">Noun: welcome</div>
          </div>
          <div className="text-left-eng">
            <div className="text-left-eng-inner">
              greetings, salutation, hail, welcoming, reception, warm reception,
              favourable reception, acceptance, hospitality, red carpet,
            </div>
          </div>
          <div className="text-right-urdu">
            <div className="text-right-urdu-inner">
              سلام، سلام، اولے، استقبال، استقبال، استقبال، گرم استقبال، سازگار
              استقبال، قبولیت، مہمان نوازی، سرخ قالین،
            </div>
          </div>
        </div>
        <div className="ws-div2">
          <div className="download-wrapper">
            <div className="download-header">
              <div style={{ padding: "10px" }}>Download Our Mobile App!</div>
            </div>
            <div className="download-section">
              <div style={{ padding: "10px", objectFit: "contain" }}>
                <img
                  src="/public/images/apple_download.png"
                  alt="Image"
                  loading="lazy"
                  style={{
                    height: "100%",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div style={{ padding: "10px", objectFit: "contain" }}>
                <img
                  src="/public/images/google_download.png"
                  alt="Image"
                  loading="lazy"
                  style={{
                    height: "100%",
                    width: "100%",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          >
            <img
              src="/public/images/mail_image.png"
              alt="Image"
              loading="lazy"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="automate-text">Want to automate your emails?</div>
          <div className="cta-button">TRY IT FOR FREE</div>
          <div className="other-words-wrapper">
            <div className="other-words-header">Other Words!</div>
            <div className="other-words-section">
              {welcomeWords.map((item) => (
                <>
                  <div className="other-word">{item}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="common-words-wrapper">
        <div className="cw-header">
          <div className="cw-heading">Most Common Words:</div>
          <div className="cw-arrows">
            <div className="cw-arrow1">
              <img
                src="/public/images/arrow_left.png"
                alt="Arrow"
                loading="lazy"
                style={{ height: "8pt" }}
              />
            </div>
            <div className="cw-arrow2">
              <img
                src="/public/images/arrow_right.png"
                alt="Arrow"
                loading="lazy"
                style={{ height: "8pt" }}
              />
            </div>
          </div>
        </div>
        <div className="cw-section">
          <div className="cw-content-wrapper">
            <div className="cwc-cross">
              <img
                src="/public/images/cross.png"
                alt="Arrow"
                loading="lazy"
                style={{ height: "8pt" }}
              />
            </div>
            <div className="cwc-eng">you’re welcome</div>
            <div className="cwc-urdu">خوش آمدید</div>
          </div>
          <div className="cw-content-wrapper">
            <div className="cwc-cross">
              <img
                src="/public/images/cross.png"
                alt="Arrow"
                loading="lazy"
                style={{ height: "8pt" }}
              />
            </div>
            <div className="cwc-eng">you’re welcome</div>
            <div className="cwc-urdu">خوش آمدید</div>
          </div>
          <div className="cw-content-wrapper">
            <div className="cwc-cross">
              <img
                src="/public/images/cross.png"
                alt="Arrow"
                loading="lazy"
                style={{ height: "8pt" }}
              />
            </div>
            <div className="cwc-eng">you’re welcome</div>
            <div className="cwc-urdu">خوش آمدید</div>
          </div>
          <div className="cw-content-wrapper">
            <div className="cwc-cross">
              <img
                src="/public/images/cross.png"
                alt="Arrow"
                loading="lazy"
                style={{ height: "8pt" }}
              />
            </div>
            <div className="cwc-eng">you’re welcome</div>
            <div className="cwc-urdu">خوش آمدید</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WordSection;
