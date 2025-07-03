import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
export default function InfoBox({info}){
    const initialURL="https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    return<>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={initialURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       <div> feelsLike: {info.feelsLike}</div>
        <div>humidity: {info.humidity}</div>
        <div>temp: {info.temp} &deg; C</div>
        <div>tempMax: {info.tempMax}&deg;</div>
       <div> tempMin: {info.tempMin}&deg;</div>
       <div> weather: {info.weather}</div>
        </Typography>
      </CardContent>

    </Card>
    
    </>
}