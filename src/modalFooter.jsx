import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function ModalFooter({
  triggerText = "Políticas de Privacidade",
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        onClick={() => setVisible(true)}
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          textAlign: "center",
          padding: "10px 0",
          backgroundColor: "#000",
          color: "#fff",
          width: "100%",
        }}
      >
        {triggerText}
      </div>

      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        closeIcon={<X size={20} />}
        style={{ width: "50vw", maxWidth: "90%" }}
      >
        <p>Aqui vai o conteúdo das Políticas de Privacidade.</p>
      </Dialog>
    </>
  );
}
