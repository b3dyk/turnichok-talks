interface Params {
  isUnread: boolean;
}

export const Bell = ({ isUnread }: Params) => (
  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 35.75C21.2875 35.75 22.75 34.2875 22.75 32.5H16.25C16.25 34.2875 17.7125 35.75 19.5 35.75ZM29.25 26V17.875C29.25 12.8863 26.6012 8.71 21.9375 7.605V6.5C21.9375 5.15125 20.8488 4.0625 19.5 4.0625C18.1512 4.0625 17.0625 5.15125 17.0625 6.5V7.605C12.415 8.71 9.75 12.87 9.75 17.875V26L6.5 29.25V30.875H32.5V29.25L29.25 26ZM26 27.625H13V17.875C13 13.845 15.4537 10.5625 19.5 10.5625C23.5462 10.5625 26 13.845 26 17.875V27.625Z" fill="#DBDBDB"/>
    {isUnread && <circle cx="28" cy="11" r="4" fill="#E04B4B" stroke="black" strokeWidth="2"/>}
  </svg>
);
