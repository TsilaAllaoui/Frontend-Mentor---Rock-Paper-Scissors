import "../styles/Rules.scss";
import rules from "../assets/images/image-rules.svg";
import close from "../assets/images/icon-close.svg";

const Rules = () => {
  const closeRules = () => {
    const rules = document.querySelector("#rules") as HTMLDialogElement;
    const rulesContainer = document.querySelector("#rules-container") as HTMLDivElement;
    rulesContainer.style.backdropFilter = "unset";
    rules.style.display = "none";
    rules.style.zIndex = "0";
    rulesContainer.style.zIndex = "-1";
    rulesContainer.style.height = "90%";
  };
  return (
    <div id="rules">
      <div id="heading">
        <p>RULES</p>
        <img src={close} alt="close" onClick={closeRules} />
      </div>
      <div id="rules-image">
        <img src={rules} alt="rules" />
      </div>
    </div>
  );
};

export default Rules;
