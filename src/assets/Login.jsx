function Login() {
  const cardsize = {
    width: "18 rem",
  };

  return (
    <div className="card border-info mb-3" style={cardsize}>
      <div className="card-header">Logg inn</div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Epost"
            />
            <label htmlFor="floatingInputGroup1">Epost</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-key"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
              <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </span>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Passord"
            />
            <label htmlFor="floatingInputGroup1">Passord</label>
          </div>
        </div>

        <button className="btn btn-primary">Logg inn</button>
        <hr></hr>
        <p>
          <a
            href="#"
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Glemt passord?
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
