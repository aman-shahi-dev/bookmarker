import { Link } from "react-router-dom";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User logged in successfully ✅");
  };

  return (
    <div className="flex max-w-2xl w-full flex-col flex-1 md:flex-row border border-neutral-700 rounded-2xl">
      <div className="relative w-full md:w-1/2">
        <div className="absolute w-full py-4 md:py-6 flex items-center justify-center font-nabla text-xl md:text-2xl animate-pulse">
          Login
        </div>
        <img
          src="https://images.unsplash.com/photo-1495909617868-3fda03e184ef?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-2xl rounded-b-none md:rounded-r-none w-full h-full"
        />
      </div>
      <div className="rounded-2xl rounded-t-none md:rounded-t-2xl md:rounded-l-none flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="md:text-2xl text-lg mb-4 md:mb-10 text-black/40 text-shadow-sm text-shadow-amber-300">
          Fill the details below
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:gap-6 w-full"
        >
          <input
            type="email"
            placeholder="Email"
            required
            className="py-2 px-6 rounded-full placeholder:text-neutral-500 focus:scale-103 focus:shadow-[0px_0px_20px_rgba(255,255,255,1)]  transition duration-300 focus:outline-none bg-amber-400 text-black  w-full"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="py-2 px-6 rounded-full placeholder:text-neutral-500 focus:scale-103 focus:shadow-[0px_0px_20px_rgba(255,255,255,1)]  transition duration-300 focus:outline-none bg-amber-400 text-black  w-full"
          />
          <button
            type="submit"
            className="mt-2 md:mt-4 px-6 cursor-pointer active:scale-95 hover:bg-linear-to-l hover:from-black hover:via-amber-300 hover:to-black transition duration-300 py-2 w-fit mx-auto rounded-full bg-linear-to-r from-amber-400 via-black to-amber-300 text-shadow-sm text-shadow-amber-300 hover:text-black"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center w-full mt-4 md:mt-6 gap-4">
          <h1 className="md:text-lg text-sm text-amber-300 text-shadow-xs text-shadow-white">
            Don't have an account?
          </h1>
          <Link
            to="/signup"
            className="bg-linear-to-br from-amber-300 via-black to-amber-300 hover:from-black hover:via-amber-300 hover:to-black rounded-full active:scale-95 transition duration-300 text-sm hover:text-black text-neutral-300 px-4 py-2 text-shadow-sm text-shadow-amber-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
