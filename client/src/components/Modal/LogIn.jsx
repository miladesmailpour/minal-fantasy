import React from "react";
import { MUTATION_LOGIN } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

function LogIn({formValues, setFormValues, setModalContent, setIsModalOpen}) {
  const [login, { loginError, loginData }] = useMutation(MUTATION_LOGIN);

  const handleLogIn = async (e) => {
    e.preventDefault();

    const { email, password } = formValues;

    try {
      const { data } = await login({
        variables: { email, password },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // Reset form fields
    setFormValues({
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      email: "",
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <h2 className="modal-title">Log in</h2>
      <form
        onSubmit={() => {
          handleLogIn();
        }}
        className="modal-form"
      >
        <div className="modal-form-group">
          <label htmlFor="email" className="modal-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="modal-input"
            placeholder="Enter your email"
            value={setFormValues.email}
            onChange={(e) => {
              setFormValues({
                email: e.target.value,
                ...formValues,
              });
            }}
            required
          />
        </div>
        <div className="modal-form-group">
          <label htmlFor="password" className="modal-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="modal-input"
            placeholder="Enter your password"
            value={setFormValues.password}
            onChange={(e) => {
              setFormValues({
                password: e.target.value,
                ...formValues,
              });
            }}
            required
          />
        </div>
        <div
          className="modal-form-group modal-links"
          style={{
            flexDirection: "row",
            marginTop: "1rem",
          }}
        >
          <button type="submit" className="modal-submit">
            Log in
          </button>
          <button
            type="button"
            className="modal-submit"
            onClick={() => {
              setModalContent('signup')
            }}
          >
            need account? sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default LogIn;
