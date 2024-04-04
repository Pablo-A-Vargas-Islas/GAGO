const Component = () => {
  return (
    <div className="w-[396px] flex flex-col items-start justify-start pt-[15px] px-[25px] pb-[376px] box-border relative gap-[88px] max-w-[calc(100%_-_0px)] shrink-0 text-left text-base text-white font-poppins mq450:gap-[44px_88px] mq450:pb-[159px] mq450:box-border mq850:pt-5 mq850:pb-[244px] mq850:box-border">
      <div className="w-[calc(100%_-_3px)] h-[223px] absolute !m-[0] top-[0px] right-[3px] left-[0px] bg-royalblue1 shadow-[1px_-10px_20px_1px_rgba(0,_0,_0,_0.3)]" />
      <div className="w-[calc(100%_-_3px)] h-[854px] absolute !m-[0] right-[3px] bottom-[0px] left-[0px] rounded-6xl bg-white shadow-[0px_10px_20px_rgba(0,_0,_0,_0.25)] z-[1]" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[25px] pl-5">
          <div className="relative font-semibold z-[1]">Gago Transportes</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[14px] text-xl mq450:flex-wrap">
          <div className="h-[100px] flex flex-row items-start justify-start relative min-w-[100px] mq450:flex-1">
            <img
              className="h-[100px] w-[100px] relative rounded-[50%] object-cover z-[1] mq450:flex-1"
              loading="lazy"
              alt=""
              src="/ellipse-1@2x.png"
            />
            <div className="h-2.5 w-2.5 absolute !m-[0] right-[21px] bottom-[0px] rounded-[50%] bg-forestgreen z-[2]" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[151px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
                <b className="relative z-[1] mq450:text-base">
                  Pablo Armando V.
                </b>
              </div>
              <div className="h-[35px] flex flex-row items-start justify-start relative">
                <img
                  className="h-[35px] w-[35px] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/icbaselinemorehoriz.svg"
                />
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
                  loading="lazy"
                  alt=""
                  src="/icbaselinemorehoriz.svg"
                />
              </div>
            </div>
            <a
              className="relative text-sm text-[inherit] [text-decoration:none] whitespace-nowrap z-[1]"
              href="mailto:pabloA2002@gmail.com"
              target="_blank"
            >
              pabloA2002@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="w-[307px] h-[420px] flex flex-row items-start justify-start py-0 px-[39px] box-border text-lightgray">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[69px]">
          <div className="h-[25px] flex flex-row items-start justify-start gap-[5px]">
            <img
              className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px] z-[3]"
              loading="lazy"
              alt=""
              src="/materialsymbolssearch.svg"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="flex flex-row items-start justify-start relative">
                <input
                  className="[border:none] [outline:none] bg-whitesmoke h-10 w-[325px] absolute !m-[0] top-[calc(50%_-_20px)] right-[-217px] rounded-31xl z-[2]"
                  type="text"
                />
                <div className="relative inline-block min-w-[57px] z-[3]">
                  Search
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[36.5px] text-5xl text-gray-300">
            <div className="flex-1 flex flex-row items-start justify-start gap-[21px] text-royalblue1">
              <img
                className="h-[35px] w-[35px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/materialsymbolsdashboard.svg"
              />
              <b className="relative z-[2] mq450:text-lgi">Dashboard</b>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[21px]">
              <img
                className="h-[35px] w-[35px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/heroiconstruck.svg"
              />
              <div className="relative font-medium inline-block min-w-[115px] z-[2] mq450:text-lgi">
                Unidades
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[21px]">
              <img
                className="h-[35px] w-[35px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/iconamoonprofilelight.svg"
              />
              <div className="relative font-medium inline-block min-w-[110px] z-[2] mq450:text-lgi">
                Choferes
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[21px]">
              <img
                className="h-[35px] w-[35px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/minotification.svg"
              />
              <div className="relative font-medium z-[2] mq450:text-lgi">
                Notificaciones
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[21px]">
              <img
                className="h-[35px] w-[35px] relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/solarsettingsoutline.svg"
              />
              <div className="relative font-medium z-[2] mq450:text-lgi">
                Configuración
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
