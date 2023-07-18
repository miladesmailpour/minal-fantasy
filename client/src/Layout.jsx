import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Modal from "./components/Modal/Modal";

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("login");

  return (
    <div id="main-parent" className={isModalOpen && "overflowHidden"}>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalContent={modalContent}
        setModalContent={setModalContent}
      />
      <Header setIsModalOpen={setIsModalOpen} />
      <main>
        <Outlet context={[setModalContent, setIsModalOpen]} />
      </main>
      <Footer />
    </div>
  );
}
