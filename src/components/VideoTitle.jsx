import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Info, PlayCircleFilled } from "@mui/icons-material";
// import Button from '@mui/material/Button';

function VideoTitle({ title, overview }) {
  return (
    <div className="w-full aspect-video pt-[20%] pl-20 flex flex-col gap-4 absolute  text-white bg-gradient-to-r from-black ">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h3 className="w-1/3">{overview}</h3>
      <Stack direction="row" spacing={2}>
        <Button
          variant="elevated"
          startIcon={<PlayCircleFilled />}
          sx={{
            backgroundColor: "white",
            color: "black", // Tailwind CSS bg-red-500
            "&:hover": {
              backgroundColor: "gray", // Tailwind CSS hover:bg-red-600
            },
          }}
        >
          Play
        </Button>
        <Button
          variant="elevated"
          endIcon={<Info />}
          sx={{
            backgroundColor: "gray", // Tailwind CSS bg-red-500
            "&:hover": {
              backgroundColor: "", // Tailwind CSS hover:bg-red-600
            },
          }}
        >
          More Info
        </Button>
      </Stack>
      {/* <Button variant="contained">Hello world</Button>; */}
    </div>
  );
}

export default VideoTitle;
