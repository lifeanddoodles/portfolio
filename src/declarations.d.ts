declare module '*.module.css'
declare module '*.module.scss'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg' {
  const content: string
  export default content
}
declare global {
  function encodeURIComponent(uriComponent: string | number | boolean): string
}
declare module '@heroicons/react/solid'
