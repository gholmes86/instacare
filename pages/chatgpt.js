import DashboardNavbar from "../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../examples/LayoutContainers/DashboardLayout";
import ChatInput from "../components/chatinput"
import Chat from "../components/chat"


export default function ChatGPT() {
    return (
        <div>
            <DashboardLayout>
                <div className="flex flex-col h-screen ">
                    {/* <h1 >What is your query?</h1> */}
                    <Chat />
                    <ChatInput />
                    <div className="bg" >
                    </div>
                </div>
            </DashboardLayout>
        </div>)
}