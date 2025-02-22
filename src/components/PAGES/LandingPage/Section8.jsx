import React ,{useContext , useRef , useState , useEffect} from "react";
import { LanguageContext } from "../../context/mainContext";
import { translations } from "../../context/translation";

const Section8 = () => {

  const langSelect = useRef(null);
  const [isClicked, setIsCliked] = useState(false);

  const handleclic = () => {
    setIsCliked(true);
    // langSelect.current.style.border = "2px solid white";
  };

  const handleOutsideClick = (event) => {
    if (langSelect.current && !langSelect.current.contains(event.target)) {
      setIsCliked(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  useEffect(() => {
    langSelect.current.style.border = isClicked
      ? "2px solid white"
      : "1px solid rgb(151, 141, 141)";
  }, [isClicked]);

  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
  };

  // const { signIn } = translations[language];


  return (
    <div className="section-8-parts">
      <div className="head-8">
        <p>
          Questions? Call <span className="call"> 000-800-919-1694</span>
        </p>
      </div>
      <div className="list">
        <ul>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Help Centre</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/">Media Centre</a>
          </li>
          <li>
            <a href="/">Investor Relations</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/">Cookie Preference</a>
          </li>
          <li>
            <a href="/">Ways to Watch</a>
          </li>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Corporate Information</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Speed Test</a>
          </li>
          <li>
            <a href="/">Legal Notices</a>
          </li>
          <li>
            <a href="/">Only on Netflix</a>
          </li>
        </ul>
      </div>
      <div className="lang-8">
        <div className="lang" ref={langSelect} onClick={handleclic}>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-0 e1mhci4z1"
              data-name="Globe"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <select
            name=""
            id=""
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
      </div>
      <p>Netflix India</p>
    </div>
  );
};

export default Section8;
