import React, { ReactNode } from "react";

type BadgesProps = {
  variant?: "outlined" | "contained";
};

type OriginBadges = BadgesProps & {
  icon: ReactNode;
  text: ReactNode;
};

const Badges = (props: OriginBadges) => {
  // variables

  const { variant = "contained", icon, text } = props;

  const bgStyles: {
    [key: string]: {
      bg: string;
      outline: string;
    };
  } = {
    contained: {
      bg: "black",
      outline: "#A6A6A6",
    },
    outlined: {
      bg: "transparent",
      outline: "white",
    },
  };

  // render
  return (
    <div className="h-10 w-[135px] gap-[7px] items-center justify-center flex relative">
      <div>{icon}</div>
      <div>{text}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="135"
        height="40"
        viewBox="0 0 135 40"
        fill="none"
        className="absolute z-[-1]"
      >
        <path
          d="M130 0H5C2.23858 0 0 2.23858 0 5V35C0 37.7614 2.23858 40 5 40H130C132.761 40 135 37.7614 135 35V5C135 2.23858 132.761 0 130 0Z"
          fill={bgStyles[variant].bg}
        />
        <path
          d="M130 0.8C131.114 0.801287 132.181 1.24423 132.968 2.03165C133.756 2.81907 134.199 3.88666 134.2 5.0002V35.0002C134.199 36.1137 133.756 37.1813 132.968 37.9687C132.181 38.7561 131.114 39.1991 130 39.2004H5C3.88645 39.1991 2.81888 38.7562 2.0315 37.9688C1.24412 37.1813 0.801231 36.1137 0.8 35.0002V5.0002C0.801212 3.88664 1.24409 2.81904 2.03148 2.03162C2.81886 1.2442 3.88644 0.801266 5 0.8H130ZM130 0.000200272H5C3.67511 0.00407837 2.40559 0.532108 1.46875 1.46895C0.531908 2.40579 0.0038781 3.67531 0 5.0002L0 35.0002C0.0038781 36.3251 0.531908 37.5946 1.46875 38.5315C2.40559 39.4683 3.67511 39.9963 5 40.0002H130C131.325 39.9963 132.594 39.4683 133.531 38.5315C134.468 37.5946 134.996 36.3251 135 35.0002V5.0002C134.996 3.67531 134.468 2.40579 133.531 1.46895C132.594 0.532108 131.325 0.00407837 130 0.000200272Z"
          fill={bgStyles[variant].outline}
        />
      </svg>
    </div>
  );
};

