import React from "react";

import X from "../../global/ui/X/X";
import ModalContent from "./ModalContent/ModalContent";

import { modal } from "./Modal.scss";

export default function Modal() {
  return (
    <div className={modal}>
      <X />
      <ModalContent />
    </div>
  );
}
