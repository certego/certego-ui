import create from "zustand";
import { nanoid } from "nanoid";

// store
const useToastr = create((set, get) => ({
  toasts: [],
  addToast: (header, body, color, showToggle = false, timeout = 4000) => {
    const payload = {
      id: `toast-${color}-${nanoid(4)}`,
      header,
      body,
      color,
      showToggle,
      timeout,
    };
    setTimeout(() => get().removeToast(payload.id), timeout);
    set(({ toasts, }) => ({
      toasts: [...toasts, payload],
    }));
  },
  removeToast: (id) =>
    set(({ toasts, }) => ({
      toasts: toasts.filter((t) => t.id !== id),
    })),
}));

export default useToastr;
