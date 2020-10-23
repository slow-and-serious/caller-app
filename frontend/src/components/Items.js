import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  postTitle: {
    fontSize: "16px",
    textAlign: "left",
  },
  postText: {
    display: "flex",
    justifyContent: "left",
    alignItems: "baseline",
    fontSize: "12px",
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
}));

const Items = (props) => {
  const { items } = props;
  const classes = useStyles();
  if (!items || items.length === 0) return <p>Can not find any items, sorry</p>;
  return (
    <>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {items.map((item) => {
            return (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={item.id} xs={12} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.postTitle}
                    >
                      {item.name.substr(0, 50)}...
                    </Typography>
                    <div className={classes.postText}>
                      <Typography color="textSecondary">
                        ${item.price}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default Items;
