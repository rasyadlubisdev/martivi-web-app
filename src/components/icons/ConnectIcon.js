import "./../../styles.css";

const ConnectIcon = ({ click, location, path }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={location.pathname == path ? "nav-fill-active" : "nav-fill"}
        d="M15.6002 7.2001C15.6002 8.15488 15.2209 9.07055 14.5458 9.74568C13.8706 10.4208 12.955 10.8001 12.0002 10.8001C11.0454 10.8001 10.1297 10.4208 9.45461 9.74568C8.77948 9.07055 8.4002 8.15488 8.4002 7.2001C8.4002 6.24532 8.77948 5.32964 9.45461 4.65451C10.1297 3.97938 11.0454 3.6001 12.0002 3.6001C12.955 3.6001 13.8706 3.97938 14.5458 4.65451C15.2209 5.32964 15.6002 6.24532 15.6002 7.2001ZM21.6002 9.6001C21.6002 10.2366 21.3473 10.8471 20.8973 11.2972C20.4472 11.7472 19.8367 12.0001 19.2002 12.0001C18.5637 12.0001 17.9532 11.7472 17.5031 11.2972C17.0531 10.8471 16.8002 10.2366 16.8002 9.6001C16.8002 8.96358 17.0531 8.35313 17.5031 7.90304C17.9532 7.45295 18.5637 7.2001 19.2002 7.2001C19.8367 7.2001 20.4472 7.45295 20.8973 7.90304C21.3473 8.35313 21.6002 8.96358 21.6002 9.6001ZM16.8002 18.0001C16.8002 16.7271 16.2945 15.5062 15.3943 14.606C14.4941 13.7058 13.2732 13.2001 12.0002 13.2001C10.7272 13.2001 9.50626 13.7058 8.60608 14.606C7.70591 15.5062 7.2002 16.7271 7.2002 18.0001V21.6001H16.8002V18.0001ZM7.2002 9.6001C7.2002 10.2366 6.94734 10.8471 6.49725 11.2972C6.04717 11.7472 5.43672 12.0001 4.8002 12.0001C4.16368 12.0001 3.55323 11.7472 3.10314 11.2972C2.65305 10.8471 2.4002 10.2366 2.4002 9.6001C2.4002 8.96358 2.65305 8.35313 3.10314 7.90304C3.55323 7.45295 4.16368 7.2001 4.8002 7.2001C5.43672 7.2001 6.04717 7.45295 6.49725 7.90304C6.94734 8.35313 7.2002 8.96358 7.2002 9.6001ZM19.2002 21.6001V18.0001C19.2019 16.78 18.8921 15.5797 18.3002 14.5129C18.8322 14.3767 19.3883 14.3639 19.926 14.4754C20.4638 14.5868 20.9689 14.8196 21.403 15.156C21.8371 15.4924 22.1886 15.9235 22.4307 16.4164C22.6729 16.9092 22.7992 17.4509 22.8002 18.0001V21.6001H19.2002ZM5.7002 14.5129C5.10829 15.5798 4.79851 16.78 4.8002 18.0001V21.6001H1.2002V18.0001C1.19996 17.4505 1.32555 16.9082 1.56733 16.4147C1.80911 15.9212 2.16067 15.4896 2.59506 15.153C3.02944 14.8164 3.53513 14.5837 4.07337 14.4727C4.6116 14.3618 5.16809 14.3755 5.7002 14.5129Z"
      />
    </svg>
  );
};

export default ConnectIcon;