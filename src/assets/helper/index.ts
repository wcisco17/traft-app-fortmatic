import uuid from "uuid";
import handshake from "../images/handshake.png";
import transfer from "../images/transfer.png";
import transferfrom from "../images/transferfrom.png";

export const BOXES = [
  {
    id: `box-${uuid().slice(0, 4)}`,
    title: "Transfer from your account",
    logo: transfer,
    image:
      "background-image: radial-gradient( circle 349px at 7.4% 22.1%,  rgba(226,5,5,1) 0%, rgba(133,2,229,1) 100.7% );"
  },
  {
    id: `box-${uuid().slice(0, 4)}`,
    title: "Approve Payment",
    logo: handshake,
    image:
      "background-image: linear-gradient( 110.7deg,  rgba(9,154,151,1) 6.3%, rgba(21,205,168,1) 90.6% );"
  },
  {
    id: `box-${uuid().slice(0, 4)}`,
    title: "Transfer from annother account",
    logo: transferfrom,
    image:
      "background-image: radial-gradient( circle 941px at 3.8% 14.3%,  rgba(128,122,242,1) 19.2%, rgba(102,249,214,1) 75.6% );"
  }
];
