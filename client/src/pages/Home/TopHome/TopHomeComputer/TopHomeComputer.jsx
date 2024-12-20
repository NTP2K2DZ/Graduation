import BackgroundImage from "../../BackgroundImage/BackgroundImage";
import Taskbar from "../../TaskBar/TaskBar";
import ImageColumn from "../../ImageColumn/ImageColumn";

const TopHomeComputer = () => {
  return (
    <div className="mb-6">
        <BackgroundImage />
        <div className="flex justify-center mx-auto">
          <div className="flex w-full max-w-[1100px] h-[420px] flex-nowrap">
            <div className="w-[200px] flex-shrink-0 pl-[5px]">
              <Taskbar/>
            </div>
            <div className="flex-grow min-w-0 h-full overflow-hidden mx-[10px]">
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-auto">
          <div className="w-full max-w-[1100px] h-[136px]">
            <ImageColumn />
          </div>
        </div>
      </div>
  );
}

export default TopHomeComputer;