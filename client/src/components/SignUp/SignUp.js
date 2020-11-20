import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="sign-up">
      <form>
        <label htmlFor="nameInput">ENTER NAME HERE </label>
        <input
          className="sign-up__name"
          type="text"
          id="nameInput"
          name="name"
          placeholder="NAME"
        />
      </form>
    </div>
  );
};

export default SignUp;
