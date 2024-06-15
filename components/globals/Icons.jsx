

export const HomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  );

export const Code = (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
  );
export const Cube = (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
  );
export const AI = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>
  );
export const Bot = (props) => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
  );
  


export const Github = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
    </svg>
    )
  }
export const Separator = (props) => {
  return (
    < div class="flex flex-row justify-center w-full md:w-3/4 text-center" >
      <div class="bg-gradient-to-r from-transparent via-primary-500 to-transparent w-full  h-[2px] opacity-60"></div>
    </div >
      
    )
}
export const Like = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      
    )
}
export const Views = (props) => {
  return (
    <svg id="Show"width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <g id="Iconly/Bold/Show" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Show" transform="translate(2.000000, 4.000000)" fill="white" fillRule="nonzero">
                <path d="M10,0 C12.0682927,0 14.0292683,0.717575758 15.7365854,2.04606061 C17.4439024,3.36484848 18.897561,5.29454545 19.9414634,7.70909091 C20.0195122,7.89333333 20.0195122,8.10666667 19.9414634,8.28121212 C17.8536585,13.110303 14.1365854,16 10,16 L10,16 L9.9902439,16 C5.86341463,16 2.14634146,13.110303 0.0585365854,8.28121212 C-0.0195121951,8.10666667 -0.0195121951,7.89333333 0.0585365854,7.70909091 C2.14634146,2.88 5.86341463,0 9.9902439,0 L9.9902439,0 Z M10,4.12121212 C7.84390244,4.12121212 6.09756098,5.8569697 6.09756098,8 C6.09756098,10.1333333 7.84390244,11.8690909 10,11.8690909 C12.1463415,11.8690909 13.8926829,10.1333333 13.8926829,8 C13.8926829,5.8569697 12.1463415,4.12121212 10,4.12121212 Z M10.0011707,5.57362424 C11.3377561,5.57362424 12.430439,6.65968485 12.430439,7.99786667 C12.430439,9.32635152 11.3377561,10.4124121 10.0011707,10.4124121 C8.65482927,10.4124121 7.56214634,9.32635152 7.56214634,7.99786667 C7.56214634,7.83301818 7.58165854,7.67786667 7.61092683,7.52271515 L7.65970732,7.52271515 C8.74263415,7.52271515 9.62068293,6.66938182 9.65970732,5.60271515 C9.76702439,5.58332121 9.88409756,5.57362424 10.0011707,5.57362424 Z"></path>
            </g>
        </g>
    </svg>
      
    )
}

export const Gallery = (props) => {
  return (
<svg width="50" height="50" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <g id="Iconly/Bold/Image" stroke="none" strokeWidth="1.5" fill="white" fillRule="evenodd">
        <g id="Image" transform="translate(2.000000, 2.000000)" fill="white" fillRule="nonzero">
            <path d="M14.3338177,0 C17.7231047,0 20,2.37811294 20,5.91672095 L20,14.083279 C20,17.6218871 17.7231047,20 14.3328156,20 L5.66618229,20 C2.27689532,20 0,17.6218871 0,14.083279 L0,5.91672095 C0,2.37811294 2.27689532,0 5.66618229,0 L14.3338177,0 Z M15.4365921,10.5500516 C14.3646473,9.88132095 13.5370577,10.8204334 13.3138196,11.120743 C13.0986262,11.4107327 12.9136001,11.7306502 12.7185182,12.0505676 C12.2418748,12.8400413 11.6958467,13.750258 10.7506045,14.2796698 C9.37698673,15.0402477 8.33420365,14.3395253 7.58404341,13.8297214 C7.30248193,13.6398349 7.02896505,13.4602683 6.75645376,13.3405573 C6.0847285,13.0505676 5.48037689,13.380805 4.58340244,14.5201238 C4.11279253,15.1155831 3.64620492,15.7058824 3.17358386,16.2941176 C2.8910168,16.6460268 2.95839044,17.1888545 3.33950402,17.4241486 C3.94787794,17.7987616 4.68999357,18 5.52864457,18 L5.52864457,18 L13.9563832,18 C14.432021,18 14.9086643,17.9349845 15.363185,17.7863777 C16.3868621,17.4520124 17.1993681,16.6862745 17.6237215,15.6749226 C17.9817068,14.8245614 18.1556716,13.7925697 17.8208146,12.9339525 C17.7091955,12.6491228 17.5422698,12.3839009 17.3079704,12.1506708 C16.693563,11.5407637 16.1193787,10.9711042 15.4365921,10.5500516 Z M6.49885818,4 C5.12021248,4 4,5.12173038 4,6.5 C4,7.87826962 5.12021248,9 6.49885818,9 C7.87649831,9 8.99771636,7.87826962 8.99771636,6.5 C8.99771636,5.12173038 7.87649831,4 6.49885818,4 Z"></path>
        </g>
    </g>
</svg>
      
    )
}
export const FB = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>  
    )
}
export const Gmail = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="25" viewBox="0 0 50 50" fill="white">
    <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
    </svg>

    )
}
export const LinkedIn = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    )
}

