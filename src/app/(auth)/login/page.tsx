import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-full flex justify-center">
        <span className="text-xl text-gray-700 font-medium text-center">
          <span className="text-primary">Meet professionals</span> working
          secretely <br />
          working in your backyard.
        </span>
      </div>

      <div className="col-span-6">
        <Label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-700"
        >
          {" "}
          Email{" "}
        </Label>

        <Input
          type="email"
          id="Email"
          name="email"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6">
        <Label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-700"
        >
          {" "}
          Password{" "}
        </Label>

        <Input
          type="password"
          id="Password"
          name="password"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
          Login
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Don&apos;t have an account?
          <a href="/register" className="text-gray-700 underline">
            Register account
          </a>
          .
        </p>
      </div>
    </form>
  );
};

export default Login;
