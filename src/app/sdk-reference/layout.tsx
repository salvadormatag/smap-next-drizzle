
import {LlistatItemsSdkReference} from "@/app/lib/ItemsNavigator";
import {SmapSidebar} from "@smap-dev/sdk/navigator";

export default function SdkReferenceLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={"flex min-h-screen"}>
            <div className="w-64 bg-gray-800 text-white p-4">
                <SmapSidebar items={LlistatItemsSdkReference} />
            </div>
            <div className="flex-1 bg-gray-100 p-4">
                {children}
            </div>
        </main>
    );
}
