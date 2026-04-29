import desktopBackgroundImg from "./assets/home/background-home-desktop.jpg";

export default function pageWrapper({ children }) {
  return (
    <>
      <div
        className="page-wrapper"
        style={{ backgroundImage: `url(${desktopBackgroundImg})` }}
      >
        {children}
      </div>
    </>
  );
}
