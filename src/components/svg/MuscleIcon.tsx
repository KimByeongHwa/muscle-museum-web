interface MuscleIconProps {
  width?: string;
  height?: string;
  color?: string;
}

export default function MuscleIcon({ width = '128px', height = '128px', color = '#000' }: MuscleIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className="iconify iconify--emojione-monotone"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M61.88 45.061c-.073-.799-.143-1.552-.092-2.121c.451-5.027-1.014-9.559-4.236-13.103c-3.655-4.021-9.417-6.422-15.412-6.422c-8.348 0-15.345 4.374-18.718 11.701c-.008.019-.018.038-.025.057c-.775-2.853-1.557-4.833-2.183-6.42c-1.058-2.684-1.626-4.123-1.171-7.279a3.841 3.841 0 0 0 2.207-1.012c.105.007.214.012.324.012c1.135 0 2.119-.43 2.83-1.196l.088.001c1.413 0 2.616-.611 3.417-1.689c1.954-.164 3.304-1.342 3.571-3.157c.36-2.436-.492-9.254-2.333-11.4C29.417 2.18 28.611 2 28.065 2c-3.115 0-7.987.719-12.123 1.788C8.404 5.736 7.226 7.703 7.039 9.2c-.765 6.177-1.899 11.687-2.901 16.549c-1.42 6.888-2.541 12.329-1.999 16.607c.211 1.669.632 3.101 1.038 4.484c.508 1.726 1.031 3.511 1.208 5.952c.243 3.393 3.907 5.339 10.053 5.339c2.409 0 4.866-.314 6.882-.873C23.792 58.442 31.949 62 40.661 62c2.996 0 5.787-.428 8.299-1.272c12.853-4.326 13.43-10.112 12.92-15.667M4.124 42.103C3.258 35.27 7.191 24.255 9.025 9.449c.311-2.505 11.713-5.127 17.985-5.41c-.255.205-.438.474-.462.76c.752-.341 1.875-.451 2.426.673c.029-.188.041-.355.041-.511c.288.564.551 1.333.773 2.209c.279 1.26.435 2.552.438 3.849c.002.901.198 4.113-1.285 3.695c-.914-.258-.937-1.101-1.198-1.969c-.402-1.357-1.11-2.921-1.024-4.363c-.349 1.415.066 3.113.22 4.544c.088.833.664 3.084-.356 3.391c-.564.173-1.218-.224-1.685-.515c-.178-.112-.311-.931-.376-1.161c-.402-1.406-1.122-3.023-1.03-4.5c-.352 1.332-.009 2.937.103 4.302c.069.846.496 2.68-.458 3.106c-1.08.565-1.246-.805-1.446-1.523c-.371-1.333-.974-2.791-.958-4.189c-.377 1.703.066 3.697.139 5.441c.039.866-1.776 1.648-2.453 1.104c-1.061-.853-1.24-2.85-1.36-4.141c.318.434.774.995 1.353.938c-.492-.561-.701-1.523-1.03-2.205c-.302-.56-.915-1.893-1.636-1.915c.111.239.719 1.886.625 2.06c-.293.545-.578 1.099-.904 1.621c-.277.439-1.081 1.838-1.73 1.415c-.701-.454-1.141-2.487-1.141-2.487s.026 2.535.932 3.122c.858.558 1.836-.322 2.404-.95c.113 1.205.439 2.618 1.168 3.55c-2.142 9.499 1.801 9.404 4.459 22.102c0 0 1.752-2.583 3.284-5.91c3.343-7.262 10.316-10.498 17.038-10.498c6.666 0 13.804 3.408 16.398 9.3c.857 1.946 1.07 4.272.838 6.834c-.379 4.173 3.739 10.962-11.622 16.063c-12.189 4.047-27.181-3.713-27.181-3.713c-4.112 1.344-13.728 1.931-13.931-.917c-.335-4.665-1.816-7.04-2.259-10.548"
        fill={color}
      ></path>
      <path
        d="M34.245 53.57c2.677.982 5.586 1.249 8.392.915c2.808-.34 5.556-1.257 7.95-2.803c1.188-.778 2.293-1.714 3.182-2.837c.869-1.127 1.573-2.429 1.736-3.81c-1.728 2.114-3.926 3.278-6.191 4.203c-2.277.9-4.672 1.461-7.086 1.75c-2.416.279-4.855.282-7.271-.093a21.33 21.33 0 0 1-7.174-2.484c1.364 2.402 3.804 4.179 6.462 5.159"
        fill={color}
      ></path>
      <path d="M25.566 6.85c.424-2.749-2.332-1.844-2.428-.672c.752-.342 1.877-.451 2.428.672" fill={color}></path>
      <path d="M22.841 8.37c.425-2.75-2.33-1.847-2.426-.671c.752-.345 1.876-.453 2.426.671" fill={color}></path>
      <path d="M19.694 9.957c.425-2.749-2.33-1.845-2.426-.671c.753-.345 1.875-.452 2.426.671" fill={color}></path>
    </svg>
  );
}