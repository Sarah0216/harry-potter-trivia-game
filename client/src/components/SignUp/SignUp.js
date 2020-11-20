import "./SignUp.scss";

const SignUp = ({ onSignupSubmit }) => {
  const handleSubmit = (e) => {
    onSignupSubmit(e);
    e.target.reset();
  };
  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">ENTER NAME HERE </label>
        <input
          className="sign-up__name"
          type="text"
          id="nameInput"
          name="name"
          placeholder="NAME"
        />
        <button className="sign-up__button">ENTER</button>
      </form>
    </div>
  );
};

export default SignUp;
