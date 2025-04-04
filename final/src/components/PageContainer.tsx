import { ReactNode } from "react";
import { Box } from '@mui/material';

interface PageContainerProps {
  children: ReactNode;
  styles?: React.CSSProperties;
}

const PageContainer = ({children, styles}: PageContainerProps) => {
  return (
    <Box className="container" sx={{ ...styles }}>
      {children}
    </Box>
  );
}

export default PageContainer;
