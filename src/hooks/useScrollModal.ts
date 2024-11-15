import { useEffect } from "react";

export function useScrollModal(isOpen: boolean) {
  useEffect(
    function () {
      if (isOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "";
      return () => {
        document.body.style.overflow = "";
      };
    },
    [isOpen]
  );
}
