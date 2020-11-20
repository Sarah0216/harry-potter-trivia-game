import "./Questions.scss";
import Header from "../../components/Header/Header";
import QuestionsUpper from "../../components/QuestionUpper/QuestionUpper";
import QuestionLower from "../../components/QuestionLower/QuestionLower";

const Questions = () => {
  return (
    <div>
      <Header />
      <QuestionsUpper />
      <QuestionLower />
    </div>
  );
};

export default Questions;
