import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function GameCard({game}) {

  const [liked, setLiked] = useState(false)

  function handleLike () {
    setLiked(true)
  }

  function handleDislike () {
    setLiked(false)
  }
  
    return (
       <Card id='card-container' sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={game.title}
        subheader={game.genre}
      />
      {<a href={game.game_url} target='_blank'>
      <CardMedia
        component="img"
        height="194"
        image={game.thumbnail}
        alt="Paella dish"
      /> </a>}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {game.short_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
         {liked ? <FavoriteIcon onClick={handleDislike} id='like'/>  : <FavoriteIcon onClick={handleLike}/>}
        </IconButton>
      </CardActions>
    </Card>
    )
}

export default GameCard