export const Telegram = (props) => {
  return (
<svg {...props} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="25" viewBox="0,0,256,256">
      <g fill="#ffffff" fillRule="nonzero" stroke="none"  fontFamily="none"  fontSize="none"
        style={{
        mixBlendMode:'normal'
      }}
      ><g transform="scale(5.12,5.12)"><path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z"></path></g></g>
</svg>
      
    )
}

export const Loader = () => {
  return (
    <svg
    className="animate-spin"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      opacity="0.5"
      cx="10"
      cy="10"
      r="9"
      stroke="white"
      strokeWidth="2"
    />
    <mask id="path-2-inside-1_2527_20936" fill="white">
      <path d="M18.4713 13.0345C18.9921 13.221 19.5707 12.9508 19.7043 12.414C20.0052 11.2042 20.078 9.94582 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6285 0.597723 12.4262 0.219019 11.1884 0.0708647C10.6392 0.00512742 10.1811 0.450137 10.1706 1.00319C10.1601 1.55625 10.6018 2.00666 11.1492 2.08616C12.0689 2.21971 12.9609 2.51295 13.7841 2.95511C14.9023 3.55575 15.8615 4.41394 16.5823 5.45872C17.3031 6.50351 17.7649 7.70487 17.9294 8.96348C18.0505 9.89002 18.008 10.828 17.8063 11.7352C17.6863 12.2751 17.9506 12.848 18.4713 13.0345Z" />
    </mask>
    <path
      d="M18.4713 13.0345C18.9921 13.221 19.5707 12.9508 19.7043 12.414C20.0052 11.2042 20.078 9.94582 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6285 0.597723 12.4262 0.219019 11.1884 0.0708647C10.6392 0.00512742 10.1811 0.450137 10.1706 1.00319C10.1601 1.55625 10.6018 2.00666 11.1492 2.08616C12.0689 2.21971 12.9609 2.51295 13.7841 2.95511C14.9023 3.55575 15.8615 4.41394 16.5823 5.45872C17.3031 6.50351 17.7649 7.70487 17.9294 8.96348C18.0505 9.89002 18.008 10.828 17.8063 11.7352C17.6863 12.2751 17.9506 12.848 18.4713 13.0345Z"
      stroke="white"
      strokeWidth="4"
      mask="url(#path-2-inside-1_2527_20936)"
    />
  </svg>

  )
}
export function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


export function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

export const RightArrow = (props) => {
  return (
    <svg {...props} id="Arrow - Right 2"  width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
    <path  d="M8.5 5L12 8.5L12.875 9.375M15.5 12L8.5 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
      
    )
}
  
export const Upwork = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="50%" fill="#6fda44"/><path fill="#fff" d="M357.2 296.9c-17 0-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6 13.1-47.2 43.8-47.2 23 0 41.7 18.7 41.7 41.7s-18.7 41.6-41.7 41.6zm0-125.5c-39.2 0-69.5 25.4-81.9 67.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0 21.7-17.6 39.3-39.3 39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0 44.9 36.5 81.8 81.4 81.8s81.4-36.9 81.4-81.8v-18.4c8.2 17.1 18.2 34.4 30.4 49.6l-25.8 121.4h43.1l18.7-88c16.4 10.5 35.2 17.1 56.8 17.1 46.2 0 83.8-37.8 83.8-84.1.1-46.1-37.4-83.7-83.6-83.7"/></svg>
    
      
    )
  }
  export const ProjectsIcon = (props) => (
    <svg {...props}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blocks"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
  );
  
  export const ExperienceIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
  );
  
  export const Circuits = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
  );