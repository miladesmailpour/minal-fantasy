import React from 'react'
import { MUTATION_ADDUSER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

function SignUp({
  formValues,
  setFormValues,
  setModalContent,
  setIsModalOpen
}) {

  const [signUp, { signUpError, signUpData }] = useMutation(MUTATION_ADDUSER);
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formValues;
    console.log(firstName, lastName, email, password);
    try {
      const { data } = await signUp({
        variables: { firstName, lastName, email, password },
      });
      console.log(data.createUser);
      Auth.login(data.createUser.token);
      setIsModalOpen(false);
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <>
    <h2 className="modal-title">Sign up</h2>
    <form
      onSubmit={handleSignUp}
      className="modal-form"
    >
      <div className="modal-form-group">
        <label htmlFor="firstName" className="modal-label">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="modal-input"
          placeholder="Enter your first name"
          value={formValues.firstName}
          onChange={(e) => {
            setFormValues({
              firstName: e.target.value,
              ...formValues,
            });
          }}
          required
        />
      </div>
      <div className="modal-form-group">
        <label htmlFor="lastName" className="modal-label">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="modal-input"
          placeholder="Enter your last name"
          value={formValues.lastName}
          onChange={(e) => {
            setFormValues({
              lastName: e.target.value,
              ...formValues,
            });
          }}
          required
        />
      </div>
      <div className="modal-form-group">
        <label htmlFor="userName" className="modal-label">
          User Name
        </label>
        <input
          type="text"
          id="userName"
          className="modal-input"
          placeholder="Enter your desired user name"
          value={formValues.userName}
          onChange={(e) => {
            setFormValues({
              userName: e.target.value,
              ...formValues,
            });
          }}
          required
        />
      </div>
      <div className="modal-form-group">
        <label htmlFor="email" className="modal-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="modal-input"
          placeholder="Enter your email"
          value={formValues.email}
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
          value={formValues.password}
          onChange={(e) => {
            setFormValues({
              password: e.target.value,
              ...formValues,
            });
          }}
          required
        />
      </div>
    </form>
    <div
      className="modal-form-group modal-links"
      style={{
        flexDirection: "row",
        marginTop: "1rem",
      }}
    >
      <button type="submit" className="modal-submit">
        Sign up
      </button>
      <button
        type="button"
        className="modal-submit"
        onClick={() => {
          setModalContent('login');
        }}
      >
        Back to Log In
      </button>
    </div>
  </>
  )
}

export default SignUp