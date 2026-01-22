import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Form from "./Form";

function Recall() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          <div className=" inset-0 flex w-screen max-h-dvh bg-blur  items-center justify-center ">
            <Dialog.Panel className="   rounded-xl bg-slate-200 p-5">
              <div className=" w-full duration-200 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    isOpenOchnoe(false);
                    isOpenOnline(false);
                  }}
                  className="text-gray-400 bg-transparent hover:scale-125 duration-200 hover:bg-gray-200  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 "
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <Form
                title="Позвоним вам и расскажем о нашей школе"
                phone={true}
              />
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Recall;
