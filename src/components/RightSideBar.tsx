"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";

const RightSideBar = () => {
  const handleLoginWithGoogle = useCallback(
    (cred: CredentialResponse) => {},
    [],
  );
  return (
    <div className="p-5 bg-slate-700 rounded-lg">
      <h1 className="my-2 text-2xl">New Twitter</h1>
      <GoogleLogin onSuccess={(cred) => console.log(cred)} />
    </div>
  );
};

export default RightSideBar;
