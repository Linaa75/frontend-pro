import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  styles?: React.CSSProperties;
}

const PageContainer = ({children, styles}: PageContainerProps) => {
  return (
    <div className="container" style={styles}>
      {children}
    </div>
  )
}

export default PageContainer;