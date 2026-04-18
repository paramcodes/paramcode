"use client"
import AuthButton from "./components/authbutton";
import { useSession } from "next-auth/react";
import Header from "./components/Header";
import Sheet from "./components/Sheet";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";

export default function Home(){
  const { data: session } = useSession();
  
  return <div>
    <Header/>
    {session ? <Sheet/>:<Landing/>}
  </div>
}