export const GoogleBadge = (props: BadgesProps) => {
  const { variant = "contained" } = props;

  return (
    <Badges
      {...props}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
        >
          <path
            d="M1.43531 0.5381C1.10739 0.930172 0.941819 1.4328 0.972507 1.943V24.0591C0.941729 24.5693 1.10731 25.072 1.43531 25.464L1.50931 25.5361L13.8983 13.1472V12.8549L1.50931 0.4655L1.43531 0.5381Z"
            fill="url(#paint0_linear_1973_4215)"
          />
          <path
            d="M18.0277 17.2786L13.8983 13.1472V12.8549L18.0287 8.7245L18.1218 8.7776L23.0146 11.5577C24.4122 12.3517 24.4122 13.6509 23.0146 14.4454L18.1218 17.2255L18.0277 17.2786Z"
            fill="url(#paint1_linear_1973_4215)"
          />
          <path
            d="M18.1218 17.225L13.8983 13.0011L1.4353 25.464C1.72007 25.7152 2.08373 25.8588 2.46326 25.87C2.8428 25.8812 3.2143 25.7593 3.5134 25.5254L18.1218 17.225Z"
            fill="url(#paint2_linear_1973_4215)"
          />
          <path
            d="M18.1218 8.7771L3.5134 0.476699C3.2143 0.242793 2.8428 0.120886 2.46326 0.1321C2.08373 0.143314 1.72007 0.286941 1.4353 0.538099L13.8983 13.0011L18.1218 8.7771Z"
            fill="url(#paint3_linear_1973_4215)"
          />
          <path
            opacity="0.2"
            d="M18.0287 17.132L3.5134 25.3793C3.22582 25.5982 2.87482 25.7177 2.51339 25.7196C2.15196 25.7215 1.79971 25.6058 1.5098 25.39L1.4353 25.4645L1.5093 25.5366L1.5098 25.5361C1.79966 25.7521 2.15193 25.8678 2.51339 25.8659C2.87485 25.864 3.22587 25.7444 3.5134 25.5254L18.1218 17.225L18.0287 17.132Z"
            fill="black"
          />
          <path
            opacity="0.12"
            d="M1.43528 25.3184C1.1074 24.9263 0.941831 24.4237 0.972484 23.9135V24.0596C0.941813 24.5698 1.10738 25.0724 1.43528 25.4645L1.50978 25.39L1.43528 25.3184Z"
            fill="black"
          />
          <path
            opacity="0.12"
            d="M23.0146 14.2988L18.0287 17.132L18.1218 17.225L23.0146 14.4449C23.3024 14.32 23.5515 14.1202 23.7358 13.8663C23.9202 13.6125 24.0331 13.3138 24.0629 13.0015C24.001 13.2843 23.8741 13.5489 23.6921 13.7741C23.5101 13.9993 23.2781 14.1789 23.0146 14.2988Z"
            fill="black"
          />
          <path
            opacity="0.25"
            d="M3.51343 0.623298L23.0146 11.7033C23.2783 11.8231 23.5103 12.0029 23.6923 12.2282C23.8743 12.4535 24.0012 12.7181 24.0629 13.0011C24.0334 12.6886 23.9205 12.3898 23.7362 12.1359C23.5518 11.8819 23.3026 11.682 23.0146 11.5572L3.51343 0.477197C2.11583 -0.316903 0.972534 0.342697 0.972534 1.9435V2.0896C0.972534 0.488897 2.11583 -0.170703 3.51343 0.623298Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1973_4215"
              x1="12.7996"
              y1="1.70981"
              x2="-3.98276"
              y2="18.4922"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A0FF" />
              <stop offset="0.00657" stopColor="#00A1FF" />
              <stop offset="0.2601" stopColor="#00BEFF" />
              <stop offset="0.5122" stopColor="#00D2FF" />
              <stop offset="0.7604" stopColor="#00DFFF" />
              <stop offset="1" stopColor="#00E3FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1973_4215"
              x1="24.8343"
              y1="13.0015"
              x2="0.637397"
              y2="13.0015"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE000" />
              <stop offset="0.4087" stopColor="#FFBD00" />
              <stop offset="0.7754" stopColor="#FFA500" />
              <stop offset="1" stopColor="#FF9C00" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1973_4215"
              x1="15.8269"
              y1="15.2962"
              x2="-6.93143"
              y2="38.0545"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF3A44" />
              <stop offset="1" stopColor="#C31162" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1973_4215"
              x1="-1.70277"
              y1="-6.82372"
              x2="8.45975"
              y2="3.3388"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#32A071" />
              <stop offset="0.0685" stopColor="#2DA771" />
              <stop offset="0.4762" stopColor="#15CF74" />
              <stop offset="0.8009" stopColor="#06E775" />
              <stop offset="1" stopColor="#00F076" />
            </linearGradient>
          </defs>
        </svg>
      }
      text={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="29"
          viewBox="0 0 85 29"
          fill="none"
        >
          <path
            d="M6.4184 4.2433C6.43657 4.61025 6.37988 4.97705 6.25177 5.32138C6.12365 5.66572 5.9268 5.98037 5.6732 6.2462C5.38898 6.54096 5.04574 6.7724 4.66592 6.92537C4.2861 7.07834 3.87827 7.1494 3.4691 7.1339C3.05732 7.13759 2.64895 7.05892 2.26801 6.90253C1.88706 6.74614 1.54123 6.51517 1.25082 6.22321C0.960413 5.93125 0.731304 5.58418 0.576949 5.20241C0.422595 4.82063 0.346113 4.41186 0.352 4.0001C0.346159 3.58834 0.422668 3.17955 0.577033 2.79777C0.731398 2.41599 0.960502 2.06891 1.25089 1.77692C1.54128 1.48492 1.8871 1.25391 2.26803 1.09745C2.64895 0.940983 3.05731 0.862226 3.4691 0.865801C3.89248 0.864522 4.31162 0.95012 4.7006 1.1173C5.06186 1.26374 5.38342 1.49345 5.6391 1.7877L5.1117 2.3155C4.91072 2.07895 4.65809 1.89174 4.37329 1.76831C4.08849 1.64487 3.77913 1.58852 3.4691 1.6036C3.15702 1.60199 2.84782 1.66337 2.56003 1.78408C2.27223 1.9048 2.01176 2.08235 1.79421 2.30611C1.57666 2.52987 1.4065 2.79523 1.29394 3.08631C1.18137 3.37739 1.1287 3.68819 1.1391 4.0001C1.13166 4.4673 1.26312 4.92618 1.51682 5.31856C1.77052 5.71095 2.13503 6.01915 2.56412 6.2041C2.99322 6.38905 3.46757 6.44242 3.92703 6.35742C4.38649 6.27243 4.81036 6.05291 5.1449 5.7267C5.45279 5.39494 5.63126 4.96362 5.6478 4.5113H3.4691V3.7906H6.3764C6.40389 3.93994 6.41794 4.09145 6.4184 4.2433Z"
            fill="white"
          />
          <path
            d="M11.0277 1.7374H8.2953V3.6397H10.7592V4.3605H8.2953V6.2628H11.0277V7.0001H7.5248V1.0001H11.0277V1.7374Z"
            fill="white"
          />
          <path
            d="M14.2787 7.0001H13.5072V1.7374H11.8314V1.0001H15.9545V1.7374H14.2787V7.0001Z"
            fill="white"
          />
          <path
            d="M18.9379 7.0001V1.0001H19.7084V7.0001H18.9379Z"
            fill="white"
          />
          <path
            d="M23.1283 7.0001H22.3568V1.7374H20.6811V1.0001H24.8041V1.7374H23.1283V7.0001Z"
            fill="white"
          />
          <path
            d="M32.6093 6.2247C32.0253 6.80695 31.2343 7.1339 30.4096 7.1339C29.5849 7.1339 28.7939 6.80695 28.2099 6.2247C27.921 5.93207 27.6939 5.58434 27.542 5.20217C27.3902 4.82001 27.3168 4.41122 27.3261 4.0001C27.3168 3.58899 27.3902 3.18019 27.542 2.79803C27.6939 2.41586 27.921 2.06813 28.2099 1.7755C28.4986 1.48677 28.8413 1.2578 29.2186 1.1017C29.5958 0.945602 30.0002 0.86544 30.4085 0.865802C30.8167 0.866164 31.2209 0.947044 31.5979 1.10381C31.9749 1.26058 32.3173 1.49016 32.6054 1.7794C32.8945 2.07126 33.1221 2.41821 33.2746 2.79968C33.4271 3.18115 33.5014 3.58937 33.4931 4.0001C33.5022 4.41118 33.4286 4.8199 33.2768 5.20203C33.125 5.58416 32.898 5.93192 32.6093 6.2247ZM28.7792 5.7223C29.2117 6.15409 29.7979 6.39661 30.4091 6.39661C31.0203 6.39661 31.6065 6.15409 32.039 5.7223C32.2608 5.49522 32.4343 5.22553 32.5489 4.92952C32.6636 4.63352 32.717 4.31734 32.706 4.0001C32.717 3.68286 32.6636 3.36669 32.5489 3.07068C32.4343 2.77467 32.2608 2.50498 32.039 2.2779C31.6065 1.84611 31.0203 1.60359 30.4091 1.60359C29.7979 1.60359 29.2117 1.84611 28.7792 2.2779C28.5577 2.50516 28.3845 2.77491 28.2701 3.07089C28.1556 3.36686 28.1022 3.68295 28.1132 4.0001C28.1022 4.31725 28.1556 4.63334 28.2701 4.92932C28.3845 5.22529 28.5577 5.49504 28.7792 5.7223Z"
            fill="white"
          />
          <path
            d="M34.5751 7.0001V1.0001H35.5136L38.4296 5.6676H38.4628L38.4296 4.5113V1.0001H39.2011V7.0001H38.3964L35.3456 2.1065H35.3124L35.3456 3.2628V7.0001H34.5751Z"
            fill="white"
          />
          <path
            d="M6.4184 4.2433C6.43657 4.61025 6.37988 4.97705 6.25177 5.32138C6.12365 5.66572 5.9268 5.98037 5.6732 6.2462C5.38898 6.54096 5.04574 6.7724 4.66592 6.92537C4.2861 7.07834 3.87827 7.1494 3.4691 7.1339C3.05732 7.13759 2.64895 7.05892 2.26801 6.90253C1.88706 6.74614 1.54123 6.51517 1.25082 6.22321C0.960413 5.93125 0.731304 5.58418 0.576949 5.20241C0.422595 4.82063 0.346113 4.41186 0.352 4.0001C0.346159 3.58834 0.422668 3.17955 0.577033 2.79777C0.731398 2.41599 0.960502 2.06891 1.25089 1.77692C1.54128 1.48492 1.8871 1.25391 2.26803 1.09745C2.64895 0.940983 3.05731 0.862226 3.4691 0.865801C3.89248 0.864522 4.31162 0.95012 4.7006 1.1173C5.06186 1.26374 5.38342 1.49345 5.6391 1.7877L5.1117 2.3155C4.91072 2.07895 4.65809 1.89174 4.37329 1.76831C4.08849 1.64487 3.77913 1.58852 3.4691 1.6036C3.15702 1.60199 2.84782 1.66337 2.56003 1.78408C2.27223 1.9048 2.01176 2.08235 1.79421 2.30611C1.57666 2.52987 1.4065 2.79523 1.29394 3.08631C1.18137 3.37739 1.1287 3.68819 1.1391 4.0001C1.13166 4.4673 1.26312 4.92618 1.51682 5.31856C1.77052 5.71095 2.13503 6.01915 2.56412 6.2041C2.99322 6.38905 3.46757 6.44242 3.92703 6.35742C4.38649 6.27243 4.81036 6.05291 5.1449 5.7267C5.45279 5.39494 5.63126 4.96362 5.6478 4.5113H3.4691V3.7906H6.3764C6.40389 3.93994 6.41794 4.09145 6.4184 4.2433Z"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M11.0277 1.7374H8.2953V3.6397H10.7592V4.3605H8.2953V6.2628H11.0277V7.0001H7.5248V1.0001H11.0277V1.7374Z"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M14.2787 7.0001H13.5072V1.7374H11.8314V1.0001H15.9545V1.7374H14.2787V7.0001Z"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M18.9379 7.0001V1.0001H19.7084V7.0001H18.9379Z"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M23.1283 7.0001H22.3568V1.7374H20.6811V1.0001H24.8041V1.7374H23.1283V7.0001Z"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M32.6093 6.2247C32.0253 6.80695 31.2343 7.1339 30.4096 7.1339C29.5849 7.1339 28.7939 6.80695 28.2099 6.2247C27.921 5.93207 27.6939 5.58434 27.542 5.20217C27.3902 4.82001 27.3168 4.41122 27.3261 4.0001C27.3168 3.58899 27.3902 3.18019 27.542 2.79803C27.6939 2.41586 27.921 2.06813 28.2099 1.7755C28.4986 1.48677 28.8413 1.2578 29.2186 1.1017C29.5958 0.945602 30.0002 0.86544 30.4085 0.865802C30.8167 0.866164 31.2209 0.947044 31.5979 1.10381C31.9749 1.26058 32.3173 1.49016 32.6054 1.7794C32.8945 2.07126 33.1221 2.41821 33.2746 2.79968C33.4271 3.18115 33.5014 3.58937 33.4931 4.0001C33.5022 4.41118 33.4286 4.8199 33.2768 5.20203C33.125 5.58416 32.898 5.93192 32.6093 6.2247ZM28.7792 5.7223C29.2117 6.15409 29.7979 6.39661 30.4091 6.39661C31.0203 6.39661 31.6065 6.15409 32.039 5.7223C32.2608 5.49522 32.4343 5.22553 32.5489 4.92952C32.6636 4.63352 32.717 4.31734 32.706 4.0001C32.717 3.68286 32.6636 3.36669 32.5489 3.07068C32.4343 2.77467 32.2608 2.50498 32.039 2.2779C31.6065 1.84611 31.0203 1.60359 30.4091 1.60359C29.7979 1.60359 29.2117 1.84611 28.7792 2.2779C28.5577 2.50516 28.3845 2.77491 28.2701 3.07089C28.1556 3.36686 28.1022 3.68295 28.1132 4.0001C28.1022 4.31725 28.1556 4.63334 28.2701 4.92932C28.3845 5.22529 28.5577 5.49504 28.7792 5.7223Z"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M34.5751 7.0001V1.0001H35.5136L38.4296 5.6676H38.4628L38.4296 4.5113V1.0001H39.2011V7.0001H38.3964L35.3456 2.1065H35.3124L35.3456 3.2628V7.0001H34.5751Z"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M27.1357 15.7517C26.2952 15.7549 25.4745 16.007 24.7772 16.4763C24.0799 16.9456 23.5373 17.611 23.2178 18.3884C22.8984 19.1659 22.8165 20.0205 22.9824 20.8445C23.1483 21.6685 23.5547 22.4248 24.1501 23.018C24.7456 23.6112 25.5035 24.0147 26.3281 24.1775C27.1527 24.3403 28.007 24.2551 28.7832 23.9327C29.5595 23.6103 30.2228 23.0652 30.6894 22.3661C31.156 21.667 31.4051 20.8453 31.405 20.0048C31.4133 19.4426 31.3084 18.8845 31.0966 18.3637C30.8847 17.8429 30.5703 17.37 30.172 16.9732C29.7737 16.5764 29.2996 16.2638 28.778 16.0539C28.2564 15.8441 27.6979 15.7413 27.1357 15.7517ZM27.1357 22.5825C26.6181 22.6194 26.1014 22.4996 25.6528 22.2387C25.2042 21.9778 24.8445 21.5879 24.6207 21.1198C24.3968 20.6516 24.319 20.1269 24.3975 19.6139C24.476 19.101 24.7071 18.6235 25.0608 18.2438C25.4144 17.864 25.8742 17.5995 26.3803 17.4847C26.8864 17.3699 27.4153 17.4101 27.8982 17.6001C28.3811 17.7902 28.7956 18.1212 29.0877 18.5501C29.3799 18.9789 29.5361 19.4859 29.5361 20.0048C29.5519 20.3326 29.5018 20.6603 29.389 20.9685C29.2761 21.2767 29.1028 21.5592 28.8791 21.7994C28.6554 22.0396 28.386 22.2327 28.0866 22.3671C27.7872 22.5016 27.4639 22.5748 27.1357 22.5825ZM17.8223 15.7517C16.9818 15.7549 16.1611 16.007 15.4638 16.4763C14.7665 16.9455 14.2238 17.6109 13.9044 18.3883C13.5849 19.1658 13.503 20.0205 13.6689 20.8444C13.8348 21.6684 14.2411 22.4248 14.8366 23.018C15.4321 23.6112 16.1899 24.0147 17.0145 24.1775C17.8391 24.3403 18.6935 24.2551 19.4697 23.9327C20.246 23.6103 20.9093 23.0652 21.3759 22.3661C21.8425 21.667 22.0916 20.8453 22.0915 20.0048C22.0998 19.4426 21.9949 18.8845 21.7831 18.3637C21.5713 17.8429 21.2568 17.3701 20.8585 16.9733C20.4602 16.5765 19.9862 16.2638 19.4646 16.054C18.943 15.8441 18.3845 15.7413 17.8223 15.7517ZM17.8223 22.5825C17.3047 22.6194 16.788 22.4996 16.3394 22.2387C15.8908 21.9778 15.5311 21.5879 15.3073 21.1198C15.0834 20.6516 15.0056 20.1269 15.0841 19.6139C15.1626 19.101 15.3937 18.6235 15.7474 18.2438C16.101 17.864 16.5608 17.5995 17.0669 17.4847C17.573 17.3699 18.1019 17.4101 18.5848 17.6001C19.0677 17.7902 19.4822 18.1212 19.7743 18.5501C20.0665 18.9789 20.2227 19.4859 20.2227 20.0048C20.2385 20.3326 20.1884 20.6603 20.0756 20.9685C19.9628 21.2767 19.7894 21.5593 19.5657 21.7995C19.342 22.0397 19.0726 22.2327 18.7732 22.3672C18.4738 22.5016 18.1505 22.5749 17.8223 22.5825ZM6.74355 17.0567V18.861H11.0612C10.9989 19.7073 10.6526 20.5078 10.0784 21.1326C9.64576 21.5736 9.12543 21.9191 8.55102 22.1466C7.9766 22.3741 7.36087 22.4787 6.74355 22.4536C5.48153 22.4365 4.27699 21.9232 3.39058 21.0247C2.50418 20.1262 2.00721 18.9148 2.00721 17.6527C2.00721 16.3906 2.50418 15.1792 3.39058 14.2807C4.27699 13.3822 5.48153 12.8689 6.74355 12.8518C7.95576 12.836 9.12526 13.2991 9.99795 14.1406L11.2706 12.8679C10.6752 12.2784 9.96806 11.8137 9.19068 11.5011C8.4133 11.1885 7.58133 11.0343 6.74355 11.0474C5.86803 11.0347 4.99872 11.1961 4.18616 11.5223C3.3736 11.8485 2.63399 12.3331 2.01036 12.9477C1.38672 13.5623 0.891496 14.2948 0.553474 15.1025C0.215453 15.9102 0.0413818 16.7771 0.0413818 17.6527C0.0413818 18.5283 0.215453 19.3952 0.553474 20.2029C0.891496 21.0106 1.38672 21.7431 2.01036 22.3577C2.63399 22.9723 3.3736 23.4569 4.18616 23.7831C4.99872 24.1093 5.86803 24.2707 6.74355 24.258C7.59901 24.2935 8.45223 24.1466 9.24661 23.8272C10.041 23.5078 10.7584 23.0231 11.3511 22.4053C12.4036 21.2566 12.9645 19.7415 12.9139 18.1844C12.9181 17.8063 12.8857 17.4286 12.8171 17.0567H6.74355ZM52.0518 18.4582C51.7962 17.6878 51.3097 17.0148 50.6583 16.5306C50.0069 16.0464 49.2222 15.7744 48.4108 15.7517C47.8644 15.7551 47.3243 15.8693 46.8232 16.0873C46.3221 16.3053 45.8704 16.6227 45.4955 17.0203C45.1205 17.4178 44.8301 17.8873 44.6417 18.4002C44.4533 18.9132 44.3709 19.4591 44.3994 20.0048C44.3871 20.564 44.4876 21.1199 44.695 21.6394C44.9024 22.1588 45.2123 22.6312 45.6063 23.0282C46.0002 23.4252 46.4702 23.7387 46.9881 23.95C47.5059 24.1613 48.0611 24.2661 48.6203 24.258C49.321 24.2619 50.0116 24.0917 50.6302 23.7627C51.2489 23.4337 51.7761 22.9562 52.1645 22.3731L50.7146 21.4065C50.4974 21.7672 50.1902 22.0653 49.823 22.2715C49.4559 22.4776 49.0414 22.5848 48.6203 22.5825C48.187 22.5991 47.7588 22.4851 47.391 22.2552C47.0233 22.0254 46.7331 21.6904 46.5581 21.2937L52.2452 18.9416L52.0518 18.4582ZM46.2521 19.876C46.2321 19.5664 46.274 19.256 46.3754 18.9628C46.4768 18.6697 46.6357 18.3997 46.8427 18.1687C47.0497 17.9376 47.3007 17.7502 47.581 17.6174C47.8614 17.4845 48.1654 17.4089 48.4753 17.395C48.7979 17.3738 49.1197 17.448 49.4005 17.6084C49.6813 17.7689 49.9086 18.0084 50.0541 18.2972L46.2521 19.876ZM41.6283 24.0002H43.4971V11.4986H41.6283V24.0002ZM38.5673 16.7022H38.5029C38.2188 16.3935 37.8721 16.149 37.4859 15.9851C37.0997 15.8212 36.683 15.7416 36.2635 15.7517C35.1669 15.7984 34.1306 16.2669 33.3711 17.0594C32.6116 17.8519 32.1876 18.9072 32.1876 20.0049C32.1876 21.1025 32.6116 22.1578 33.3711 22.9503C34.1306 23.7428 35.1669 24.2113 36.2635 24.258C36.6846 24.2692 37.1031 24.1885 37.4898 24.0216C37.8766 23.8547 38.2223 23.6055 38.5029 23.2914H38.5673V23.9036C38.5673 25.5308 37.6974 26.4007 36.2957 26.4007C35.8286 26.3895 35.3754 26.2395 34.9938 25.9698C34.6122 25.7001 34.3196 25.3229 34.1531 24.8863L32.5259 25.563C32.8326 26.3097 33.3553 26.9478 34.0269 27.3955C34.6985 27.8433 35.4886 28.0803 36.2957 28.0762C38.4868 28.0762 40.3395 26.7874 40.3395 23.6458V16.0094H38.5673V16.7022ZM36.4247 22.5825C35.7788 22.5277 35.177 22.2324 34.7384 21.7551C34.2998 21.2777 34.0564 20.6531 34.0564 20.0049C34.0564 19.3566 34.2998 18.732 34.7384 18.2546C35.177 17.7773 35.7788 17.482 36.4247 17.4272C36.7461 17.4429 37.061 17.5231 37.3507 17.6631C37.6404 17.8031 37.8989 18 38.1109 18.242C38.3229 18.4841 38.4839 18.7663 38.5845 19.0719C38.6851 19.3775 38.7231 19.7003 38.6962 20.0209C38.7214 20.3395 38.682 20.66 38.5804 20.963C38.4788 21.2661 38.3172 21.5455 38.1051 21.7847C37.8931 22.0238 37.635 22.2177 37.3462 22.3548C37.0575 22.4919 36.7441 22.5693 36.4247 22.5825ZM60.8057 11.4988H56.3345V24.0002H58.2002V19.2638H60.8057C61.3335 19.2927 61.8616 19.2138 62.3578 19.0317C62.854 18.8497 63.3079 18.5684 63.6917 18.205C64.0756 17.8417 64.3813 17.4038 64.5902 16.9183C64.7992 16.4328 64.9069 15.9098 64.9069 15.3813C64.9069 14.8528 64.7992 14.3298 64.5902 13.8443C64.3813 13.3588 64.0756 12.921 63.6917 12.5576C63.3079 12.1942 62.854 11.9129 62.3578 11.7309C61.8616 11.5488 61.3335 11.4699 60.8057 11.4988ZM60.8539 17.524H58.2002V13.2387H60.8539C61.1391 13.2328 61.4225 13.2838 61.6876 13.3889C61.9527 13.4939 62.1942 13.6508 62.398 13.8503C62.6017 14.0499 62.7636 14.2881 62.874 14.551C62.9845 14.8139 63.0415 15.0962 63.0415 15.3814C63.0415 15.6665 62.9845 15.9488 62.874 16.2117C62.7636 16.4746 62.6017 16.7128 62.398 16.9124C62.1942 17.1119 61.9527 17.2688 61.6876 17.3738C61.4225 17.4789 61.1391 17.5299 60.8539 17.524ZM72.3856 15.7287C71.7046 15.6889 71.0268 15.8489 70.4354 16.1889C69.844 16.5288 69.3647 17.0341 69.0563 17.6426L70.7129 18.3342C70.8772 18.0322 71.1259 17.7846 71.4287 17.6218C71.7315 17.4589 72.0752 17.3879 72.4177 17.4174C72.8911 17.3712 73.3634 17.5145 73.7312 17.816C74.0991 18.1175 74.3323 18.5525 74.3799 19.0257V19.1544C73.7808 18.8361 73.1123 18.6703 72.4338 18.6719C70.6486 18.6719 68.8312 19.653 68.8312 21.4865C68.8486 21.8729 68.9434 22.2519 69.11 22.601C69.2766 22.95 69.5116 23.2621 69.8011 23.5186C70.0906 23.7751 70.4287 23.9709 70.7953 24.0942C71.1619 24.2176 71.5496 24.266 71.9352 24.2367C72.4051 24.2644 72.8737 24.1656 73.2923 23.9506C73.711 23.7356 74.0644 23.4123 74.3156 23.0144H74.3799V23.9794H76.1812V19.1866C76.1812 16.9671 74.5246 15.7287 72.3856 15.7287ZM72.1604 22.5801C71.5492 22.5801 70.6968 22.2746 70.6968 21.5186C70.6968 20.5537 71.7583 20.1837 72.6751 20.1837C73.2706 20.1678 73.8594 20.3123 74.3799 20.6019C74.3114 21.1441 74.0489 21.6432 73.6409 22.0069C73.2328 22.3705 72.707 22.5742 72.1604 22.5801ZM82.7432 16.0021L80.6041 21.4221H80.5397L78.3203 16.0021H76.3099L79.6391 23.5773L77.7413 27.7911H79.6873L84.8179 16.0021H82.7432ZM65.9362 24.0002H67.8018V11.4988H65.9362V24.0002Z"
            fill="white"
          />
        </svg>
      }
    />
  );
};

