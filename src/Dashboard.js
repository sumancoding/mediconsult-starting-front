import React from "react";
import "./App.css";
import {
  Grid,
  Box,
  CardContent,
  Typography,
  Paper,
  Tooltip,
  IconButton,
  Avatar,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { styled } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Dashboard() {
  return (
    <>
      <div className="dash-board">
        {" "}
        <h1> My DashBoard</h1>
      </div>
      <div>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item sm={12} md={6} style={{ textAlign: "row-start" }}>
            <CardContent>
              <Avatar
                sx={{ width: 180, height: 180 }}
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Tooltip title="Select Image">
                  <label htmlFor="faceImage">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      fontSize="large"
                    >
                      <AddAPhotoIcon fontSize="large" />
                    </IconButton>
                    Upload Image
                  </label>
                </Tooltip>
              </Avatar>
              <Typography
                sx={{ fontSize: 40 }}
                color="text.secondary"
                gutterBottom
              >
                {" "}
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    "& .MuiTextField-root": { m: 1, width: "15ch" },
                  }}
                >
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label=""
                    variant="standard"
                    fontSize="large"
                  />
                </Box>{" "}
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    "& .MuiTextField-root": { m: 1, width: "16.3ch" },
                  }}
                >
                  <TextField
                    id="input-with-sx"
                    label="Designation:"
                    variant="standard"
                    fontSize="large"
                  />
                </Box>{" "}
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    "& .MuiTextField-root": { m: 1, width: "16.3ch" },
                  }}
                >
                  <TextField
                    id="input-with-sx"
                    label="Email:"
                    variant="standard"
                    size="medium"
                    margin="dense"
                  />
                </Box>{" "}
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    "& .MuiTextField-root": { m: 1, width: "16.3ch" },
                  }}
                >
                  {" "}
                  <TextField
                    id="input-with-sx"
                    label="City: "
                    variant="standard"
                    fontSize="large"
                  />
                </Box>{" "}
                <br />
              </Typography>
            </CardContent>{" "}
          </Grid>
          <Grid item sm={12} md={6}>
            <Avatar
              sx={{ width: 600, height: 750 }}
              variant="square"
              style={{ justifyContent: "center", display: "flex" }}
            >
              {" "}
              <CardContent>
                <Typography sx={{ fontSize: 28 }} color="text.secondary">
                  {" "}
                  My UpComing Reservation Details: <br />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      "& .MuiTextField-root": { m: 1, width: "16.3ch" },
                    }}
                  >
                    <TextField
                      id="input-with-sx"
                      label="City:"
                      variant="standard"
                      fontSize="large"
                    />
                  </Box>{" "}
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      "& .MuiTextField-root": { m: 1, width: "16.3ch" },
                    }}
                  >
                    <TextField
                      id="input-with-sx"
                      label="Building:"
                      variant="standard"
                      size="medium"
                      margin="dense"
                    />
                  </Box>{" "}
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      "& .MuiTextField-root": { m: 1, width: "16.3ch" },
                    }}
                  >
                    {" "}
                    <TextField
                      id="input-with-sx"
                      label="Room: "
                      variant="standard"
                      fontSize="large"
                    />
                  </Box>{" "}
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      "& .MuiTextField-root": { m: 1, width: "16.3ch" },
                    }}
                  >
                    {" "}
                    <TextField
                      id="input-with-sx"
                      label="Spot: "
                      variant="standard"
                      fontSize="large"
                    />
                  </Box>{" "}
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      "& .MuiTextField-root": { m: 1, width: "16.3ch" },
                    }}
                  >
                    {" "}
                    <TextField
                      id="input-with-sx"
                      label="Date:"
                      variant="standard"
                      fontSize="large"
                    />
                  </Box>{" "}
                  <br />
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined">Add new</Button>
                    <Button variant="outlined">Modify</Button>
                    <Button variant="outlined">Delete</Button>
                  </Stack>
                </Typography>
              </CardContent>{" "}
            </Avatar>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Dashboard;
