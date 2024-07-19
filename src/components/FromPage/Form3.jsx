import "../FromPage/FormStyle.css";

const Form3 = () => {
  return (
    <form>
      <label className="form-label">Your Name</label>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="form-control"
        id="exampleInputPassword1"
      />
      <label className="form-label">Email address</label>
      <input
        type="email"
        placeholder="Enter My Email-id"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <label>Message</label>
      <textarea placeholder="Type your meassage here" />
      <button type="submit" className="btn ">
        Submit
      </button>
    </form>
  );
};

export default Form3;