export const AppleBadge = (props: BadgesProps) => {
  return (
    <Badges
      {...props}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="23"
          viewBox="0 0 18 23"
          fill="none"
        >
          <path
            d="M14.7973 12.3007C14.8081 11.466 15.0298 10.6476 15.4418 9.92169C15.8538 9.19573 16.4428 8.58579 17.1539 8.14862C16.7021 7.50346 16.1062 6.97252 15.4134 6.59797C14.7205 6.22341 13.9499 6.01557 13.1627 5.99094C11.4835 5.81468 9.85552 6.99577 8.99981 6.99577C8.12754 6.99577 6.81004 6.00844 5.39131 6.03763C4.47364 6.06728 3.57929 6.33413 2.79541 6.81219C2.01154 7.29025 1.36486 7.96321 0.918393 8.7655C-1.01561 12.1139 0.426982 17.035 2.27959 19.7416C3.20649 21.0669 4.28977 22.5474 5.70722 22.4949C7.09428 22.4374 7.61232 21.6104 9.28662 21.6104C10.9454 21.6104 11.4314 22.4949 12.8776 22.4615C14.366 22.4373 15.3038 21.1303 16.1981 19.7924C16.8641 18.848 17.3766 17.8043 17.7166 16.6999C16.8518 16.3341 16.1139 15.7219 15.5948 14.9396C15.0757 14.1574 14.7983 13.2395 14.7973 12.3007Z"
            fill="white"
          />
          <path
            d="M12.0656 4.21089C12.8772 3.23668 13.277 1.9845 13.1802 0.720268C11.9403 0.850489 10.7951 1.44305 9.97259 2.37988C9.57045 2.83754 9.26245 3.36998 9.0662 3.94675C8.86996 4.52352 8.78931 5.13331 8.82888 5.74127C9.44902 5.74765 10.0625 5.61324 10.6232 5.34815C11.1838 5.08307 11.6771 4.69422 12.0656 4.21089Z"
            fill="white"
          />
        </svg>
      }
      text={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="26"
          viewBox="0 0 76 26"
          fill="none"
        >
          <path
            d="M8.33069 19.1397H3.59729L2.46057 22.4961H0.455688L4.93909 10.0781H7.02209L11.5055 22.4961H9.46642L8.33069 19.1397ZM4.08752 17.5908H7.83952L5.98991 12.1436H5.93815L4.08752 17.5908Z"
            fill="white"
          />
          <path
            d="M21.1881 17.9697C21.1881 20.7832 19.6823 22.5908 17.4098 22.5908C16.8341 22.6209 16.2616 22.4883 15.7578 22.2082C15.254 21.9281 14.8393 21.5117 14.5612 21.0068H14.5182V25.4912H12.6598V13.4424H14.4586V14.9482H14.4928C14.7838 14.4458 15.2055 14.0316 15.7131 13.7497C16.2207 13.4679 16.7953 13.3289 17.3756 13.3477C19.6734 13.3477 21.1881 15.1641 21.1881 17.9697ZM19.278 17.9697C19.278 16.1367 18.3307 14.9316 16.8854 14.9316C15.4654 14.9316 14.5104 16.1621 14.5104 17.9697C14.5104 19.794 15.4654 21.0156 16.8854 21.0156C18.3307 21.0156 19.278 19.8193 19.278 17.9697Z"
            fill="white"
          />
          <path
            d="M31.153 17.9697C31.153 20.7832 29.6471 22.5908 27.3746 22.5908C26.799 22.6209 26.2265 22.4883 25.7227 22.2082C25.2189 21.9281 24.8042 21.5117 24.526 21.0068H24.483V25.4912H22.6246V13.4424H24.4234V14.9482H24.4576C24.7486 14.4458 25.1703 14.0316 25.6779 13.7497C26.1856 13.4679 26.7601 13.3289 27.3404 13.3477C29.6383 13.3477 31.153 15.1641 31.153 17.9697ZM29.2428 17.9697C29.2428 16.1367 28.2955 14.9316 26.8502 14.9316C25.4303 14.9316 24.4752 16.1621 24.4752 17.9697C24.4752 19.794 25.4303 21.0156 26.8502 21.0156C28.2955 21.0156 29.2428 19.8193 29.2428 17.9697Z"
            fill="white"
          />
          <path
            d="M37.7389 19.0361C37.8766 20.2676 39.0729 21.0761 40.7076 21.0761C42.2741 21.0761 43.401 20.2675 43.401 19.1572C43.401 18.1933 42.7213 17.6162 41.1119 17.2207L39.5026 16.833C37.2223 16.2822 36.1637 15.2158 36.1637 13.4853C36.1637 11.3427 38.0309 9.87104 40.6823 9.87104C43.3063 9.87104 45.1051 11.3427 45.1656 13.4853H43.2896C43.1773 12.246 42.1529 11.498 40.6559 11.498C39.1588 11.498 38.1344 12.2548 38.1344 13.3564C38.1344 14.2343 38.7887 14.7509 40.3893 15.1464L41.7574 15.4823C44.3053 16.0849 45.3639 17.1083 45.3639 18.9247C45.3639 21.248 43.5133 22.703 40.5699 22.703C37.816 22.703 35.9566 21.2821 35.8365 19.036L37.7389 19.0361Z"
            fill="white"
          />
          <path
            d="M49.3746 11.2998V13.4424H51.0963V14.9141H49.3746V19.9053C49.3746 20.6807 49.7194 21.042 50.4762 21.042C50.6806 21.0384 50.8846 21.0241 51.0875 20.999V22.4619C50.7472 22.5255 50.4014 22.5543 50.0553 22.5478C48.2223 22.5478 47.5074 21.8593 47.5074 20.1035V14.9141H46.191V13.4424H47.5074V11.2998H49.3746Z"
            fill="white"
          />
          <path
            d="M52.0934 17.9697C52.0934 15.1211 53.7711 13.3311 56.3874 13.3311C59.0124 13.3311 60.6823 15.1211 60.6823 17.9697C60.6823 20.8262 59.0212 22.6084 56.3874 22.6084C53.7545 22.6084 52.0934 20.8262 52.0934 17.9697ZM58.7887 17.9697C58.7887 16.0156 57.8932 14.8623 56.3874 14.8623C54.8815 14.8623 53.987 16.0244 53.987 17.9697C53.987 19.9316 54.8815 21.0762 56.3874 21.0762C57.8932 21.0762 58.7887 19.9316 58.7887 17.9697Z"
            fill="white"
          />
          <path
            d="M62.2145 13.4424H63.9869V14.9834H64.0299C64.1499 14.5021 64.4318 14.0768 64.8284 13.7789C65.225 13.481 65.712 13.3287 66.2077 13.3476C66.4218 13.3469 66.6354 13.3702 66.8444 13.417V15.1553C66.574 15.0726 66.292 15.0347 66.0094 15.043C65.7394 15.032 65.4703 15.0796 65.2204 15.1825C64.9706 15.2854 64.746 15.4411 64.562 15.639C64.378 15.8369 64.239 16.0723 64.1546 16.3289C64.0702 16.5856 64.0423 16.8575 64.0729 17.126V22.4961H62.2145L62.2145 13.4424Z"
            fill="white"
          />
          <path
            d="M75.4127 19.8369C75.1627 21.4805 73.5621 22.6084 71.5143 22.6084C68.8805 22.6084 67.2457 20.8437 67.2457 18.0127C67.2457 15.1728 68.8893 13.3311 71.4362 13.3311C73.941 13.3311 75.5162 15.0517 75.5162 17.7969V18.4336H69.1217V18.5459C69.0922 18.8791 69.1339 19.2148 69.2441 19.5306C69.3543 19.8464 69.5304 20.1352 69.7607 20.3778C69.9911 20.6203 70.2704 20.8111 70.5802 20.9374C70.8899 21.0637 71.223 21.1226 71.5573 21.1103C71.9964 21.1515 72.4371 21.0498 72.8138 20.8203C73.1906 20.5909 73.4831 20.246 73.6481 19.8369L75.4127 19.8369ZM69.1305 17.1348H73.6569C73.6735 16.8352 73.6281 16.5354 73.5234 16.2541C73.4188 15.9729 73.2571 15.7164 73.0486 15.5006C72.84 15.2849 72.5892 15.1145 72.3117 15.0003C72.0342 14.8861 71.7361 14.8305 71.4362 14.8369C71.1335 14.8351 70.8335 14.8932 70.5535 15.008C70.2734 15.1227 70.0189 15.2918 69.8045 15.5054C69.5902 15.7191 69.4203 15.973 69.3046 16.2527C69.1889 16.5323 69.1297 16.8321 69.1305 17.1348Z"
            fill="white"
          />
          <path
            d="M3.85461 0.731003C4.24422 0.703044 4.63519 0.761904 4.9993 0.903337C5.36341 1.04477 5.6916 1.26525 5.96018 1.54888C6.22877 1.8325 6.43106 2.1722 6.55246 2.54347C6.67386 2.91474 6.71135 3.30833 6.66223 3.69584C6.66223 5.60209 5.63196 6.69784 3.85461 6.69784H1.69934V0.731003H3.85461ZM2.62609 5.854H3.75109C4.0295 5.87065 4.30811 5.825 4.56665 5.72038C4.82519 5.61577 5.05715 5.45482 5.24564 5.24925C5.43413 5.04369 5.57441 4.79868 5.65628 4.53206C5.73814 4.26544 5.75952 3.98393 5.71886 3.708C5.75657 3.43317 5.73302 3.1534 5.6499 2.88873C5.56678 2.62407 5.42615 2.38107 5.23809 2.17714C5.05003 1.97321 4.81918 1.8134 4.5621 1.70916C4.30502 1.60493 4.02807 1.55884 3.75109 1.57421H2.62609V5.854Z"
            fill="white"
          />
          <path
            d="M7.7091 4.44434C7.68079 4.14843 7.71464 3.84986 7.80848 3.56779C7.90232 3.28572 8.05408 3.02638 8.25402 2.80639C8.45396 2.58641 8.69768 2.41065 8.96953 2.29037C9.24138 2.1701 9.53537 2.10797 9.83263 2.10797C10.1299 2.10797 10.4239 2.1701 10.6957 2.29037C10.9676 2.41065 11.2113 2.58641 11.4112 2.80639C11.6112 3.02638 11.7629 3.28572 11.8568 3.56779C11.9506 3.84986 11.9845 4.14843 11.9562 4.44434C11.985 4.74057 11.9516 5.03955 11.858 5.32207C11.7644 5.6046 11.6127 5.86441 11.4127 6.08483C11.2127 6.30524 10.9688 6.48138 10.6967 6.60191C10.4246 6.72245 10.1303 6.78472 9.83263 6.78472C9.53501 6.78472 9.24068 6.72245 8.96856 6.60191C8.69643 6.48138 8.45254 6.30524 8.25255 6.08483C8.05255 5.86441 7.90089 5.6046 7.80729 5.32207C7.7137 5.03955 7.68025 4.74057 7.7091 4.44434ZM11.0421 4.44434C11.0421 3.46827 10.6036 2.89747 9.8341 2.89747C9.06164 2.89747 8.6271 3.46827 8.6271 4.44435C8.6271 5.42824 9.06167 5.99464 9.8341 5.99464C10.6036 5.99463 11.0421 5.42432 11.0421 4.44434Z"
            fill="white"
          />
          <path
            d="M17.6017 6.69775H16.6798L15.7491 3.38134H15.6788L14.7521 6.69775H13.839L12.5978 2.19482H13.4991L14.3058 5.63082H14.3722L15.298 2.19482H16.1505L17.0763 5.63082H17.1466L17.9493 2.19482H18.838L17.6017 6.69775Z"
            fill="white"
          />
          <path
            d="M19.882 2.19482H20.7374V2.91015H20.8038C20.9165 2.65323 21.1065 2.43786 21.3474 2.29405C21.5882 2.15025 21.868 2.08517 22.1476 2.1079C22.3667 2.09143 22.5867 2.12447 22.7913 2.20456C22.9959 2.28466 23.1798 2.40976 23.3295 2.57061C23.4792 2.73145 23.5908 2.92391 23.656 3.13373C23.7212 3.34355 23.7383 3.56535 23.7062 3.7827V6.6977H22.8175V4.00586C22.8175 3.28223 22.5031 2.92236 21.8458 2.92236C21.6971 2.91544 21.5486 2.94075 21.4105 2.99658C21.2724 3.05241 21.1481 3.13744 21.046 3.24582C20.9438 3.35421 20.8664 3.48339 20.8188 3.62452C20.7713 3.76565 20.7549 3.91539 20.7706 4.06347V6.69775H19.882L19.882 2.19482Z"
            fill="white"
          />
          <path
            d="M25.1222 0.437004H26.0109V6.69774H25.1222V0.437004Z"
            fill="white"
          />
          <path
            d="M27.2462 4.44434C27.2179 4.14841 27.2518 3.84982 27.3457 3.56774C27.4395 3.28566 27.5913 3.02631 27.7913 2.80632C27.9912 2.58634 28.235 2.41057 28.5068 2.29029C28.7787 2.17001 29.0727 2.10788 29.37 2.10788C29.6673 2.10788 29.9613 2.17001 30.2332 2.29029C30.505 2.41057 30.7487 2.58634 30.9487 2.80632C31.1487 3.02631 31.3005 3.28566 31.3943 3.56774C31.4882 3.84982 31.5221 4.14841 31.4938 4.44434C31.5226 4.74058 31.4891 5.03956 31.3955 5.32209C31.3019 5.60461 31.1502 5.86442 30.9501 6.08483C30.7501 6.30524 30.5062 6.48137 30.2341 6.60189C29.962 6.72242 29.6676 6.78469 29.37 6.78469C29.0724 6.78469 28.778 6.72242 28.5059 6.60189C28.2337 6.48137 27.9898 6.30524 27.7898 6.08483C27.5898 5.86442 27.4381 5.60461 27.3445 5.32209C27.2509 5.03956 27.2174 4.74058 27.2462 4.44434ZM30.5792 4.44434C30.5792 3.46827 30.1407 2.89747 29.3712 2.89747C28.5987 2.89747 28.1642 3.46827 28.1642 4.44435C28.1642 5.42824 28.5988 5.99464 29.3712 5.99464C30.1407 5.99463 30.5792 5.42432 30.5792 4.44434Z"
            fill="white"
          />
          <path
            d="M32.4293 5.42432C32.4293 4.61377 33.0328 4.14649 34.1041 4.08008L35.3239 4.00977V3.6211C35.3239 3.14551 35.0094 2.87696 34.402 2.87696C33.9059 2.87696 33.5621 3.05909 33.4635 3.37745H32.6031C32.694 2.60401 33.4215 2.10792 34.443 2.10792C35.5719 2.10792 36.2086 2.66992 36.2086 3.6211V6.69776H35.3531V6.06495H35.2828C35.1401 6.29195 34.9397 6.47699 34.7021 6.60121C34.4645 6.72542 34.1981 6.78434 33.9303 6.77195C33.7413 6.79162 33.5502 6.77145 33.3694 6.71275C33.1887 6.65405 33.0222 6.55813 32.8808 6.43116C32.7394 6.30419 32.6262 6.14899 32.5484 5.97558C32.4706 5.80216 32.4301 5.61438 32.4293 5.42432ZM35.3239 5.03955V4.66309L34.2242 4.7334C33.6041 4.7749 33.3229 4.98584 33.3229 5.38281C33.3229 5.78808 33.6744 6.02392 34.1579 6.02392C34.2995 6.03826 34.4426 6.02396 34.5786 5.98187C34.7146 5.93978 34.8408 5.87076 34.9495 5.77892C35.0583 5.68708 35.1475 5.57429 35.2118 5.44727C35.2761 5.32025 35.3142 5.1816 35.3239 5.03955Z"
            fill="white"
          />
          <path
            d="M37.3766 4.44434C37.3766 3.02149 38.108 2.12012 39.2457 2.12012C39.5271 2.10716 39.8064 2.17456 40.051 2.31446C40.2955 2.45435 40.4951 2.66096 40.6266 2.91012H40.693V0.437004H41.5817V6.69774H40.7301V5.98631H40.6598C40.5182 6.2338 40.3116 6.43784 40.0623 6.57632C39.8131 6.7148 39.5307 6.78246 39.2457 6.77195C38.1002 6.772 37.3766 5.87061 37.3766 4.44434ZM38.2946 4.44434C38.2946 5.39942 38.7448 5.97413 39.4977 5.97413C40.2467 5.97413 40.7096 5.39113 40.7096 4.44825C40.7096 3.50977 40.2419 2.91846 39.4977 2.91846C38.7496 2.91846 38.2946 3.49707 38.2946 4.44434Z"
            fill="white"
          />
          <path
            d="M45.2584 4.44434C45.2301 4.14843 45.264 3.84986 45.3578 3.56779C45.4516 3.28572 45.6034 3.02638 45.8033 2.80639C46.0033 2.58641 46.247 2.41065 46.5188 2.29037C46.7907 2.1701 47.0847 2.10797 47.382 2.10797C47.6792 2.10797 47.9732 2.1701 48.2451 2.29037C48.5169 2.41065 48.7606 2.58641 48.9606 2.80639C49.1605 3.02638 49.3123 3.28572 49.4061 3.56779C49.4999 3.84986 49.5338 4.14843 49.5055 4.44434C49.5343 4.74057 49.5009 5.03955 49.4073 5.32207C49.3137 5.6046 49.162 5.86441 48.962 6.08483C48.762 6.30524 48.5182 6.48138 48.246 6.60191C47.9739 6.72245 47.6796 6.78472 47.382 6.78472C47.0843 6.78472 46.79 6.72245 46.5179 6.60191C46.2457 6.48138 46.0019 6.30524 45.8019 6.08483C45.6019 5.86441 45.4502 5.6046 45.3566 5.32207C45.263 5.03955 45.2296 4.74057 45.2584 4.44434ZM48.5914 4.44434C48.5914 3.46827 48.1529 2.89747 47.3834 2.89747C46.611 2.89747 46.1764 3.46827 46.1764 4.44435C46.1764 5.42824 46.611 5.99464 47.3834 5.99464C48.153 5.99463 48.5914 5.42432 48.5914 4.44434Z"
            fill="white"
          />
          <path
            d="M50.6979 2.19482H51.5533V2.91015H51.6198C51.7324 2.65323 51.9224 2.43786 52.1633 2.29405C52.4041 2.15025 52.6839 2.08517 52.9635 2.1079C53.1826 2.09143 53.4026 2.12447 53.6072 2.20456C53.8118 2.28466 53.9957 2.40976 54.1454 2.57061C54.2951 2.73145 54.4067 2.92391 54.4719 3.13373C54.5371 3.34355 54.5542 3.56535 54.5221 3.7827V6.6977H53.6334V4.00586C53.6334 3.28223 53.319 2.92236 52.6617 2.92236C52.513 2.91544 52.3645 2.94075 52.2264 2.99658C52.0884 3.05241 51.964 3.13744 51.8619 3.24582C51.7598 3.35421 51.6823 3.48339 51.6348 3.62452C51.5872 3.76565 51.5708 3.91539 51.5865 4.06347V6.69775H50.6979V2.19482Z"
            fill="white"
          />
          <path
            d="M59.5436 1.07373V2.21533H60.5192V2.96387H59.5436V5.2793C59.5436 5.75098 59.7379 5.95752 60.1803 5.95752C60.2936 5.95716 60.4067 5.95031 60.5192 5.93701V6.67724C60.3596 6.70579 60.1979 6.72098 60.0358 6.72265C59.0475 6.72265 58.6539 6.37499 58.6539 5.50683V2.96383H57.9391V2.21529H58.6539V1.07373H59.5436Z"
            fill="white"
          />
          <path
            d="M61.733 0.437004H62.6139V2.91845H62.6842C62.8023 2.65913 62.9976 2.44254 63.2432 2.29819C63.4889 2.15385 63.7732 2.08876 64.0572 2.11181C64.2752 2.09995 64.493 2.13634 64.6953 2.21838C64.8976 2.30043 65.0793 2.4261 65.2274 2.58644C65.3755 2.74678 65.4864 2.93783 65.5522 3.14596C65.618 3.3541 65.637 3.57418 65.608 3.79052V6.69775H64.7184V4.00975C64.7184 3.29051 64.3834 2.92625 63.7555 2.92625C63.6028 2.91373 63.4492 2.93473 63.3054 2.98778C63.1616 3.04083 63.0312 3.12466 62.9232 3.2334C62.8152 3.34213 62.7322 3.47316 62.6802 3.61729C62.6281 3.76143 62.6082 3.9152 62.6217 4.06785V6.69773H61.7331L61.733 0.437004Z"
            fill="white"
          />
          <path
            d="M70.7897 5.48193C70.6689 5.89347 70.4073 6.24946 70.0506 6.48761C69.694 6.72576 69.2649 6.83091 68.8385 6.78466C68.5418 6.7925 68.247 6.73567 67.9745 6.61815C67.702 6.50062 67.4584 6.3252 67.2604 6.10406C67.0625 5.88292 66.9151 5.62136 66.8284 5.33754C66.7417 5.05372 66.7178 4.75443 66.7584 4.46045C66.7189 4.16557 66.7432 3.86564 66.8297 3.58096C66.9162 3.29629 67.0628 3.03352 67.2597 2.81045C67.4566 2.58738 67.6991 2.40921 67.9708 2.288C68.2425 2.16679 68.5371 2.10538 68.8346 2.10791C70.0875 2.10791 70.8434 2.96391 70.8434 4.37791V4.688H67.6637V4.7378C67.6498 4.90305 67.6705 5.06938 67.7247 5.22613C67.7788 5.38288 67.8651 5.52659 67.978 5.64804C68.0909 5.7695 68.2279 5.86602 68.3803 5.93142C68.5327 5.99682 68.6971 6.02964 68.8629 6.0278C69.0755 6.05332 69.2908 6.01505 69.4816 5.91784C69.6724 5.82063 69.8299 5.66889 69.9342 5.4819L70.7897 5.48193ZM67.6637 4.03076H69.9381C69.9493 3.87964 69.9287 3.72784 69.8778 3.58512C69.8268 3.4424 69.7466 3.31192 69.6422 3.20206C69.5378 3.09221 69.4116 3.0054 69.2717 2.94722C69.1317 2.88905 68.9812 2.86079 68.8297 2.86426C68.676 2.86233 68.5235 2.89119 68.3811 2.94914C68.2387 3.00708 68.1094 3.09294 68.0007 3.20165C67.8921 3.31037 67.8063 3.43973 67.7484 3.58213C67.6905 3.72452 67.6617 3.87707 67.6637 4.03076Z"
            fill="white"
          />
        </svg>
      }
    />
  );
};

export default Badges;
