const icons = {
  shortsIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      // className="flex-1"
    >
      <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
    </svg>
  ),
  shortsFillIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
    >
      <path d="m17.77 10.32-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"></path>
    </svg>
  ),
  uploadIcon: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M12 16V3M12 3L16 7.375M12 3L8 7.375"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  ),
  channelIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      focusable="false"
      width="24px"
      height="24px"
    >
      <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
    </svg>
  ),
  channelFillIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      focusable="false"
      width="24px"
      height="24px"
    >
      <path d="M3,3v18h18V3H3z M20,20H4v-0.08c0.44-3.2,2.87-5.74,7.28-5.99C9.42,13.59,8,11.96,8,10c0-2.21,1.79-4,4-4 c2.21,0,4,1.79,4,4c0,1.96-1.42,3.59-3.28,3.93c4.41,0.25,6.84,2.8,7.28,5.99V20z"></path>
    </svg>
  ),
  logoIcon: (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      viewBox="0 0 512 512"
    >
      <path
        fill="#4BC3EF"
        opacity="1.000000"
        stroke="none"
        d="
M512.726807,97.610046 
	C513.000000,190.020889 513.000000,282.041779 513.000000,374.531342 
	C510.936951,380.879822 509.576782,387.066040 505.121918,391.858826 
	C503.489349,393.615265 501.929901,395.229980 498.857605,394.949585 
	C495.430420,395.113068 492.446411,395.308929 489.444305,395.308624 
	C344.188232,395.293732 198.932190,395.285919 53.676144,395.331238 
	C45.520470,395.333801 37.844044,394.373779 30.895308,389.515137 
	C20.849409,382.490875 15.690290,373.153625 15.694191,360.828247 
	C15.713116,301.026733 15.711539,241.225235 15.703815,181.423737 
	C15.700091,152.605728 15.634455,123.787415 15.760083,94.969986 
	C15.786130,88.995132 14.099142,83.056213 15.477660,76.585464 
	C17.287176,69.630554 23.154654,67.652748 28.195150,65.049324 
	C36.838455,60.585060 46.389778,59.835766 55.898663,59.780228 
	C84.704597,59.611969 113.511871,59.718880 142.318619,59.718456 
	C246.222763,59.716938 350.126953,59.689827 454.031036,59.760071 
	C463.668823,59.766586 473.439301,59.810791 482.510834,63.695141 
	C497.649384,70.177368 508.851227,80.350212 512.726807,97.610046 
z"
      />
      <path
        fill="#1BADDE"
        opacity="1.000000"
        stroke="none"
        d="
M1.000000,98.468658 
	C2.492722,98.808609 2.641685,97.783073 3.014452,96.687561 
	C5.725986,88.718773 9.970589,81.726562 16.674753,75.996765 
	C19.144156,169.953751 17.332644,264.068359 17.949791,358.174683 
	C17.972609,361.653961 17.688902,365.138580 18.679348,368.594635 
	C23.116871,384.078796 34.839985,393.019470 51.148746,393.021698 
	C198.258301,393.041779 345.367828,393.033508 492.477386,393.055634 
	C494.786499,393.055969 497.148132,392.647461 499.743103,393.807678 
	C490.949463,404.467407 479.357056,409.935791 465.595428,409.944763 
	C326.690643,410.035400 187.785736,409.946503 48.880997,410.062225 
	C29.748310,410.078186 9.379763,396.049652 3.743070,377.537048 
	C3.324922,376.163757 3.485092,374.092926 1.286122,373.666626 
	C1.000000,282.312439 1.000000,190.624878 1.000000,98.468658 
z"
      />
      <path
        fill="#FFFFFF"
        opacity="1.000000"
        stroke="none"
        d="
M210.720978,156.550278 
	C213.058441,157.045578 215.145493,157.642014 217.054916,158.594498 
	C258.228882,179.132965 299.384155,199.708984 340.538483,220.286850 
	C343.213440,221.624344 345.921539,222.933472 348.028931,225.634277 
	C347.947632,228.494461 346.030670,229.551254 344.070129,230.533920 
	C311.941376,246.637756 279.912567,262.947205 247.591293,278.658051 
	C229.364120,287.517975 209.324631,274.236023 208.884689,253.230011 
	C208.477066,233.766693 208.794113,214.292694 208.772705,194.823410 
	C208.761169,184.339920 208.709961,173.855972 208.815735,163.373154 
	C208.838562,161.110413 208.364777,158.638626 210.720978,156.550278 
z"
      />
      <path
        fill="#E3F5FF"
        opacity="1.000000"
        stroke="none"
        d="
M210.615646,156.184280 
	C211.040955,188.233612 210.909927,220.184448 211.055939,252.134018 
	C211.153793,273.545074 230.094788,284.940796 249.282028,275.354370 
	C282.030914,258.992218 314.770691,242.611893 347.845459,226.092392 
	C355.109161,234.704971 352.637146,246.187225 342.373291,251.393005 
	C320.103088,262.688446 297.730133,273.781372 275.395935,284.950623 
	C256.039490,294.630737 236.455109,303.885406 217.393204,314.114075 
	C203.149963,321.757019 190.497757,311.581512 190.725403,297.898651 
	C191.409698,256.769836 190.961288,215.622360 190.978851,174.482162 
	C190.984268,161.815353 197.356552,155.745132 210.615646,156.184280 
z"
      />
      <path
        fill="#4BC3EF"
        opacity="1.000000"
        stroke="none"
        d="
M209.000000,452.000244 
	C173.506088,452.000244 138.512161,452.015411 103.518280,451.982269 
	C98.833527,451.977844 94.407570,451.280701 92.070168,446.327301 
	C89.596260,441.084564 93.198029,434.620819 99.028496,434.017822 
	C100.017868,433.915497 101.026665,433.999969 102.026489,433.999969 
	C205.341843,433.999786 308.657196,434.014130 411.972534,433.951752 
	C416.487671,433.949005 420.142609,434.943268 421.962372,439.416168 
	C424.493805,445.638184 420.466187,451.229919 412.962799,451.977997 
	C411.642700,452.109619 410.298462,452.000122 408.965363,452.000122 
	C342.476898,452.000275 275.988464,452.000244 209.000000,452.000244 
z"
      />
    </svg>
  ),
};

export default icons;
