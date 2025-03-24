import Image from "next/image";
import styles from "./page.module.css";
import LoginView from "./pages/login/page"
import "./globals.css";

export default function Home() {
  return (
    <div className={'container'}>
      <LoginView></LoginView>
    </div>
  );
}
