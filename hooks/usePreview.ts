"use client";
import { productTypes } from "@/types/types";
import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  data?: productTypes;
  onOpen: (data: productTypes) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: productTypes) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
