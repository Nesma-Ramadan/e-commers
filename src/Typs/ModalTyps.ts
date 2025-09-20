

export interface Modaltype{
    mode: "signup" | "login" | null;
  onClose: () => void;
  onSwitch: (mode: "signup" | "login") => void;
}