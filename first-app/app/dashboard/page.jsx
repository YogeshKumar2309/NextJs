"use client";

import {useRouter} from "next/navigation";

const DashboardPage = () => {

    const router = useRouter();

    function handleOnClick() {
        router.push("/");
    }
  return (
    <div>dashboard page
        <button onClick={handleOnClick}>Go to home</button>
    </div>
  )
}

export default DashboardPage