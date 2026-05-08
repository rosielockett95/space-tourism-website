import desktopBackgroundImg from "./assets/home/background-home-desktop.jpg";

export default function PageWrapper({ children }) {
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
