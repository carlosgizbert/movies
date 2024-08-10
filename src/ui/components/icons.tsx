import { SVGAttributes } from "react"

export const StarFilled = (props: SVGAttributes<SVGPathElement>) => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 18.4665L5.8 21.6665L7 14.7665L2 9.9665L9 8.9665L12 2.6665" fill="#EAB308"/>
  <path d="M12 2.6665L15.09 8.9265L22 9.9365L17 14.8065L18.18 21.6865L12 18.4365L5.82 21.6865L7 14.8065L2 9.9365L8.91 8.9265L12 2.6665Z" fill="#EAB308" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} />
  </svg>
)

export const StarSemi = (props: SVGAttributes<SVGPathElement>) => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.6665L15.09 8.9265L22 9.9365L17 14.8065L18.18 21.6865L12 18.4365L5.82 21.6865L7 14.8065L2 9.9365L8.91 8.9265L12 2.6665Z" stroke="#313131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 18.4665L5.8 21.6665L7 14.7665L2 9.9665L9 8.9665L12 2.6665" fill="#EAB308"/>
  <path d="M12 18.4665L5.8 21.6665L7 14.7665L2 9.9665L9 8.9665L12 2.6665V18.4665Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} />
  </svg>
)

export const StarDefault = (props: SVGAttributes<SVGPathElement>) => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.6665L15.09 8.9265L22 9.9365L17 14.8065L18.18 21.6865L12 18.4365L5.82 21.6865L7 14.8065L2 9.9365L8.91 8.9265L12 2.6665Z" stroke="#313131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} />
  </svg>
)

export const Play = (props: SVGAttributes<SVGPathElement>) => (
  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.99834C1 1.20717 1.87525 0.72933 2.54076 1.15716L11.3582 6.82549C11.9705 7.21913 11.9705 8.11421 11.3582 8.50785L2.54076 14.1762C1.87524 14.604 1 14.1262 1 13.335V1.99834Z" fill="#EEEEEE" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} />
  </svg>
)