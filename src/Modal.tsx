import { PerksSetting } from "./App";

type ModalProps = {
  setPerksSetting: (perksSetting: PerksSetting) => void;
  handleClickedOutsideOfModal: () => void;
};

export default function Modal(props: ModalProps) {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={() => props.handleClickedOutsideOfModal()}
      >
        {/* Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0" */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-600 dark:bg-opacity-75"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-black sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 dark:bg-black sm:p-6 sm:pb-4">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"
                    id="modal-title"
                  >
                    Settings
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Which set of perks would you like to play with?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 dark:bg-gray-950 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => props.setPerksSetting("killer")}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 dark:bg-black dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-900 sm:ml-3 sm:mt-0 sm:w-auto"
                >
                  Killer
                </button>
                <button
                  onClick={() => props.setPerksSetting("survivor")}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 dark:bg-black dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-900 sm:ml-3 sm:mt-0 sm:w-auto"
                >
                  Survivor
                </button>
                <button
                  onClick={() => props.setPerksSetting("all")}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 dark:bg-black dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-900 sm:ml-3 sm:mt-0 sm:w-auto"
                >
                  All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
