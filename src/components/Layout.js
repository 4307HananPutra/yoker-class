import TopNav from "@/components/navbar/TopNav";
import SideNav from "@/components/navbar/SideNav";
export default function Layout({ children }) {
    return (
        <>
            <TopNav />
            <div className="flex">
                <SideNav />
                {children}
            </div>
        </>
    )
}