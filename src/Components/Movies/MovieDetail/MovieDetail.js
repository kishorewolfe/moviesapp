import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useDispatch } from "react-redux";
import { fetchMandSAsyncThunk } from "../../../store/movies/MoviesSlice";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import TheatersIcon from "@mui/icons-material/Theaters";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getBothMorS } from "../../../store/movies/MoviesSlice";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Table } from "@mui/material";

const MovieDetail = () => {
  let { imdbID } = useParams();

  console.log(imdbID);
  const data = useSelector(getBothMorS);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(fetchMandSAsyncThunk(imdbID));
  }, [dispatch, imdbID]);
  console.log("the data is ", data);

  return (
    <div className="detailspage">
      <Container fixed className="containerMovieDetail">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box>
                {/* <Stack direction="row" spacing={2}> */}
                <h1> {data.Title}</h1>
                {/* </Stack> */}
                <div>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      ></Typography>
                      <Typography variant="h5" component="div"></Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.primary">
                        <span>
                          IMDB Rating{" "}
                          <StarBorderPurple500Icon style={{ color: "gold" }} />{" "}
                          : {data.imdbRating}
                        </span>{" "}
                        <span>
                          IMDB Votes <ThumbUpAltIcon /> : {data.imdbVotes}
                        </span>{" "}
                        <span>
                          Runtime <TheatersIcon /> : {data.Runtime}
                        </span>{" "}
                        <span>
                          Year <CalendarMonthIcon /> : {data.Year}
                        </span>{" "}
                      </Typography>
                      <Typography variant="body2">
                        {data.Plot}
                        <br />
                        {""}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <span></span>
                    </CardActions>
                  </Card>
                </div>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Card />
              <img src={data.Poster} height="560" />

              <Card />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default MovieDetail;
