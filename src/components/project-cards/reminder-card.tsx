import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class ReminderCard extends React.Component<{}> {
  render() {
    return (
      <div>
        <CardContent>
          <Typography variant="h5" component="div">
            Stretch Reminder App
          </Typography>
          <Typography
            component={"span"}
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            Pygame, Python, and Tkinter
          </Typography>
          <Typography component={"span"} variant="body2">
            <ul>
              <li>Reminds user to stretch</li>
              <li>Provides examples of stretches</li>
              <li>Points and leaderboard system for completing stretches</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              href="https://github.com/ErnestoHkirk/362-Stretch-Reminder-App"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </div>
    );
  }
}
export default ReminderCard;
