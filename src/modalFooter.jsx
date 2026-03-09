import React, { useState } from "react";
import { X } from "lucide-react"; // <-- alteração
import { Dialog } from "primereact/dialog";
import content from "./content/content";

function ModalFooter({ triggerText = "Políticas de Privacidade" }) {
  const [visible, setVisible] = useState(false);

  const openDialog = async () => {
    await import("primereact/resources/themes/lara-light-cyan/theme.css");
    setVisible(true);
  };

  return (
    <>
      <div
        onClick={openDialog}
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
          backgroundColor: "#000",
          color: "#fff",
        }}
        aria-label="Abre um Modal com os termos da Política de privacidade"
        className=""
      >
        {triggerText}
      </div>

      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{
          "4000px": "641px",
          "1024px": "641px",
          "641px": "85vw",
        }}
      >
        {content.texts.footer.privacidade}
      </Dialog>
    </>
  );
}

export default ModalFooter;
