import "../styles/Rules.scss";
import rules from "../assets/images/image-rules.svg";
import close from "../assets/images/icon-close.svg";

const Rules = () => {
  const closeRules = () => {
    const rules = document.querySelector("#rules") as HTMLDialogElement;
    rules.style.display = "none";
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
