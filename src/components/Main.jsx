import React from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function Main() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleChange = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="bg-opacity-80 w-full h-full relative">
        <Header />
        <div className=" inset-0 bg-gradient-to-b from-black via-transparent to-transparent h-full w-full overflow-hidden">
          <img
            src={BG_URL}
            alt=""
            className="h-full  object-cover translate-y-[-10%] scale-[1.25]"
            style={{ mixBlendMode: "overlay" }}
          />
        </div>
        <div className="absolute p-4 top-[30%] left-[16%]  transform translate[-50%,-50%] text-white flex flex-col gap-4 items-center">
          <h1 className="font-extrabold text-[3rem] w-full">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className="text-2xl">Watch anywhere. Cancel anytime.</h3>

          <h4 className="text-xl">
            Ready to watch? Enter your email to create or restart your
            membership
          </h4>
        </div>
      </div>
      <div className="w-full h-full  flex flex-col items-center  ">
        <div className="relative w-[80%] flex items-center p-[4.5rem] gap-10 ">
          <div className="w-[60%] text-red-500 flex flex-col gap-4 relative">
            <h1 className="text-5xl font-extrabold">Enjoy on your TV</h1>
            <p className="text-xl">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="w-[400px] relative ">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
              className=""
            />
            <div className="absolute top-[20%] left-[13%] z-[-1]  h-full">
              <video width="" autoPlay muted loop className="w-[267px]">
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="relative w-[80%] flex  items-center p-[4.5rem] gap-28  ">
          <div className="w-[400px]">
            <div className="relative   h-full">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt=""
                className="w-[100%]"
              />
              <div className="flex gap-3 border-solid border-2 border-[rgba(128,128,128,0.7)] p-3 bg-black rounded-lg text-white absolute bottom-0 left-[14%]">
                <img
                  src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt=""
                  className="h-[5rem]"
                />
                <div>
                  <h1>Stranger Things</h1>
                  <p>Downloading....</p>
                </div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt=""
                  className="h-[3rem]"
                />
              </div>
            </div>
          </div>
          <div className="w-[60%] text-red-500 flex flex-col gap-4">
            <h1 className="text-5xl font-extrabold">
              Download your shows to watch offline
            </h1>
            <p className="text-xl">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>

        {/* Frequently asked questions */}

        <div className="w-[80%] flex flex-col items-center p-[4.5rem] gap-28">
          <h1 className="font-bold text-2xl">Frequently asked questions</h1>
          <div className="questions flex flex-col gap-4">
            <Accordion onChange={handleChange}>
              <AccordionSummary
                expandIcon={isExpanded ? <CloseIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ fontSize: "1.4rem", fontWeight: "400" }}>
                  What is Netflix?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.
                  <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleChange}>
              <AccordionSummary
                expandIcon={isExpanded ? <CloseIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ fontSize: "1.4rem", fontWeight: "400" }}>
                  How much does Netflix cost?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹149 to ₹649 a month. No extra costs, no contracts.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleChange}>
              <AccordionSummary
                expandIcon={isExpanded ? <CloseIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ fontSize: "1.4rem", fontWeight: "400" }}>
                  Where can I Watch?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. <br /> You can also
                  download your favourite shows with the iOS, Android, or
                  Windows 10 app. Use downloads to watch while you're on the go
                  and without an internet connection. Take Netflix with you
                  anywhere.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleChange}>
              <AccordionSummary
                expandIcon={isExpanded ? <CloseIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ fontSize: "1.4rem", fontWeight: "400" }}>
                  How much does Netflix cost?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Accordion onChange={handleChange}>
                    <AccordionSummary
                      expandIcon={isExpanded ? <CloseIcon /> : <AddIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography
                        sx={{ fontSize: "1.4rem", fontWeight: "400" }}
                      >
                        How do I cancel?{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Watch Netflix on your smartphone, tablet, Smart TV,
                        laptop, or streaming device, all for one fixed monthly
                        fee. Plans range from ₹149 to ₹649 a month. No extra
                        costs, no contracts.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleChange}>
              <AccordionSummary
                expandIcon={isExpanded ? <CloseIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ fontSize: "1.4rem", fontWeight: "400" }}>
                  What can I watch on Netflix?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleChange}>
              <AccordionSummary
                expandIcon={isExpanded ? <CloseIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ fontSize: "1.4rem", fontWeight: "400" }}>
                  Is Netflix good for kids?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.
                  <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
