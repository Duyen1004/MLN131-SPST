import { getAssetPath } from "@/lib/utils";

export const stages = [
  {
    id: 1,
    title: "Cổng khởi nguyên",
    image: getAssetPath("images/world-island-stage-1-clean.png")
  },
  {
    id: 2,
    title: "Nhà người dẫn đường",
    image: getAssetPath("images/world-island-stage-2-clean.png")
  },
  {
    id: 3,
    title: "Đền chuyển hóa",
    image: getAssetPath("images/world-island-stage-3-clean.png")
  },
  {
    id: 4,
    title: "Tháp công lý",
    image: getAssetPath("images/world-island-stage-4-clean.png")
  },
  {
    id: 5,
    title: "Làng liên minh",
    image: getAssetPath("images/world-island-stage-5-clean.png")
  },
  {
    id: 6,
    title: "Điện hòa hợp",
    image: getAssetPath("images/world-island-stage-6-clean.png")
  }
];

export const worldMapLayout = [
  { x: 11, y: 68 },
  { x: 28, y: 50 },
  { x: 44, y: 27 },
  { x: 62, y: 40 },
  { x: 78, y: 60 },
  { x: 91, y: 34 }
];
