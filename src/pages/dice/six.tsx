export default function Six({ rollnum }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 180 180"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
    >
      <g transform="matrix(1.05078,0,0,1.05078,0.0174068,-0.498919)">
        <path
          d="M142.734,57.575C142.734,41.818 129.941,29.025 114.184,29.025L57.084,29.025C41.326,29.025 28.534,41.818 28.534,57.575L28.534,114.675C28.534,130.433 41.326,143.226 57.084,143.226L114.184,143.226C129.941,143.226 142.734,130.433 142.734,114.675L142.734,57.575Z"
          style="fill:rgb(30,192,211);"
        />
      </g>
      <g transform="matrix(1,0,0,1,1.90148,22.2669)">
        <text
          x="73.626px"
          y="84.725px"
          style="font-family:'ArialRoundedMTBold', 'Arial Rounded MT Bold', sans-serif;font-size:48px;fill:white;"
        >
          {rollnum}
        </text>
      </g>
    </svg>
  );
}
