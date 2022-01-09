import React from "react";
import "./App.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  Tooltip,
  IconButton,
  TextField,
  FormControl,
  Typography,
  Stack,
  Button,
} from "@mui/material";
function Dashboard() {
  return (
    <div>
      <h1> My DashBoard </h1>
      <div id="container">
        <div className="item-one">
          <div className="circle">
            <Tooltip title="Select Image">
              <label htmlFor="faceImage">
                <IconButton color="primary">
                  <AddAPhotoIcon fontSize="large" />
                </IconButton>{" "}
                <br />
                <strong> Upload Image</strong>
              </label>
            </Tooltip>
          </div>{" "}
          <div className="text-one">
            <form>
              <FormControl>
                <AccountCircle sx={{ color: "action.active", mr: 30, my: 0 }} />
                <TextField
                  id="standard-basic"
                  margin="dense"
                  variant="standard"
                />
                <br />
                <TextField
                  label={"Designation:"}
                  id="standard-basic"
                  margin="dense"
                  variant="standard"
                />{" "}
                <br />
                <TextField
                  label={"Email:"}
                  id="standard-basic"
                  margin="dense"
                  variant="standard"
                />{" "}
                <br />
                <TextField
                  label={"City:"}
                  id="standard-basic"
                  margin="dense"
                  variant="standard"
                />
              </FormControl>
            </form>
          </div>
        </div>
        <div className="item-two">
          <form>
            <FormControl>
              <Typography sx={{ fontSize: 26 }} color="text.secondary">
                UpComing Reservation Details:
              </Typography>
              <br />
              <TextField
                label={"City:"}
                id="standard-basic"
                variant="standard"
                sx={{ mr: 20, my: 4 }}
              />{" "}
              <TextField
                label={"Building:"}
                id="standard-basic"
                sx={{ mr: 20, my: 4 }}
                variant="standard"
              />
              <TextField
                label={"Room:"}
                id="standard-basic"
                sx={{ mr: 20, my: 4 }}
                variant="standard"
              />
              <TextField
                label={"Spot:"}
                id="standard-basic"
                sx={{ mr: 20, my: 4 }}
                variant="standard"
              />
              <TextField
                label={"Date:"}
                id="standard-basic"
                sx={{ mr: 20, my: 4 }}
                variant="standard"
              />
              <br />
              <Stack direction="row" spacing={2}>
                <Button variant="outlined">Add new</Button>
                <Button variant="outlined">Modify</Button>
                <Button variant="outlined">Delete</Button>
              </Stack>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

/*import React from "react";
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
*/
