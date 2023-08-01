import { useContext } from "react";
import { LanguageContext } from "../../context/mainContext";
import { translations } from "../../context/translation";

const Section2 = () => {
  const { language } = useContext(LanguageContext);

  //   const handleLanguageChange = (selectedLanguage) => {
  //     changeLanguage(selectedLanguage);
  //   };

  const { title, titleTwo, titleThree, BtnStart, Email } =
    translations[language];

  return (
    <div className="text-overlay">
      <div className="textclass">
        <div className="text-1">
          <h1>{title}</h1>
          <p>{titleTwo}</p>
        </div>
        <div className="text-3">
          <p>{titleThree}</p>
        </div>
      </div>
      <div className="input-box">
        <div className="input-box-1">
          <input type="email" name="email" id="" placeholder={Email} />
        </div>
        <div className="btn">
          <button type="submit">
            <span>{BtnStart}</span>
            <div className="arrow-btn">
              <span dir="ltr" className="default-ltr-cache-s15e62 e1boxt2d0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-mirrorinrtl="true"
                  className="default-ltr-cache-0 e1mhci4z1"
                  data-name="ChevronRight"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
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
  );
};

export default Section2;
