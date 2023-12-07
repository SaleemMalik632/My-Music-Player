import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import VideocamIcon from "@mui/icons-material/Videocam";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Header from "./components/Header";
import StatBox from "./components/StatBox";
import { MusicNote, UploadFile } from "@mui/icons-material";
import Chart from './Chart';
import { useTranslation } from 'react-i18next';


const Dashboard = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const colors = tokens();

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to Me Player" />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: '#4cceac',
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <UploadFile sx={{ mr: "10px" }} />
                        {t('BtnUpload')}
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                {/* THIS is for the audio file  */}
                <Box
                    gridColumn="span 3"
                    backgroundColor="#fbfdff"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12"
                        subtitle={t('Audio')}
                        progress="0.12"
                        icon={
                            <AudiotrackIcon
                                sx={{ color: '#3da58a', fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor="#fbfdff"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="225"
                        subtitle={t('Video')}
                        progress="0.50"
                        icon={
                            <VideocamIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor="#fbfdff"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="321m"
                        subtitle={t('Watchtime')}   // this is for the watch time 
                        progress="0.30"
                        icon={
                            <AccessTimeIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor="#fbfdff"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="100"
                        subtitle={t('LikeMusic')}
                        progress="0.80"
                        icon={
                            <FavoriteIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                {/* ROW 2 */}

                

                <Box
                    gridColumn="span 8"
                    gridRow="span 3"
                    backgroundColor="#fbfdff"
                    // mt={15}

                >
                    <Box
                        mt="25px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="10"
                                color={colors.grey[100]}
                            >
                                {t('Report')}
                            </Typography>
                        </Box>
                    </Box>
                    <Box height="200px" m="-10px 0 0 0">
                        <Chart />
                    </Box>
                </Box>




                <Box
                    gridColumn="span 4"
                    gridRow="span 3"
                    backgroundColor="#fbfdff"
                    overflow="auto"
                    // mt={15}
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            {t('RecentPlay')}
                        </Typography>
                    </Box>
                    {
                        [1, 2, 3, 3, 3, 3, 3].map((transaction, i) => (
                            <Box
                                key={`${transaction.txId}-${i}`}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                borderBottom='4px solid #141b2d'
                                p="15px"
                            >
                                <Box>
                                    <Typography
                                        color='#4cceac'
                                        variant="h5"
                                        fontWeight="600"
                                    >
                                        Music Name
                                    </Typography>
                                    <Typography color='#141414'>
                                        Singer Name
                                    </Typography>
                                </Box>
                                <Button
                                    backgroundColor='#4cceac'
                                    p="5px 10px"
                                    borderRadius="4px"
                                    onClick={() => alert('hello ')}

                                >
                                    {t('PlayNow')}
                                    <MusicNote />
                                </Button>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
