import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


const Header = ({ title, subtitle }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h3"
        color='white'
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {t('Dashboardmain')}
      </Typography>
      <Typography variant="h5" color='#4cceac'>
        {t('wellcomeDashboard')}
      </Typography>
    </Box>
  );
};

export default Header;
