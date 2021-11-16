import { useRouter } from "next/dist/client/router";
import { useRef, useState } from "react";

function LoginForm() {
  const [isInvalid, setIsInvalid] = useState(false);
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const router = useRouter();
  function loginHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPass = passInputRef.current.value;
    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredPass ||
      enteredPass.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    router.push("/");
  }
  return (
    <section className="mt-80 text-center m-auto  w-80">
      <form class="w-full max-w-sm" onSubmit={loginHandler}>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="email"
              ref={emailInputRef}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              ref={passInputRef}
            />
          </div>
        </div>
        {isInvalid && <p className="text-red-500 mb-5">Please enter a valid email address and password!</p>}
        <div class="md:flex md:items-center">
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
