import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const language = useSelector((state) => state.language);
  const lngValue = language?.lngValue;

  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      router.replace(`/${lngValue}`);
    }
  }, []);

  return <div>Loading</div>;
}
