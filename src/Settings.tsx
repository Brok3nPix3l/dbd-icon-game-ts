import { useState } from "react";
import settings from "./images/settings.png";
import Modal from "./Modal";
import { PerksSetting } from "./App";

type SettingsProps = {
  setPerksSetting: (perksSetting: PerksSetting) => void;
};

export default function Settings(props: SettingsProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePerksSetting = (setting: PerksSetting) => {
    console.log(setting);
    setModalOpen(false);
    props.setPerksSetting(setting);
  };
  return (
    <>
      <button className="w-10">
        <img src={settings} onClick={() => setModalOpen(true)} />
      </button>
      {modalOpen && <Modal setPerksSetting={handlePerksSetting} />}
    </>
  );
}
