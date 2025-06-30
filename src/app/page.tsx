import { Skeleton, Typography } from "@mui/material";

export default function Home() {
  const loading = false;

  return (
    <div>
      <Typography variant="h1">{loading ? <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" animation="wave" /> : "Andrey Luiz Galeazzi"}</Typography>
    </div>
  );
}
