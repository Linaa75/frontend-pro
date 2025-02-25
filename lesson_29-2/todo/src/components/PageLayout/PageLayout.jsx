import style from "./PageLayout.module.scss";

export function PageLayout({
  renderHeader = () => null,
  renderContent = () => null,
  renderFooter = () => null,
}) {
  const { container, header, content, footer } = style;
  return (
    <>
      <header className={header}>{renderHeader()}</header>
      <main className={content}>{renderContent()}</main>
      <footer className={footer}>{renderFooter()}</footer>
    </>
  );
}