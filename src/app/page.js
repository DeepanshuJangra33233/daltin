import NavBar from "@/components/common/NavBar";
import Login from "@/components/Login";
import Register from "@/components/Register";
import SplashScreen from "@/components/SplashScreen";
import StudentVerifyPortal from "@/components/StudentVerifyPortal";
import StudentWelcomePortal from "@/components/StudentWelcomePortal";

export default function Home() {
  return (
    <>
      <NavBar />
      <SplashScreen />
      {/* <Login />
      <Register />
      <StudentWelcomePortal />
      <StudentVerifyPortal /> */}
    </>
  );
}
