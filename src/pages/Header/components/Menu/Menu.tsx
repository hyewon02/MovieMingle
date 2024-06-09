import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

interface menuProps {
  menuOpen: any;
  setMenuOpen: any;
}
export default function Menu({ menuOpen, setMenuOpen }: menuProps) {
  function close() {
    setMenuOpen(false);
  }
  return (
    <Transition show={menuOpen} as={Fragment}>
      <Dialog
        onClose={setMenuOpen}
        style={{ position: "relative", zIndex: "40" }}
      >
        <div
          style={{
            position: "fixed",
            inset: "0px",
            zIndex: "10",
            display: "flex",
          }}
        >
          <TransitionChild
            as={Fragment}
            enter="transition duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className={styles.dialogPanel}>
              <div style={{ height: "10px" }}></div>
              <div
                style={{
                  height: "5px",
                  borderTop: "2px solid white",
                  borderBottom: "2px solid white",
                }}
              ></div>
              <Link to={"/"} className={styles.menuLink} onClick={close}>
                <div className={styles.menuItem}>HOME</div>
              </Link>
              <Link to={"/popular"} className={styles.menuLink} onClick={close}>
                <div className={styles.menuItem}>POPULAR</div>
              </Link>
              <Link
                to={"/top-movie"}
                className={styles.menuLink}
                onClick={close}
              >
                <div className={styles.menuItem}>TOP MOVIE</div>
              </Link>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
