"use client";

import styles from './login.module.css';

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit");
  };
  
  return (
    <article className={styles.login__container}>
      <h2 className={styles.login__title}>Hola. Ingresa tus credenciales</h2>
      <form className={styles.login__subcont} onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className={styles.login__input}
          required
        />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className={styles.login__input}
          required
        />
        <br />
        <input className={styles.login__btn} type="submit" value="Sign in" />
      </form>
    </article>
  );
};

export default Login;
