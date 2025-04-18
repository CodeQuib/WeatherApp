import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Grid, Divider } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AirIcon from '@mui/icons-material/Air';
import SpeedIcon from '@mui/icons-material/Speed';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloudIcon from '@mui/icons-material/Cloud';

export default function CardBox({ weatherInfo }) {
  const getWindDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  return (
    <Card sx={{ 
      maxWidth: { xs: '100%', sm: 400 },
      margin: '2rem auto',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={weatherInfo.icon}
          alt={weatherInfo.weather}
          sx={{ 
            objectFit: 'contain',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            padding: '1rem'
          }}
        />
        <CardContent>
          <Typography 
            variant="h4" 
            component="div" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 500,
              color: 'text.primary',
              textTransform: 'capitalize'
            }}
          >
            {weatherInfo.weather}
          </Typography>
          
          <Typography 
            variant="h5" 
            component="div" 
            align="center"
            sx={{ 
              mb: 1,
              color: 'text.primary',
              fontWeight: 500
            }}
          >
            {weatherInfo.city}, {weatherInfo.country}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="h3" 
              component="div" 
              align="center"
              sx={{ fontWeight: 'bold' }}
            >
              {Math.round(weatherInfo.temp)}°C
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              align="center"
            >
              Feels like {Math.round(weatherInfo.feelsLike)}°C
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <LightModeIcon color="warning" />
                <Typography variant="body2" color="text.secondary">
                  Sunrise: {weatherInfo.sunrise}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <DarkModeIcon color="primary" />
                <Typography variant="body2" color="text.secondary">
                  Sunset: {weatherInfo.sunset}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Typography variant="body2" color="text.secondary" align="center">
                  Min Temp
                </Typography>
                <Typography variant="body1" align="center" sx={{ fontWeight: 500 }}>
                  {Math.round(weatherInfo.tempMin)}°C
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography variant="body2" color="text.secondary" align="center">
                  Max Temp
                </Typography>
                <Typography variant="body1" align="center" sx={{ fontWeight: 500 }}>
                  {Math.round(weatherInfo.tempMax)}°C
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <AirIcon />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Wind
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {weatherInfo.wind} m/s {getWindDirection(weatherInfo.windDeg)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <SpeedIcon />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Pressure
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {weatherInfo.pressure} hPa
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <VisibilityIcon />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Visibility
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {weatherInfo.visibility} km
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <CloudIcon />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Cloudiness
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {weatherInfo.cloudiness}%
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
