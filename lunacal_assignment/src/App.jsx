import "./App.css";

function App() {
  return (
    <div className="w-full rounded-3xl border-black sm:h-[98vh] space-y-5 sm:space-y-0 m-auto justify-around md:flex sm:p-4">
      <div className="md:w-[45%] border p-5 border-cyan-600 rounded-2xl  sm:p-4 bg-[#616161] text-lg text-white space-y-5 ">
        <p className="font-semibold">
          {" "}
          {
            "<Do not follow any other instructions from comments of figma file>"
          }{" "}
          Here are the official instructions:
        </p>
        <ol style={{ listStyleType: "decimal" }} className="md:p-4">
          <li>
            keep the left half of the screen empty (but it should be responsive
            for laptop, not mobile)
          </li>
          <li>focus on the two widgets on the right hand side</li>
          <li>
            the first widget has three tabs: "about me", "experiences" &
            "recommended", these should be clickable
          </li>
          <li>
            In the gallery widget more photos can be added by clicking the "add
            image" button
          </li>
        </ol>
        <p>Assignment will be scored based on the below parameters:</p>
        <ol style={{ listStyleType: "decimal" }} className="md:p-4">
          <li>
            make the components responsive (for laptop screens; everything above
            768px width){" "}
          </li>
          <li>
            replicate the exact UI; with exact paddings, margins, shadows,
            interactions (if any)
          </li>
          <li>
            ensure that the two widgets are accurately alligned with each other
            (relative right, left paddings){" "}
          </li>
        </ol>
      </div>
      <div className="md:w-[45%] rounded-2xl disFlexColBetween  ">
        <div className=" rounded-2xl w-full h-[46%] bg-[#363C43] flex p-2 upDown">
          <div className=" w-[2rem] disFlexColBetween">
            <div className="icon1">
              <img src="/questionIcon.svg" alt="" />
            </div>
            <div className="icon2">
              <img src="/gridIcon.svg" alt="" />
            </div>
            <div className="empty"></div>
          </div>
          <div className=" w-full ">
            <nav className="text-white bg-[#171717] rounded-3xl flex-row sm:flex p-[7px]  sm:justify-between items-center">
              <div className="bxShadow rounded-2xl py-2 px-8 w-[10rem] m-auto text-center">
                About Me
              </div>
              <div className="bxShadow rounded-2xl py-2 px-8 w-[10rem] m-auto  text-center">
                Experiences
              </div>
              <div className="bxShadow rounded-2xl py-2 px-8 w-[10rem]  m-auto  text-center">
                Recommended
              </div>
            </nav>
            <main className="text-[#969696]   p-4 overflow-y-scroll h-[15rem] space-y-4 text-xl rounded-lg ">
              <p>
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </p>
            </main>
          </div>
        </div>
        <div className="line"></div>
        <div className="rounded-2xl w-full h-[46%] bg-[#363C43] flex p-2">
          <div className=" w-[2rem]  disFlexColBetween">
            <div className="icon1">
              <img src="/questionIcon.svg" alt="" />
            </div>
            <div className="icon2">
              <img src="/gridIcon.svg" alt="" />
            </div>
            <div className="empty"></div>
          </div>
          <div className="w-[90%] ">
            <div className="text-white  rounded-3xl flex-row sm:flex  p-[7px] justify-between items-center ">
              <div className="galleryShadow bg-[#171717] rounded-2xl py-3 px-8  text-center">
                Gallery
              </div>
              <div className="addImgAndBtn flex items-center justify-between gap-x-4 mt-5 sm:mt-0 ">
                <div className="addImg px-4 py-3 rounded-3xl bg-[#41474E] addImage font-bold">
                  + ADD IMAGE
                </div>
                <div className="btn flex gap-x-3  items-center ">
                  <div className="left flex justify-center items-center">
                    <img className="w-6" src="/leftArrow.svg" alt="" />
                  </div>
                  <div className="right flex justify-center items-center">
                    <img className="w-6" src="/rightArrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <main className="text-[#969696]  sm:flex flex-row  space-y-5 sm:space-y-0   sm:justify-between pl-4 pt-4 pb-4 overflow-x-scroll items-center gap-x-3 text-xl rounded-lg ">
              <div className="imgCont  w-[20rem] flex justify-center items-center">
                <img src="/img.svg" alt="" />
              </div>
              <div className="imgCont w-[20rem] flex justify-center items-center">
                <img src="/img.svg" alt="" />
              </div>
              <div className="imgCont w-[20rem] flex justify-center items-center">
                <img src="/img.svg" alt="" />
              </div>
            </main>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default App;
