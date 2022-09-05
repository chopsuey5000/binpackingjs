import { BP2D } from "binpackingjs";
const { Bin, Box, Packer, heuristics } = BP2D;

let bin_1 = new Bin(100, 50);
let bin_2 = new Bin(50, 50);
let boxes = [
  new Box(15, 10), // Should be added last (smaller)
  new Box(50, 45), // Fits in bin_2 better than in bin_1
  new Box(40, 40),
  new Box(200, 200), // Too large to fit
];
let packer = new Packer([bin_1, bin_2]);
let packed_boxes = packer.pack(boxes);