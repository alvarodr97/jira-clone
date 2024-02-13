import { LeftNavbar } from "./LeftNavbar"
import { Resizer } from "./Resizer"
import { Sidebar } from "./Sidebar"

export const Navigation = () => {
  return (
    <div className="flex">
        <div className="flex flex-row overflow-hidden h-full">
            <LeftNavbar />
            <Sidebar />
        </div>
        <Resizer />
    </div>
  )
}
