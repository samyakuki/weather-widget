import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const initialURL="https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const hotURL="https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=ADC9cFwz86iJURgop2ZiYNJJ_0JZLkRr6Hp99P95DGc=";
    const coldURL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rainURL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";
    
    return<>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? rainURL : (info.temp>15 ? hotURL: coldURL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity >80 ? <WaterDropIcon></WaterDropIcon> : (info.temp>15 ? <SunnyIcon></SunnyIcon>: <AcUnitIcon></AcUnitIcon>)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       <div><b>Temperature  feels Like:</b> {info.feelsLike}</div>
        <div><b>Humidity Levels:</b> {info.humidity}</div>
        <div><b>Temperature: </b>{info.temp} &deg; C</div>
        <div><b>Maximum Temperature:</b> {info.tempMax}&deg; C</div>
       <div> <b>Minimum Temperature:</b> {info.tempMin}&deg; C</div>
       <div><b> Weather in General:</b> {info.weather}</div>
        </Typography>
      </CardContent>

    </Card>
    
    </>
}