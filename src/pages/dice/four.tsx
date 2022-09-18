import { createSignal } from "solid-js";
export default function Four({
  rollnum,
  dimensions = { w: "100%", h: "100%" },
}) {
  const [roll, setRoll] = createSignal(rollnum);
  return (
    <svg
      width={dimensions.w}
      height={dimensions.h}
      viewBox="0 0 180 180"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
      onClick={() => setRoll(Math.floor(Math.random() * 4 + 1))}
    >
      <g transform="matrix(1.1526,0,0,0.922081,-27.8051,11.6393)">
        <path
          d="M102.208,19.912L167.278,150.053L37.138,150.053L102.208,19.912Z"
          style="fill:rgb(36,161,70);"
        />
      </g>
      <g transform="matrix(1,0,0,1,8.30593,30.9313)">
        <text
          x="68.428px"
          y="88.499px"
          style="font-family:'ArialMT', 'Arial', sans-serif;font-size:48px;fill:white;"
        >
          {roll}
        </text>
      </g>
    </svg>
  );
}
