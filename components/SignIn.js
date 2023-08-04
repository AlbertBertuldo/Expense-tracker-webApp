import React, { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import {FcGoogle} from "react-icons/fc"

function SignIn() {
    const { googleLoginHandler } = useContext(authContext);

  return (
    <main className="container max-w-2xl px-6 mx-auto">
        <h1 className="mb-6 text-6xl font-bold text-center"> Welcome 👋</h1>

        <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-lime-950 rounded-2xl">
            <div className="h-62">
                <img 
                className="object-cover w-full h-full"
                src="https://e0.pxfuel.com/wallpapers/664/51/desktop-wallpaper-glass-bank-with-coins-piggy-bank-savings-money-concepts-finance-saving-concept-business-stacks-of-coins-for-with-resolution-high-quality-save-money.jpg"
                />

            </div>

            <div className="px-4 py-4">
                <h3 className="text-2xl text-center">Please Sign In To Continue</h3>
                <button 
                onClick={googleLoginHandler}
                className="flex self start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg">
                    <FcGoogle className="text-2xl"/>Google
                </button>
            </div>
        </div>
    </main>
  );
}

export default SignIn;