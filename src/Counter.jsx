import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export function Counter() {
  const [Like, setLike] = useState(0);
  const [Dislike, setDislike] = useState(0);
  return (
    <div>
      <IconButton onClick={() => setLike(Like + 1)} color="primary" aria-label="add to shopping cart">
      <Badge badgeContent={Like} color="success">
  <ThumbUpAltIcon/>
</Badge>
</IconButton>
<IconButton onClick={() => setDislike(Dislike + 1)} color="primary" aria-label="add to shopping cart">

<Badge badgeContent={Dislike} color="error">
<ThumbDownAltIcon/>
</Badge>
</IconButton>
      
    </div>
  );
}
