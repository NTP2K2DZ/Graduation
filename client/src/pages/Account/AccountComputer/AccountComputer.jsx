import Sidebar from "./AccountSideBar/AccountSideBarComputer";
import { Outlet } from 'react-router-dom';

const AccountComputer = () => {
  return (
    <div className="bg-[#F5F5F5] text-[#333333] min-h-screen">
            <div className="flex justify-center mx-auto">
                <div className="flex w-full max-w-[1100px] h-420px flex-nowrap my-6 p-6">
                    <div className="w-[20%]">
                        <Sidebar />
                    </div>

                    <div className="w-[80%] flex-grow min-w-0 h-full overflow-hidden mx-[10px] bg-white rounded">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
  );
}

export default AccountComputer;